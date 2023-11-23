import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { buildClient } from "npm:@datocms/cma-client-node";
import { globSync } from "npm:glob";
import { parseTemplate, Template } from "./lib/parseTemplate.ts";
import chalk from "npm:chalk";

const TEMPLATE_ID = "MQloN7VRQQujFdHe_xCcUA";
const TEMPLATE_TAG_ID = "KLoCCjQuRGSzwFYptLJSUg";

await load({ export: true });
const client = buildClient({ apiToken: Deno.env.get("DATO_API_TOKEN") ?? "" });

// Fetch all tags and return a map of name -> ID
async function fetchTags() {
  const records = await client.items.list({
    filter: {
      type: TEMPLATE_TAG_ID,
    },
  });

  return records.reduce((acc, category) => {
    acc.set(category.name, category.id);
    return acc;
  }, new Map());
}

const tagIds = await fetchTags();

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

  if (records.length > 1) {
    throw new Error(
      `Found ${records.length} templates with name ${template.title}`
    );
  }

  // Map tags -> Dato tags
  template.tags = template.tags.map((tag: string) => {
    if (!tagIds.has(tag)) {
      throw new Error(`Template ${template.slug} has unknown tag "${tag}"`);
    }
    return tagIds.get(tag);
  });

  if (records.length) {
    console.log(
      `${chalk.cyanBright(
        `https://buildkite.com/templates/${template.slug}`
      )} ${chalk.whiteBright("→")} ${chalk.cyan(template.title)}`
    );

    return client.items.update(records[0].id, template);
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
      ...template,
    });
  }
}

// Iterate over files and push to DatoCMS
const templates = globSync("pipelines/*/README.md");
templates.forEach(async (path) => {
  try {
    const template = await parseTemplate(path);
    await upsertTemplate(template);
  } catch (error) {
    console.error(error.message);
    Deno.exit(1);
  }
});
