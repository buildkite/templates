---
title: Snyk + NodeJS
description: Run security scanning on your NodeJS project using a Snyk plugin
tags: ["CI", "Node.js", "Snyk"]
author: Buildkite
---

# CI/CD for Snyk with Security Scanning

This template gives you a continuous integration (CI) pipeline that includes Snyk for security scanning.

At a glance:

- Uses Snyk on a Node.js project
- Uses the [snyk-buildkite-plugin](https://github.com/seek-oss/snyk-buildkite-plugin) plugin
- Requires a [Snyk](https://snyk.io/) account for security scanning

## How it works

This template:

1. Sets up the environment with Node.js and Snyk.
2. Runs Snyk to scan your project for security vulnerabilities.
3. If the scan is successful, the pipeline continues to the deployment stage.

You'll need to retrive `SNYK_TOKEN` from a [secrets manager](https://buildkite.com/docs/pipelines/secrets) and store as an environment variable.

## Next steps

After you select Use template, you’ll:

1. Connect your git repository.
2. Modify the template commands, environment variables, secrets as needed for your project.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
