import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { buildClient } from "npm:@datocms/cma-client-node";
import { globSync } from "npm:glob";
import { parseTemplate, Template } from "./parseTemplate.ts";
import chalk from "npm:chalk";
import { dirname } from "https://deno.land/std@0.205.0/path/dirname.ts";
import { join } from "https://deno.land/std@0.205.0/path/join.ts";

const { DATO_API_TOKEN, DATO_TEMPLATE_ID, DATO_TEMPLATE_CATEGORY_ID } =
  await load();
const client = buildClient({ apiToken: DATO_API_TOKEN ?? "" });

// Fetch all categories and return a map of name -> ID
async function fetchCategories() {
  const records = await client.items.list({
    filter: {
      type: DATO_TEMPLATE_CATEGORY_ID,
    },
  });

  return records.reduce((acc, category) => {
    acc.set(category.name, category.id);
    return acc;
  }, new Map());
}

// Fetch the categories once.
const datoCategories = await fetchCategories();

function transformCategories(categories: string[]) {
  // Map categories -> Dato categories
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
      type: DATO_TEMPLATE_ID,
      fields: {
        slug: { eq: template.slug },
      },
    },
  });

  const payload = {
    ...template,
    categories: transformCategories(template.categories),
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
        id: DATO_TEMPLATE_ID,
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
