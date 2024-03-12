import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { buildClient } from "npm:@datocms/cma-client-node";
import { globSync } from "npm:glob";
import { parseTemplate } from "./lib/parseTemplate.ts";
import { dirname } from "https://deno.land/std@0.205.0/path/dirname.ts";
import { join } from "https://deno.land/std@0.205.0/path/join.ts";

const CATEGORY_ID = "AiaelmlCSOq7OCAgLOopUw";

await load({ export: true });
const client = buildClient({ apiToken: Deno.env.get("DATO_API_TOKEN") ?? "" });

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
  const slug = category.toLowerCase().replace(/ /g, "-");

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
