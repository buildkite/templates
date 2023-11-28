---
title: React Component Library CI/CD
description: Set up a CI/CD pipeline for a React Component Library with linting, testing, and building using TypeScript, Jest, and npm.
tags: ["CI", "CD", "React", "TypeScript", "Jest", "NPM"]
author: Buildkite
---

# CI/CD for React Component Library

This template gives you a continuous integration and continuous deployment (CI/CD) pipeline that builds, tests, deploys and releases a react component library framework.

At a glance:

- For React Component Library
- Builds and tests in parallel
- Deploys to npm

## How it works

This template:

1. Compiles the code using TypeScript.
2. Runs unit tests using Jest.
3. Performs dependency analysis using FOSSA.
4. Deploys the package to npm if the build is on the main branch and the commit message indicates a release.
5. Creates a GitHub release if the build is on the main branch and the commit message indicates a release.
6. Runs end-to-end tests.

The script for publishing to npm utilizes the `npm publish` command. The script for publishing to Github requires the use of the `Octokit` package.

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your React Component Library.
2. Modify the commands, environment variables, secrets as per your project requirements.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
