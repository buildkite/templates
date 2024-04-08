---
title: Scan image using AWS ECR
description: Build, push, a scan a Docker image for security   vulnerabilities using AWS ECR.
author: Buildkite
use_cases: ["Security", "CI"]
platforms: ["AWS"]
languages: []
tools: ["Docker"]
primary_emojis: [":aws-logo:", ":ecr:"]
---

# Scan image using AWS ECR

This templates gives you a continuous deployment (CI) pipeline that builds and pushes a Docker image to AWS ECR for image security scanning.

At a glance:

- For [Docker](https://www.docker.com/) projects
- Requires [AWS CLI](https://aws.amazon.com/cli/)
- Uses the [AWS Assume Role](https://github.com/buildkite-plugins/aws-assume-role-with-web-identity-buildkite-plugin) plugin to access AWS credentials
- Uses [ECR](https://aws.amazon.com/ecr) for image security scanning.

## How it works

This template:

1. Builds a Docker image
2. Assumes an AWS role using the AWS Assume Role with Web Identity plugin.
3. Pushes a tagged Docker image to an AWS ECR registry.
4. Audits for security vulerabilities using AWS ECR image scanning.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your project.
2. Using an AWS IAM role with the appropriate ECR policies, replace the placeholder `ROLE_ARN` in the pipeline definition.
in the pipeline definition to match your project.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
