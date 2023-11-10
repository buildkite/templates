---
name: Node.js with Cypress end-to-end testing
categories: ["CI"]
tags: ["Cypress", "e2e", "Node.js"]
---

# Node.js with Cypress end-to-end testing

This template runs Cypress e2e tests against a Node.js web application running on port `8000` via the command `npm start`.

To ensure the web application is ready to start recieving requests the template uses [`wait-on`](https://www.npmjs.com/package/wait-on) before executing the Cypress tests `cypress run.

- Based on https://docs.cypress.io/guides/continuous-integration/introduction
- Uses the official [Cypress Docker image](https://github.com/cypress-io/cypress-docker-images)
