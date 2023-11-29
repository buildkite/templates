---
title: CI/CD for Gatsby with Jest and ESLint
description: This pipeline provides a continuous integration and deployment workflow for Gatsby applications using Jest for testing and ESLint for linting.
tags: ["CI", "Gatsby", "Jest", "ESLint"]
author: Buildkite
---

# CI/CD for Gatsby with Jest and ESLint

This template gives you a continuous integration and continuous deployment (CI/CD) pipeline that installs dependencies for a Gatsby application, builds the application, runs tests using Jest, and lints the code using ESLint.

At a glance:
- For Gatsby applications
- Uses Jest for testing and ESLint for linting
- Requires a package.json file
- Runs tests and lints code

## How it works

This template:
1. Installs dependencies for the Gatsby application using `npm install`.
2. Builds the Gatsby application using `gatsby build`.
3. Runs tests on the application using `npm run test`.
4. Lints the code using `eslint .`.

## Next steps

After you select Use template, you’ll:
1. Connect the Git repository with your Gatsby application.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.