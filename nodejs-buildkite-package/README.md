---
title: Publish Node.js package to Buildkite
description: Publish a Node.js package to your Buildkite repository.
author: "Buildkite"
languages: ["JavaScript"]
use_cases: ["Packages", "CI"]
tools: ["npm"]
platforms: []
primary_emojis: [":nodejs:", ":buildkite:"]
---

# Automate publishing a Node.js package to Buildkite

This template gives you a continuous integration (CI) pipeline that automates publishing a Node.js package to a Buildkite package repository.

At a glance:

- For [Node.js](https://nodejs.org) projects
- For [Buildkite Packages](https://buildkite.com/packages)
- Requires [Docker](https://docs.docker.com/get-docker/)

## How it works

This template:

1. Packages a project using npm.
2. Configures npm and publishes the package to your Buildkite package registry.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository for your Node.js project.
2. Configure Buildkite with the following environment: `PACKAGE_NAME`, `AUTH_TOKEN`.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
