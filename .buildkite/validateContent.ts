import chalk from "npm:chalk";
import { globSync } from "npm:glob";
import { parseTemplate } from "./parseTemplate.ts";
import { dirname } from "https://deno.land/std@0.205.0/path/dirname.ts";
import { join } from "https://deno.land/std@0.205.0/path/join.ts";

const pipelines = globSync("*/pipeline.yaml");

// Iterate over files and validate
async function validateTemplates() {
  const errors: Error[] = [];

  await Promise.all(
    pipelines.map(async (path) => {
      const folder = dirname(path);

      try {
        await parseTemplate(join(folder, "README.md"));
      } catch (error) {
        errors.push(error);
      }
    })
  );

  return errors;
}

const errors = await validateTemplates();

if (errors.length > 0) {
  console.error(`${chalk.bgRed("Errors found:")}`);
  errors.forEach((error) => {
    console.error(`${chalk.red(error.message)}`);
  });
  Deno.exit(1);
} else {
  console.log(`Found ${pipelines.length} valid READMEs.`);
}
