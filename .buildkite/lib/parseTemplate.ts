import { dirname, basename, join } from "path";
import { matter } from "vfile-matter";
import { read } from "to-vfile";
import fs from "fs";
import isValidEmoji from "./isValidEmoji.ts";

interface Frontmatter {
  title: string;
  description: string;
  author: string;
  languages: string[];
  use_cases: string[];
  platforms: string[];
  tools: string[];
  primary_emojis: string[];
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

  if (!meta.use_cases || meta.use_cases.length == 0) {
    errors.push("must have at least one `use_cases`");
  }

  if (!meta.languages) {
    errors.push("missing languages");
  }

  if (!meta.primary_emojis || meta.primary_emojis.length == 0) {
    errors.push("must have at least one `primary_emoji`");
  } else {
    for (const emoji of meta.primary_emojis) {
      if (!isValidEmoji(emoji.replace(/:/g, ""))) {
        errors.push(
          `invalid emoji: ${emoji}, see https://github.com/buildkite/emojis for a list of valid emojis`
        );
      }
    }
  }

  return { ...meta, errors };
};
