import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import { dirname } from "https://deno.land/std@0.205.0/path/dirname.ts";
import { globSync } from "npm:glob";

try {
  Deno.mkdirSync("screenshots");
} catch (e) {}

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

console.log("Fetching screenshots...");
for (const pipeline of globSync("*/pipeline.yaml")) {
  const templateID = dirname(pipeline);

  console.log(templateID);
  await page.goto(
    `https://buildkite.com/pipelines/playground/embed?tid=${templateID}`
  );
  await page.waitForSelector(".react-flow__node");

  // Remove the zoom controls from the bottom right corner
  //
  // FIXME: add better selector to target.
  await page.waitForSelector(".absolute.bottom-4.right-4.flex.gap-2.z-10");
  await page.$eval(".absolute.bottom-4.right-4.flex.gap-2.z-10", (el) =>
    el.remove()
  );

  await page.screenshot({
    path: `screenshots/${templateID}.png`,
    omitBackground: true,
  });
}

await browser.close();
