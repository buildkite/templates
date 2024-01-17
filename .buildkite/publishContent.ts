import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { buildClient } from "npm:@datocms/cma-client-node";
import { globSync } from "npm:glob";
import { parseTemplate, Template } from "./lib/parseTemplate.ts";
import chalk from "npm:chalk";
import { dirname } from "https://deno.land/std@0.205.0/path/dirname.ts";
import { join } from "https://deno.land/std@0.205.0/path/join.ts";
import { fromMarkdown } from "https://esm.sh/mdast-util-from-markdown@2";
import { toHast } from "https://esm.sh/mdast-util-to-hast@13";
import { hastToStructuredText } from "npm:datocms-html-to-structured-text";

const TEMPLATE_ID = "MQloN7VRQQujFdHe_xCcUA";
const TEMPLATE_CATEGORY_ID = "AiaelmlCSOq7OCAgLOopUw";

await load({ export: true });
const client = buildClient({ apiToken: Deno.env.get("DATO_API_TOKEN") ?? "" });

// Fetch all categories and return a map of name -> ID
async function fetchCategories() {
  const records = await client.items.list({
    filter: {
      type: TEMPLATE_CATEGORY_ID,
    },
  });

  return records.reduce((acc, category) => {
    acc.set(category.name, category.id);
    return acc;
  }, new Map());
}

// Fetch the categories once.
const datoCategories = await fetchCategories();

// Markdown -> MDAST -> HAST -> DAST (DatoCMS Structured Text)
function toDatoStructuredText(content: string) {
  const mdast = fromMarkdown(content);
  const hast = toHast(mdast);
  return hastToStructuredText(hast);
}

// Map categories -> Dato categories
function toDatoCategories(categories: string[]) {
  return categories.map((tag: string) => {
    if (!datoCategories.has(tag)) {
      throw new Error(`invalid category: ${tag}`);
    }
    return datoCategories.get(tag);
  });
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
    language: JSON.stringify(template.language),
    use_case: JSON.stringify(template.use_case),
    platform: JSON.stringify(template.platform),
    tools: JSON.stringify(template.tools),
    content: await toDatoStructuredText(template.content),
  };

  if (records.length > 1) {
    throw new Error(
      `Found ${records.length} templates with name ${template.title}`
    );
  }

  if (records.length) {
    console.log(
      `${chalk.cyanBright(
        `https://buildkite.com/templates/${template.slug}`
      )} ${chalk.whiteBright("→")} ${chalk.cyan(template.title)}`
    );

    return client.items.update(records[0].id, payload);
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
    Deno.exit(1);
  }
});
