---
title: CI for monorepo
description: Conditionally trigger pipelines within a monorepo based on changes to file paths.
author: Buildkite
languages: []
use_cases: ["Monorepo", "CI"]
platforms: []
tools: []
primary_emojis: [":buildkite:"]
---

# CI for monorepo

This template gives you a continuous integration (CI) pipeline for a monorepo that conditionally triggers pipelines based on changes to file paths.

At a glance:

- For [monorepos](https://en.wikipedia.org/wiki/Monorepo)

## How it works

This template:

1. Monitors file paths for changes.
2. Based on file changes, conditionally [triggers](https://buildkite.com/docs/pipelines/trigger-step) a build on an existing pipeline.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository for your monorepo.
2. Setup a pipeline each of your monorepo sub-projects.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

For more information on setting up a CI/CD pipeline for a monorepo, see [Optimizing CI/CD for monorepos with Buildkite’s official plugin](https://buildkite.com/blog/solving-ci-cd-in-monorepos-with-buildkite-s-official-plugin).
