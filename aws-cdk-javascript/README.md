---
title: CI/CD for AWS using AWS CDK
description: Sythesize and deploy CloudFormation using AWS CDK.
author: "Buildkite"
use_cases: ["IaC", "CI", "CD"]
languages: ["JavaScript"]
platforms: ["AWS"]
tools: ["CDK"]
primary_emojis: [":aws-logo:"]
---

# CI/CD for AWS infrastructure using AWS CDK

This template gives you a continuous integration (CI) pipeline for testing, deploying, modifying, and destroying AWS infrastructure using AWS CDK.

At a glance:

- For [AWS CDK](https://docs.aws.amazon.com/cdk/) projects
- Uses [Docker](https://github.com/buildkite-plugins/docker-buildkite-plugin) with a Node.js image.
- Uses [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- Uses the [AWS Assume Role](https://github.com/buildkite-plugins/aws-assume-role-with-web-identity-buildkite-plugin) plugin to access AWS credentials
- Deploys to [AWS](https://aws.amazon.com/)

## How it works

This template:

1. Runs tests over your CDK project
2. Assumes an AWS role using the AWS Assume Role with Web Identity plugin.
3. Synthesizes an AWS CloudFormation template, which is available as an [artifact](https://buildkite.com/docs/pipelines/artifacts).
4. Blocks for input before conditionally deploying/updating/deleting your stack resources to AWS.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your AWS CDK project.
2. Replace the placeholder AWS role ARN in the pipeline definition.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
