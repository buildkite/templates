---
title: CI for .NET
description: Set up a CI pipeline for a .NET application using standard library tooling.
author: Buildkite
languages: ["C#"]
platforms: [".NET", "Docker", "Windows"]
use_cases: ["CI", "Web"]
tools: [".NET"]
primary_emojis: [":dotnet:"]
---

# CI for .NET

This template provides a continuous integration (CI) pipeline for .NET applications.

At a glance:

- For [.NET](https://dotnet.microsoft.com/) applications
- Requires [Docker](https://docs.docker.com/get-docker/)
- Uses the [.NET SDK CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/)

## How it works

This template:

1. Restores project dependencies using [`dotnet restore`](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-restore) and caches them for use across subsequent steps.
2. Builds the project using using [`dotnet build`](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build).
3. Runs unit tests using [`dotnet test`](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-test).

The runtime environment uses the official [.NET SDK Docker image](https://hub.docker.com/_/microsoft-dotnet-sdk/) with the latest version.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository for your .NET application.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.

If you need help, please [check our documentation](https://buildkite.com/docs/pipelines/configuration-overview), [raise an issue](https://github.com/buildkite/templates/issues/new?template=pipeline-template-request.md), or [reach out to support](https://buildkite.com/support).
