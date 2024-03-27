---
title: CI/CD for AWS using Pulumi
description: Preview and deploy AWS infrastructure changes using Pulumi
author: "Buildkite"
use_cases: ["IaC", "CI", "CD"]
languages: ["JavaScript"]
platforms: ["Docker", "AWS"]
tools: ["Pulumi"]
primary_emojis: [":pulumi:", ":aws-logo:"]
---

# CI/CD for AWS infrastructure using Pulumi

This template gives you a continuous integration and continuous deployment (CI/CD) pipeline that previews a Pulumi change before deploying it to AWS.

At a glance:

- For [Pulumi projects](https://www.pulumi.com/)
- Uses [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- Requires [Docker](https://www.docker.com/)
- Prompts for confirmation before deploying
- Deploys to [AWS](https://aws.amazon.com/)

## How it works

This template:

1. Assumes a role in AWS using Buildkite’s OIDC.
2. Installs Node dependencies using npm.
3. Prints a preview of the Pulumi change in an annotation on the build.
4. Asks for manual confirmation to deploy the change.
5. Deploys the Pulumi change to AWS with `pulumi up`.

The runtime environment uses a Docker image with the Pulumi CLI and Node.js.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Pulumi code.
2. Set Buildkite as an OIDC provider in AWS.
3. Set the `AWS_ROLE_ARN` environment variable to a role with permission to deploy Pulumi changes to your AWS account.
4. Set the `PULUMI_STACK` environment variable to the [Pulumi Stack](https://buildkite.com/support) being deployed.
5. Store `PULUMI_ACCESS_TOKEN` in your pipeline secrets.
6. Configure the compute—run locally, on-premises, or in the cloud.
7. Run the pipeline.
