---
title: Scan Node.js with Snyk
description: Audit your Node.js project for security vulnerabilities using Snyk.
author: Buildkite
use_cases: ["Security", "CI", "Schedule"]
platforms: ["Docker"]
languages: ["JavaScript"]
tools: ["Snyk"]
primary_emojis: [":snyk:", ":nodejs:"]
---

# Scan Node.js for vulnerabilities with Snyk

This template gives you a continuous integration (CI) pipeline that scans a Node.js project for security vulnerabilities using Snyk.

At a glance:

- For [Node.js](https://nodejs.org) projects
- Uses [Snyk](https://snyk.io/) and requires an account for security scanning
- Requires [Docker](https://docs.docker.com/get-docker/)

## How it works

This template:

1. Sets up the environment with Node.js and Snyk.
2. Runs Snyk over your Node.js project for security vulnerabilities.

The runtime environment uses the official [Synk Docker image](httpshttps://github.com/snyk/snyk-images) with the latest Node.js version.

## Next steps

After you select **Use template**, you’ll:

1. Connect your git repository.
2. Modify the template commands, environment variables, secrets as needed for your project.
3. [Retrieve](https://docs.snyk.io/getting-started/how-to-obtain-and-authenticate-with-your-snyk-api-token) and store `SNYK_TOKEN` in your pipeline secrets.
4. Configure the compute—run locally, on-premises, or in the cloud.
5. Run the pipeline.
