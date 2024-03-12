---
title: CI for Java with Gradle
description: Build and test a Java application with Gradle.
author: Buildkite
languages: ["Java"]
use_cases: ["CI", "Web"]
platforms: ["Docker"]
tools: ["Gradle", "JUnit"]
primary_emojis: [":java:", ":gradle:"]
---

# CI for Java with Gradle

This template gives you a continuous integration (CI) pipeline that builds and tests a Java application with Gradle.

At a glance:

- For [Java](https://dev.java/) applications
- Uses [Gradle](https://docs.gradle.org) for building and testing
- Requires [Docker](https://docs.docker.com/get-docker/)

## How it works

This template:

1. Runs tests with Gradle.
2. Builds the application with Gradle.

The runtime environment uses a Docker image with the Gradle CLI and Java 8.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Java application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.

If you need help, please [check our documentation](https://buildkite.com/docs/pipelines/configuration-overview), [raise an issue](https://github.com/buildkite/templates/issues/new?template=pipeline-template-request.md), or [reach out to support](https://buildkite.com/support).
