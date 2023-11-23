import { parse } from "npm:yaml";
import { Validator } from "npm:jsonschema";
import { globSync } from "npm:glob";
import chalk from "npm:chalk";
import fs from "node:fs";
import process from "node:process";

// Fetch the current pipeline configuration schema
const response = await fetch(
  "https://raw.githubusercontent.com/buildkite/pipeline-schema/main/schema.json"
);
const schema = await response.json();

const v = new Validator();
const errors: { pipeline: string; message: string }[] = [];

const pipelines = globSync("pipelines/*/pipeline.yaml");
pipelines.forEach((pipeline) => {
  const raw = fs.readFileSync(pipeline, "utf8");
  const parsed = parse(raw);
  const res = v.validate(parsed, schema);

  if (!res.valid) {
    const firstError = res.errors[0];
    const message = `${firstError.property} ${firstError.message}`;

    errors.push({ pipeline, message });
  }
});

if (errors.length > 0) {
  console.error("Errors found:");
  errors.forEach((error) => {
    console.error(
      `${chalk.bgRed(error.pipeline)}: ${chalk.red(error.message)}`
    );
  });
}

process.exit(errors.length > 0 ? 1 : 0);
