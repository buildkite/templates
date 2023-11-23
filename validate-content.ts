import chalk from "npm:chalk";
import { globSync } from "npm:glob";
import { parseTemplate } from "./lib/parseTemplate.ts";

// Iterate over files and validate
async function validateTemplates() {
  const templates = globSync("pipelines/*/README.md");
  const errors: Error[] = [];

  await Promise.all(
    templates.map(async (path) => {
      try {
        await parseTemplate(path);
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
}
