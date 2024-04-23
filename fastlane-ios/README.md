---
title: CI for iOS with Fastlane
description: Build, lint, and test a Fastlane iOS application.
author: Buildkite
use_cases: ["CI", "Mobile"]
languages: ["Ruby"]
platforms: ["iOS"]
tools: ["Fastlane"]
primary_emojis: [":fastlane:"]
---

# CI for iOS with Fastlane

This template gives you a continuous integration (CI) pipeline that runs an iOS project using [fastlane](https://fastlane.tools/).

At a glance:

- For iOS projects
- Uses [fastlane](https://fastlane.tools/)

## How it works

This template:

1. Installs dependencies using [bundler](https://bundler.io/).
2. Runs fastlane lanes:
   - Runs unit testing with [scan](http://docs.fastlane.tools/actions/run_tests/#whats-scan).
   - Performs static analysis on the codebase with [Swiftlint](https://github.com/realm/SwiftLint).
   - Builds the app with [gym](https://docs.fastlane.tools/actions/gym/).
3. Adds any test failures as annotations using [junit-annotate-buildkite-plugin](https://github.com/buildkite-plugins/junit-annotate-buildkite-plugin).

The lint, test, and build steps all run in parallel. The `beta` step runs on `beta` and `beta/*` branches, after the build step has completed.

Note, depending on your version of Xcode you may need to install `xcbeautify`, which is the [recommended `xcodebuild` formatter](https://docs.fastlane.tools/best-practices/xcodebuild-formatters/).

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository for your iOS project.
2. Check the commands match the lanes in your `Fastfile` (see the [example](./example-project/fastlane/Fastfile)).
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Install [fastlane](https://docs.fastlane.tools/getting-started/ios/setup/) on your compute agents.
5. Set up your [Fastfile](./example-project/fastlane/Fastfile) with the following actions:
   - `test`: Runs unit tests with the [`run_tests`](http://docs.fastlane.tools/actions/run_tests) action.
   - `lint`: Runs Swift code validation using [Swiftlint](http://docs.fastlane.tools/actions/swiftlint).
   - `build`: Builds the app using [gym](http://docs.fastlane.tools/actions/gym).
   - `beta`: Submits your build to your beta provider.
6. Run the pipeline.
