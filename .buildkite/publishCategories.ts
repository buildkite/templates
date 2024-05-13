import "dotenv/config";
import { buildClient } from "@datocms/cma-client-node";
import { globSync } from "glob";
import { parseTemplate } from "./lib/parseTemplate.ts";
import { join, dirname } from "path";
import { slugify } from "./lib/slugify.ts";

const CATEGORY_ID = "AiaelmlCSOq7OCAgLOopUw";

const client = buildClient({ apiToken: process.env.DATO_API_TOKEN ?? "" });

export async function fetchCategories() {
  const categories = new Map<string, string>();
  for await (const record of await client.items.listPagedIterator({
    filter: {
      type: CATEGORY_ID,
    },
  })) {
    // Trust me, this exists and it's a string.
    categories.set(record.slug as string, record.id);
  }
  return categories;
}

async function insertCategory(
  category: string,
  searchFacet: string,
  existingCategories: Map<string, string>
) {
  const slug = slugify(category);

  if (!existingCategories.has(slug)) {
    console.log(`Creating category: ${category}`);

    await client.items.create({
      item_type: {
        type: "item_type",
        id: CATEGORY_ID,
      },
      name: category,
      slug: category.toLowerCase().replace(/ /g, "-"),
      facet: searchFacet,
    });
  } else {
    console.log(`Skipped category: ${category}`);
  }
}

const pipelines = globSync("*/pipeline.yaml");

const templates = await Promise.all(
  pipelines.map((path) => parseTemplate(join(dirname(path), "README.md")))
);

const parsedCategories = templates.reduce((acc, template) => {
  template.languages.forEach((category) => acc.add([category, "language"]));
  template.use_cases.forEach((category) => acc.add([category, "useCase"]));
  template.platforms.forEach((category) => acc.add([category, "platform"]));
  template.tools.forEach((category) => acc.add([category, "tool"]));
  return acc;
}, new Set<[string, string]>());

console.log("Bulk fetching categories...");
const datoCategories = await fetchCategories();

console.log("Inserting categories...");
for (const [category, searchFacet] of parsedCategories) {
  await insertCategory(category, searchFacet, datoCategories);
}
