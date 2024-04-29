---
title: Bazel for Android
description: Starter CI pipeline for an Android Bazel project.
author: Buildkite
use_cases: ["CI", "Mobile"]
languages: ["Java"]
platforms: ["Android"]
tools: ["Bazel"]
primary_emojis: [":bazel:"]
---

# Building with Bazel

This template gives you a continuous integration (CI) pipeline that runs on an Android Bazel project.

At a glance:

- For [Bazel](https://bazel.build/) [Android](https://developer.android.com/) projects
- Builds and runs tests
- Uses [Docker](https://github.com/buildkite-plugins/docker-buildkite-plugin) with an Android image
- Saves test outputs as [artifacts](https://buildkite.com/docs/pipelines/artifacts)
- Creates an [annotation](https://buildkite.com/docs/agent/v3/cli-annotate) with a link to internal documentation

## How it works

This template:

1. 
2. Builds the project with Bazel.
3. Runs tests with Bazel.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Bazel project.
2. Set the build and test parameters for your Bazel project.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

For more information about advanced Bazel usage, see [How Bazel built its CI system on top of Buildkite](https://buildkite.com/blog/how-bazel-built-its-ci-system-on-top-of-buildkite).
