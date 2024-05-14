---
title: Vulnerability scanning with Lacework
description: Audit your project for security vulnerabilities using Lacework.
author: Buildkite
use_cases: ["Security", "CI", "Schedule"]
tools: ["Lacework"]
primary_emojis: [:lacework:]
---

# Scan using Lacework

This template gives you a continuous integration (CI) pipeline that scans a a sample project for security vulnerabilities using Lacework.

At a glance:

- Uses [Lacework](https://www.lacework.com/) and requires an account and API key for security scanning
- Requires [Docker](https://docs.docker.com/get-docker/)

## How it works

This template:

1. Sets up the environment with Lacework
2. Runs Lacework over yourproject for security vulnerabilities.

## Next steps

After you select **Use template**, you’ll:

1. Connect your git repository.
2. Modify the template commands, environment variables, secrets as needed for your project.
3. [Create](https://docs.lacework.net/console/api-access-keys) and store your Lacework API token securely on your agents.
4. Configure the compute—run locally, on-premises, or in the cloud.
5. Run the pipeline.
