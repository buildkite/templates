---
title: Fastlane for iOS
description: Set up CI of iOS projects with Fastlane
tags: ["Fastlane", "CI", "iOS"]
author: Buildkite
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

- [Fastlane](https://docs.fastlane.tools/getting-started/ios/setup/)
- [Fastfile](./Fastfile) with the following lanes:
  - `test` - runs unit tests
  - `lint` - runs Swiftlint
  - `build` - builds the app
- [Swiftlint](https://github.com/realm/SwiftLint)

## How it works

This template:

- Installs dependencies using [bundler](https://bundler.io/), caching the result.
- Runs Fastlane lanes:
  - Unit testing with the [scan](http://docs.fastlane.tools/actions/scan/) action.
  - Performs static analysis on the codebase with Swiftlint.
  - Builds the app with the [gym](http://docs.fastlane.tools/actions/gym/) action

The lint, test and build steps run parallel and all depends on the 'install dependencies' step to complete before starting.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository for your iOS app.
2. Check the commands match your lanes in `Fastfile`.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.

If you need help, please [check our documentation](https://buildkite.com/docs/pipelines/configuration-overview), [raise an issue](https://github.com/buildkite/templates/issues), or [reach out to support](https://buildkite.com/support).
