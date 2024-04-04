---
title: CI for Node.js
description: Build, lint, and test a Node.js web application using npm, ESLint, Jest, and Cypress.
author: Buildkite
languages: ["JavaScript"]
use_cases: ["CI", "Web"]
platforms: ["Docker"]
tools: ["npm", "ESlint", "Jest", "Cypress"]
primary_emojis: [":nodejs:"]
---

# CI for Node.js

This template gives you a continuous integration (CI) pipeline that builds, lints, and end-to-end tests a Node.js application.

At a glance:

- For [Node.js](https://nodejs.org) apps
- Uses [npm](https://www.npmjs.com/)
- Requires [Docker](https://docs.docker.com/get-docker/)
- Lints code with [ESLint](https://eslint.org/)
- Runs [Jest](https://jestjs.io/) unit tests
- Runs [Cypress](https://www.cypress.io/) integration tests

## How it works

This template:

1. Installs Node.js dependencies using npm, caching the result.
2. Performs static analysis on the codebase with ESLint.
3. Runs Jest unit tests.
4. Starts the web app using `npm start` on port `8000`, then runs any Cypress tests using their official [Docker image](https://github.com/cypress-io/cypress-docker-images). It uses [`wait-on`](https://www.npmjs.com/package/wait-on) to verify the app is ready for testing.

All steps run in serial, with each depending on the previous step to complete before starting. The runtime environment uses a Docker image with the latest version of Node.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository for your Node.js app.
2. Check the commands match your scripts in `package.json`.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
