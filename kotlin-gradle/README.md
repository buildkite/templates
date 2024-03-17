---
title: CI for Kotlin with Gradle
description: Build and test a Kotlin application with Gradle.
author: Buildkite
languages: ["Kotlin"]
use_cases: ["CI", "Web", "Mobile"]
platforms: ["Docker", "Android", "iOS"]
tools: ["Gradle"]
primary_emojis: [":kotlin:", ":gradle:"]
---

# CI for Kotlin with Gradle

This template gives you a continuous integration (CI) pipeline that builds and tests a Kotlin application with Gradle.

At a glance:

- For [Kotlin](https://kotlinlang.org/) applications
- Uses [Gradle](https://gradle.org/) for building and testing
- Requires [Docker](https://docs.docker.com/get-docker/)

## How it works

This template:

1. Runs tests with Gradle.
2. Builds the application with Gradle.

The runtime environment uses a Docker image with the Gradle CLI and Java 8.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Kotlin application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
