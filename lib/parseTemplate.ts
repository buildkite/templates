import { dirname } from "https://deno.land/std@0.205.0/path/mod.ts";
import { basename } from "https://deno.land/std@0.205.0/path/basename.ts";
import { fromMarkdown } from "https://esm.sh/mdast-util-from-markdown@2";
import { toHast } from "https://esm.sh/mdast-util-to-hast@13";
import { hastToStructuredText } from "npm:datocms-html-to-structured-text";
import { matter } from "npm:vfile-matter";
import { read } from "npm:to-vfile";

interface Frontmatter {
  title: string;
  description: string;
  tags: string[];
}

export type Template = Frontmatter & {
  slug: string;
  content: any;
};

export async function parseTemplate(path: string): Promise<Template> {
  const slug = basename(dirname(path));

  // Read template frontmatter (YAML)
  const file = await read(path);
  matter(file, { strip: true });

  // Validate template frontmatter
  const { errors, ...meta } = validateFrontmatter(file.data.matter);

  if (errors.length > 0) {
    throw new Error(`Template ${path} has errors: ${errors.join(", ")}`);
  }

  // Markdown -> MDAST -> HAST -> DAST (DatoCMS Structured Text)
  const mdast = fromMarkdown(String(file));
  const hast = toHast(mdast);
  const dast = await hastToStructuredText(hast);

  return {
    ...meta,
    slug,
    content: dast,
  };
}

const validateFrontmatter = (meta: any): Frontmatter & { errors: string[] } => {
  const errors = [];

  if (!meta.title) {
    errors.push("missing title");
  }

  if (!meta.description) {
    errors.push("missing description");
  }

  if (!meta.tags) {
    errors.push("missing tags");
  }

  return { ...meta, errors };
};
