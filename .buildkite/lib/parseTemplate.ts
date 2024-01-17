import { dirname } from "https://deno.land/std@0.205.0/path/mod.ts";
import { basename } from "https://deno.land/std@0.205.0/path/basename.ts";
import { matter } from "npm:vfile-matter";
import { read } from "npm:to-vfile";
import fs from "node:fs";
import { join } from "https://deno.land/std@0.205.0/path/join.ts";

interface Frontmatter {
  title: string;
  description: string;
  author: string;
  languages: string[];
  use_cases: string[];
  platforms: string[];
  tools: string[];
}

export type Template = Frontmatter & {
  slug: string;
  content: any;
  pipeline: string;
};

export async function parseTemplate(path: string): Promise<Template> {
  const slug = basename(dirname(path));
  const pipeline = fs.readFileSync(
    join(dirname(path), "pipeline.yaml"),
    "utf8"
  );

  // Read template frontmatter (YAML)
  const file = await read(path);
  matter(file, { strip: true });

  // Validate template frontmatter
  const { errors, ...meta } = validateFrontmatter(file.data.matter);
  if (errors.length > 0) {
    throw new Error(`Template ${path} has errors: ${errors.join(", ")}`);
  }

  return {
    ...meta,
    slug,
    content: String(file),
    pipeline,
  };
}

// deno-lint-ignore no-explicit-any
const validateFrontmatter = (meta: any): Frontmatter & { errors: string[] } => {
  const errors = [];

  if (!meta.title) {
    errors.push("missing title");
  }

  if (!meta.description) {
    errors.push("missing description");
  }

  if (!meta.author) {
    errors.push("missing author");
  }

  if (!meta.tools) {
    errors.push("missing tools");
  }

  if (!meta.platforms) {
    errors.push("missing platforms");
  }

  if (!meta.use_cases) {
    errors.push("missing use_cases");
  }

  if (!meta.languages) {
    errors.push("missing languages");
  }

  return { ...meta, errors };
};