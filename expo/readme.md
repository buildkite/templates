---
title: Expo CI Pipeline
description: Set up CI for Expo projects to build cross-platform apps
author: Buildkite
use_cases: ["CI", "Mobile"]
languages: ["JavaScript", "Typescript"]
platforms: ["Expo"]
tools: ["Expo"]
primary_emojis: [":expo:"]
---

# CI for Expo with Buildkite

This template provides a continuous integration (CI) pipeline for Expo projects to build cross-platform apps using Expo CLI.

At a glance:

- For Expo projects
- Builds cross-platform apps using Expo CLI

## How it works

This template:

1. Sets up dependencies using `npm ci`.
2. Builds the Expo app:
  - Sets up the required Docker image with Node.js.
  - Uploads the `npm` directory as an artifact.
  - Runs the `npm ci` command.
  - Downloads the `npm` directory as an artifact.
  - Installs Bash and runs the Expo CLI build command.

After the dependencies are set up, the app build step runs.

## Next steps

After you select **Use template**, you'll need to:

1. Connect the Git repository for your Expo project.
2. Verify that the commands in the pipeline match the steps in your `buildkite.yml` file.
3. Configure the compute environment—run locally, on-premises, or in the cloud.
4. Install the required dependencies, including Expo CLI, on your compute agents.
5. Customize the pipeline as needed.
6. Run the pipeline.

For more information on Expo and building cross-platform apps, refer to the [Expo documentation](https://docs.expo.dev/).


steps:
  - name: ":expo: Setup dependencies"
    key: "deps"
    command:
      - "npm ci"
    plugins:
      - docker#v5.9.0:
          image: "node:alpine"
      - artifacts#v1.9.3:
          upload: "./npm"
          compressed: npm.tgz

  - name: ":expo: Build app"
    key: "build"
    branches: "main"
    command:
      - "apk add --no-cache bash"
      - "npx eas-cli build --platform all --non-interactive --no-wait"
    plugins:
      - docker#v5.9.0:
          image: "node:alpine"
      - artifacts#v1.9.3:
          download: "./npm"
          compressed: npm.tgz
