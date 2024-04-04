---
title: CI for Swift
description: Build, lint, and test a Swift project using SwiftLint and XCTest.
author: Buildkite
languages: ["Swift"]
use_cases: ["CI", "Mobile", "Web"]
platforms: ["Docker", "macOS", "iOS"]
tools: ["SwiftLint"]
primary_emojis: [":swift:"]
---

# CI for Swift

This template gives you a continuous integration (CI) pipeline that builds, lints, and tests a Swift project.

At a glance:

- For [Swift](https://www.swift.org/) projects
- Requires [Docker](https://docs.docker.com/get-docker/)
- Uses the [Swift Package Manager](https://swift.org/package-manager/)
- Lints code with [SwiftLint](https://github.com/realm/SwiftLint)
- Tests code using [XCTest](https://developer.apple.com/documentation/xctest)

## How it works

This template:

1. Builds your Swift project, caching dependencies for subsequent steps.
2. Lints the code with SwiftLint.
3. Runs tests with XCTest.

The runtime environment uses the official [Swift Docker image](https://hub.docker.com/_/swift) with the latest version.

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your Swift project.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
