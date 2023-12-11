---
title: Gatsby + Jest + ESLint
description: Set up a CI pipeline for a Gatsby app with Jest and ESLint.
tags: ["CI", "Gatsby", "Jest", "ESLint"]
author: Buildkite
---

# CI for Gatsby with Jest and ESLint

This template gives you a continuous integration (CI) pipeline that installs dependencies for a Gatsby application with Jest unit test and ESLint.

At a glance:
- For [Gatsby](https://www.gatsbyjs.com/) applications
- Uses [npm](https://www.npmjs.com/)
- Runs [Jest](https://jestjs.io) unit tests
- Lints code with [ESLint](https://eslint.org/)

## How it works

This template:
1. Installs dependencies for the Gatsby application using npm, caching the result.
2. Runs Jest unit tests.
3. Performs static analysis on the codebase with ESLint.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Gatsby application.
2. Configure Jest and add the `test` script in `package.json`.
3. Configure ESLint.
4. Configure the compute — run locally, on-premises, or in the cloud.
5. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition.
