---
title: .NET
description: Set up a CI pipeline for a .NET web app with restore, test and build commands
tags: ["CI", ".NET"]
author: Buildkite
---

# CI for .NET with Buildkite

This template gives you a continuous integration (CI) pipeline for .NET web apps that automates installing dependencies, build and run unit test.

At a glance:

- For [.NET](https://dotnet.microsoft.com/) web apps
- Uses the [.NET SDK CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/) for continuous integration:
  - [`dotnet restore`](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-restore): restores the project's dependencies.
  - [`dotnet build`](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build): build the project using the Release configuration and disable implicit restore
  - `dotnet test`: .NET test driver to run unit tests using the Release configuration and normal verbosity

## How it works

This template:

1. Installs the dependencies
2. Builds the application
3. Runs unit tests

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository for your .NET web app.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.

If you need help, please [check our documentation](https://buildkite.com/docs/pipelines/configuration-overview), [raise an issue](https://github.com/buildkite/templates/issues), or [reach out to support](https://buildkite.com/support).
