import chalk from "chalk";
import { globSync } from "glob";
import { parseTemplate } from "./lib/parseTemplate.ts";
import { dirname, join } from "path";

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
  process.exit(1);
} else {
  console.log(`Found ${pipelines.length} valid READMEs.`);
}
