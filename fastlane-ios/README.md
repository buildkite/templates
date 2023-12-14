---
title: Fastlane for iOS
description: Set up CI of iOS projects with Fastlane
tags: ["Fastlane", "CI", "iOS"]
author: Buildkite
---

# CI for Swift with Fastlane

This template gives you a continuous integration (CI) pipeline that runs an iOS project using [fastlane](https://fastlane.tools/).

At a glance:

- For [iOS] projects
- Automate CI with [fastlane](https://fastlane.tools/)
  - Testing
  - Linting
- Prerequisites:
  - 

## How it works

This template:

- Installs Node dependencies using npm, caching the result.
- Performs static analysis on the codebase with ESLint.
- Runs Jest unit tests.
- Starts the web app using `npm start` on port `8000`, then runs any Cypress tests using their official [Docker image](https://github.com/cypress-io/cypress-docker-images). It uses [`wait-on`](https://www.npmjs.com/package/wait-on) to verify the app is ready for testing.

All steps run in serial, with each depending on the previous step to complete before starting. The runtime environment uses a Docker image with the latest version of Node.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository for your Node app.
2. Check the commands match your scripts in `package.json`.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.

If you need help, please [check our documentation](https://buildkite.com/docs/pipelines/configuration-overview), [raise an issue](https://github.com/buildkite/templates/issues), or [reach out to support](https://buildkite.com/support).
