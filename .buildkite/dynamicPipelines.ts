import { globSync } from "npm:glob";

const pipelines = globSync("*/pipeline.yaml");

pipelines.map((pipeline) => {
  const command = new Deno.Command("buildkite-agent", {
    args: ["pipeline", "upload", pipeline],
  });

  command.spawn();
});
