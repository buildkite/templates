---
title: Fastlane for iOS
description: Set up CI of iOS projects with Fastlane
tags: ["Fastlane", "CI", "iOS"]
author: Buildkite
categories: ["CI"]
---

# CI for iOS with Fastlane

This template gives you a continuous integration (CI) pipeline that runs an iOS project using [fastlane](https://fastlane.tools/).

At a glance:

- For [iOS] projects
- Automate CI with [fastlane](https://fastlane.tools/)
  - Unit testing
  - Linting
  - Building

## Before you start

To run this pipeline, you’ll need to install and set up the following on your CI server or local machine:

- [fastlane](https://docs.fastlane.tools/getting-started/ios/setup/)
- [Fastfile](./example-project/fastlane/Fastfile) with the following actions:
  - `test` - runs unit tests with the [`run_tests`](http://docs.fastlane.tools/actions/run_tests) action
  - `lint` - runs swift code validation using [Swiftlint](http://docs.fastlane.tools/actions/swiftlint)
  - `build` - builds the app via [gym](http://docs.fastlane.tools/actions/gym)

## How it works

This template:

- Installs dependencies using [bundler](https://bundler.io/).
- Runs fastlane lanes:
  - Run unit testing with [scan](http://docs.fastlane.tools/actions/run_tests/#whats-scan).
  - Performs static analysis on the codebase with Swiftlint.
  - Builds the app with gym.

The lint, test and build steps run parallel and all depends on the 'install dependencies' step to complete before starting.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository for your iOS project.
2. Check the commands match the lanes in your `Fastfile` (see our [example](./example-project/fastlane/Fastfile)).
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.

If you need help, please [check our documentation](https://buildkite.com/docs/pipelines/configuration-overview), [raise an issue](https://github.com/buildkite/templates/issues), or [reach out to support](https://buildkite.com/support).
