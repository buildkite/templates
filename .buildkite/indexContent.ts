/**
 * Populate Algolia search index with data from DatoCMS.
 */

import algoliasearch from "npm:algoliasearch";
import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME, DATO_API_TOKEN } =
  await load();

if (!ALGOLIA_APP_ID || !ALGOLIA_API_KEY || !ALGOLIA_INDEX_NAME) {
  throw new Error(
    "Missing Algolia environment variables. Please check your .env file."
  );
}

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

const res = await fetch("https://graphql.datocms.com/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${DATO_API_TOKEN}`,
  },
  body: JSON.stringify({
    query: `{
      allTemplates {
        title
        description
        slug
        bannerColor {
          hex
        }
        image: featureImage {
          alt
          url
        }
        categories {
          name
          slug
          parentCategory {
            name
            slug
          }
        }
      }
    }`,
  }),
});
const { data } = await res.json();

data.allTemplates.forEach(async (template: any) => {
  // Pass through the child categories as facets for the parent category.
  // This allows us to filter by parent category and child category.
  const { categories, ...rest } = template;
  const facets = categories.reduce((acc: any, category: any) => {
    if (!acc[category.parentCategory?.slug]) {
      acc[category.parentCategory?.slug] = [];
    }
    acc[category.parentCategory?.slug].push(category.name);
    return acc;
  }, {});

  // Index templates
  await index.saveObject({
    ...rest,
    ...facets,
    objectID: template.slug,
  });
});
