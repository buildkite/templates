---
title: Software composition analysis using Lacework
description: Perform a Software Composition Analysis in your pipeline using Lacework.
author: Buildkite
use_cases: ["Security", "CI", "Schedule"]
tools: ["Lacework"]
primary_emojis: [:lacework:]
---

# Scan using Lacework

This template gives you a continuous integration (CI) pipeline that uses Lacework to perform a Software Composition Analysis using the Lacework CLI.

At a glance:

- Uses a Buildkite [plugin]() to run [Lacework](https://www.lacework.com/) and requires an account and API key for security scanning

## How it works

This template:

1. Sets up the environment with Lacework
2. Runs Lacework over your project to perform a software composition analysis using the Lacework CLI

## Next steps

After you select **Use template**, you’ll:

1. Connect your git repository.
2. Modify the template commands, environment variables, secrets as needed for your project. This plugin requires that `LW_API_KEY` and `LW_API_SECRET` are set in your agent environment.
3. [Create](https://docs.lacework.net/console/api-access-keys) and store your Lacework API token securely on your agents.
4. Configure the compute—run locally, on-premises, or in the cloud.
5. Run the pipeline.
6. Check out the [Buildkite Lacework Plugin](https://github.com/buildkite-plugins/lacework-buildkite-plugin) to see the other capabilities offered!