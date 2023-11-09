import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { dirname } from "https://deno.land/std@0.205.0/path/mod.ts";
import { basename } from "https://deno.land/std@0.205.0/path/basename.ts";
import { buildClient } from "npm:@datocms/cma-client-node";
import { globSync } from "npm:glob";
import { fromMarkdown } from "https://esm.sh/mdast-util-from-markdown@2";
import { toHast } from "https://esm.sh/mdast-util-to-hast@13";
import { hastToStructuredText } from "npm:datocms-html-to-structured-text";
import { matter } from "npm:vfile-matter";
import { read } from "npm:to-vfile";

const TEMPLATE_ID = "FkouTmYeQOuVuHxz71czmw";
const TEMPLATE_CATEGORY_ID = "7Or1cKL9T2KJxhMx75fh2Q";

await load({ export: true });
const client = buildClient({ apiToken: Deno.env.get("DATO_API_TOKEN") ?? "" });

interface Template {
  slug: string;
  name: string;
  categories: string[];
  content: any;
}

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

const categoryIds = await fetchCategories();

async function parseTemplate(path: string): Template {
  const slug = basename(dirname(path));

  // Read template frontmatter (YAML)
  const file = await read(path);
  matter(file, { strip: true });

  // Validate template frontmatter
  const { name, categories } = file.data.matter;
  if (!name) throw new Error(`Template ${path} is missing a name`);
  if (!categories) throw new Error(`Template ${path} is missing categories`);

  // Validate categories
  categories.forEach((category: string) => {
    if (!categoryIds.has(category)) {
      throw new Error(`Template ${path} has unknown category "${category}"`);
    }
  });

  // Markdown -> MDAST -> HAST -> DAST (DatoCMS Structured Text)
  const mdast = fromMarkdown(String(file));
  const hast = toHast(mdast);
  const dast = await hastToStructuredText(hast);

  return {
    slug,
    name,
    categories: categories.map((category: string) => categoryIds.get(category)),
    content: dast,
  };
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

  if (records.length > 1) {
    throw new Error(
      `Found ${records.length} templates with name ${template.name}`
    );
  }

  if (records.length) {
    console.log(`Updating: [${records[0].id}] ${template.name}`);
    return client.items.update(records[0].id, template);
  } else {
    console.log(`Inserting: [${template.slug}]: ${template.name}`);
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
