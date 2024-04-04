import puppeteer from "puppeteer";
import { dirname } from "path";
import { globSync } from "glob";
import { mkdirSync } from "fs";

try {
  mkdirSync("screenshots");
} catch (e) {}

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({ headless: "new" });
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
  await page.screenshot({
    path: `screenshots/${templateID}.png`,
    omitBackground: true,
  });
}

await browser.close();
