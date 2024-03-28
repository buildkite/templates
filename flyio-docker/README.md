---
title: CI/CD for Fly.io
description: Build and deploy a Docker image to Fly.io.
author: Buildkite
languages: []
use_cases: ["CD", "CI"]
platforms: ["Fly.io", "Docker"]
tools: ["Docker"]
primary_emojis: [":fly-io:"]
---

# CI/CD for Fly.io

This template gives you a continuous deployment (CD) pipeline that builds and deploys a docker image to Fly.io.

At a glance:

- For [Fly.io](https://fly.io/) applications
- Uses [Docker](https://github.com/buildkite-plugins/docker-buildkite-plugin)
- Uses [flyctl](https://github.com/dannymidnight/setup-flyctl-buildkite-plugin)

## How it works

This template:

1. Builds and pushes a Docker image to the Fly.io registry.
2. Deploys image to Fly.io.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Fly.io application.
2. Configure Buildkite with the following secrets: `FLY_ACCESS_TOKEN`, `FLY_APP_NAME`.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
