import "dotenv/config";
import { buildClient } from "@datocms/cma-client-node";
import { globSync } from "glob";
import { parseTemplate, Template } from "./lib/parseTemplate.ts";
import chalk from "chalk";
import { join, dirname } from "path";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toHast } from "mdast-util-to-hast";
import {
  HastRootNode,
  hastToStructuredText,
} from "datocms-html-to-structured-text";

const TEMPLATE_ID = "MQloN7VRQQujFdHe_xCcUA";

const client = buildClient({ apiToken: process.env.DATO_API_TOKEN ?? "" });

// Markdown -> MDAST -> HAST -> DAST (DatoCMS Structured Text)
function toDatoStructuredText(content: string) {
  const mdast = fromMarkdown(content);
  const hast = toHast(mdast);
  return hastToStructuredText(hast as HastRootNode);
}

// Update of insert a template based on whether it already
// exists in DatoCMS.
//
// Not the most performant since it's doing a list and then
// an update or create. Could be improved if we kept a local
// cache of slugs to IDs.
async function upsertTemplate(template: Template) {
  const records = await client.items.list({
    filter: {
      type: TEMPLATE_ID,
      fields: {
        slug: { eq: template.slug },
      },
    },
  });

  const payload = {
    ...template,
    languages: JSON.stringify(template.languages),
    use_cases: JSON.stringify(template.use_cases),
    platforms: JSON.stringify(template.platforms),
    tools: JSON.stringify(template.tools),
    content: await toDatoStructuredText(template.content),
    primary_emojis: JSON.stringify(template.primary_emojis),
  };

  if (records.length > 1) {
    throw new Error(
      `Found ${records.length} templates with name ${template.title}`
    );
  }

  const upload = await client.uploads.createFromLocalFile({
    localPath: `./generated/${template.slug}.png`,
  });

  if (records.length) {
    console.log(
      `${chalk.cyanBright(
        `https://buildkite.com/templates/${template.slug}`
      )} ${chalk.whiteBright("→")} ${chalk.cyan(template.title)}`
    );

    const item = await client.items.update(records[0].id, {
      ...payload,
      preview: {
        upload_id: upload.id,
      },
    });

    // Hose the old preview image now that it's no longer being referenced.
    if (records[0].preview) {
      await client.uploads.destroy(records[0].preview.upload_id);
    }

    return item;
  } else {
    console.log(
      `${chalk.greenBright(
        `https://buildkite.com/templates/${template.slug}`
      )} ${chalk.whiteBright("→")} ${chalk.green(template.title)}`
    );

    return client.items.create({
      item_type: {
        type: "item_type",
        id: TEMPLATE_ID,
      },
      ...payload,
      preview: {
        upload_id: upload.id,
      },
    });
  }
}

// Iterate over files and push to DatoCMS
const pipelines = globSync("*/pipeline.yaml");
pipelines.forEach(async (path) => {
  const folder = dirname(path);

  try {
    const template = await parseTemplate(join(folder, "README.md"));
    await upsertTemplate(template);
  } catch (error) {
    console.error(`${path}: ${error.message}`);
    process.exit(1);
  }
});
