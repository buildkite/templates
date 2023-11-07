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

await load({ export: true });
const client = buildClient({ apiToken: Deno.env.get("DATO_API_TOKEN") ?? "" });

async function parseTemplate(path: string) {
  const slug = basename(dirname(path));

  // Read template frontmatter (YAML)
  const file = await read(path);
  matter(file, { strip: true });

  // Validate template frontmatter
  const { name } = file.data.matter;
  if (!name) throw new Error(`Template ${path} is missing a name`);

  // Markdown -> MDAST -> HAST -> DAST (DatoCMS Structured Text)
  const mdast = fromMarkdown(String(file));
  const hast = toHast(mdast);
  const dast = await hastToStructuredText(hast);

  return {
    slug,
    name,
    content: dast,
  };
}

// Update of insert a template based on whether it already
// exists in DatoCMS.
//
// Not the most performant since it's doing a list and then
// an update or create. Could be improved if we kept a local
// cache of slugs to IDs.
async function upsertTemplate(template: any) {
  const records = await client.items.list({
    filter: {
      type: Deno.env.get("DATO_TEMPLATE_ITEM_TYPE_ID"),
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
        id: Deno.env.get("DATO_TEMPLATE_ITEM_TYPE_ID"),
      },
      ...template,
    });
  }
}

// Iterate over files and push to DatoCMS
const templates = globSync("pipelines/*/template.md");
templates.forEach(async (path) => {
  const template = await parseTemplate(path);
  await upsertTemplate(template);
});
