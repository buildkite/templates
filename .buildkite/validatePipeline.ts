import { parse, stringify } from "yaml";
import { Validator } from "jsonschema";
import { globSync } from "glob";
import chalk from "chalk";
import fs from "fs";
import isValidEmoji from "./lib/isValidEmoji.ts";

// Fetch the current pipeline configuration schema
const response = await fetch(
  "https://raw.githubusercontent.com/buildkite/pipeline-schema/main/schema.json"
);
const schema = await response.json();

const v = new Validator();
const errors: { pipeline: string; message: string }[] = [];

const pipelines = globSync("*/pipeline.yaml");
pipelines.forEach((pipeline) => {
  const raw = fs.readFileSync(pipeline, "utf8");
  const parsed = parse(raw);
  const res = v.validate(parsed, schema);

  if (!res.valid) {
    const firstError = res.errors[0];
    const instance = stringify(firstError.instance, null, 2);
    const message = `${firstError.property} ${firstError.message}\n\n${instance}`;

    errors.push({ pipeline, message });
  }

  const keys: string[] = [];
  const keyRefs: string[] = [];

  // Check for duplicate and invalid keys, and unknown emojis
  parsed.steps.forEach(
    (
      step:
        | string
        | { label?: string; key?: string; depends_on?: string[] | string }
    ) => {
      if (typeof step === "string") return;

      if (step.key) {
        if (keys.includes(step.key)) {
          errors.push({
            pipeline,
            message: `Duplicate step key: ${step.key}`,
          });
        }
        keys.push(step.key);
      }

      if (step.depends_on) {
        if (typeof step.depends_on === "string") {
          keyRefs.push(step.depends_on);
        } else if (Array.isArray(step.depends_on)) {
          keyRefs.push(...step.depends_on);
        }
      }

      if (step.label) {
        step.label.match(/(:[\w-]+:)/g)?.forEach((match) => {
          if (!isValidEmoji(match.replace(/:/g, ""))) {
            errors.push({
              pipeline,
              message: `Unknown emoji: ${match}`,
            });
          }
        });
      }
    }
  );

  // Check for usage of invalid keys
  keyRefs.forEach((ref) => {
    if (!keys.includes(ref)) {
      errors.push({
        pipeline,
        message: `Invalid depends_on reference: ${ref}`,
      });
    }
  });
});

if (errors.length > 0) {
  console.error("Errors found:");
  errors.forEach((error) => {
    console.error(
      `${chalk.bgRed(error.pipeline)}: ${chalk.red(error.message)}`
    );
  });
  Deno.exit(1);
} else {
  console.log(`Found ${pipelines.length} valid pipelines.`);
}
