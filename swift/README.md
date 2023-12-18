---
title: Swift
description: Set up a CI pipeline for a Swift application with SwiftLint, test and build.
tags: ["CI", "Swift", "SwiftLint"]
author: Buildkite
---

# CI for Swift with Linting, Testing, and Building

This template gives you a continuous integration (CI) pipeline that lints, tests, and builds a Swift application.

At a glance:

- For [Swift](https://www.swift.org/) projects
- Requires [Docker](https://docs.docker.com/get-docker/)
- Uses the [Swift Package Manager](https://swift.org/package-manager/) to:
  - [Run unit tests](https://www.swift.org/server/guides/testing.html) with [XCTest](https://developer.apple.com/documentation/xctest)
  - [Build the application](https://www.swift.org/server/guides/building.html)
- Lints code with [SwiftLint](https://github.com/realm/SwiftLint)

Before you start, you’ll need to [install SwiftLint](https://realm.github.io/SwiftLint/#installation) on your CI server or local machine:

## How it works

This template:

1. Lints the code with SwiftLint.
2. Runs tests with XCTest.
3. Builds the application.

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your Swift application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
