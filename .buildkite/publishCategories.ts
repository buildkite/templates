import { parse } from "npm:yaml";
import chalk from "npm:chalk";
import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { buildClient } from "npm:@datocms/cma-client-node";

const {
  DATO_API_TOKEN,
  DATO_TEMPLATE_CATEGORY_ID,
  DATO_TEMPLATE_PARENT_CATEGORY_ID,
} = await load();

const client = buildClient({ apiToken: DATO_API_TOKEN ?? "" });

// Fetch all **parent** categories mapped name -> ID
export async function fetchParentCategories(): Promise<Map<string, string>> {
  const records = await client.items.list({
    filter: {
      type: DATO_TEMPLATE_PARENT_CATEGORY_ID,
    },
  });

  return records.reduce((acc, category) => {
    acc.set(category.name, category.id);
    return acc;
  }, new Map());
}

export async function upsertCategory(category: {
  name: string;
  emoji?: string;
  parent: { name: string; id: string };
}) {
  const records = await client.items.list({
    filter: {
      type: DATO_TEMPLATE_CATEGORY_ID,
      fields: {
        name: { eq: category.name },
      },
    },
  });

  const payload = {
    name: category.name,
    emoji: category.emoji,
    parent_category: category.parent.id,
  };

  if (records.length > 0) {
    console.log(
      `${chalk.cyanBright(
        `https://buildkite.com/pipelines/templates/${category.slug}`
      )} ${chalk.whiteBright("→")} ${chalk.cyan(
        category.parent.name
      )} ${chalk.whiteBright("→")} ${chalk.cyan(category.name)}`
    );
    return client.items.update(records[0].id, payload);
  } else {
    console.log(
      `${chalk.greenBright(
        `https://buildkite.com/pipelines/templates/${category.slug}`
      )} ${chalk.whiteBright("→")} ${chalk.green(
        category.parent.name
      )} ${chalk.whiteBright("→")} ${chalk.green(category.name)}`
    );

    return client.items.create({
      item_type: {
        type: "item_type",
        id: DATO_TEMPLATE_CATEGORY_ID,
      },
      ...payload,
    });
  }
}

// Parse YAML
const file = await Deno.readTextFile("categories.yaml");
const yaml = parse(file) as {
  name: string;
  children: {
    name: string;
    emoji?: string;
  }[];
}[];

// Fetch parent category IDs from DatoCMS
const parents = await fetchParentCategories();

// Insert categories into DatoCMS
yaml.forEach((parent) => {
  parent.children.forEach(async (child) => {
    try {
      await upsertCategory({
        ...child,
        parent: { name: parent.name, id: parents.get(parent.name) ?? "" },
      });
    } catch (error) {
      console.error(error.message);
      Deno.exit(1);
    }
  });
});
