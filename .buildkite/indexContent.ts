/**
 * Publish template content into an Algolia search index
 */

import algoliasearch from "npm:algoliasearch";
import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { join } from "https://deno.land/std@0.205.0/path/join.ts";
import { globSync } from "npm:glob";
import { parseTemplate } from "./lib/parseTemplate.ts";
import { dirname } from "https://deno.land/std@0.205.0/path/dirname.ts";

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME } = await load();

if (!ALGOLIA_APP_ID || !ALGOLIA_API_KEY || !ALGOLIA_INDEX_NAME) {
  throw new Error(
    "Missing Algolia environment variables. Please check your .env file."
  );
}

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

const pipelines = globSync("*/pipeline.yaml");
pipelines.forEach(async (path) => {
  const folder = dirname(path);
  const template = await parseTemplate(join(folder, "README.md"));
  await index.saveObject({
    ...template,
    objectID: template.slug,
  });
});
