---
title: CI/CD for AWS ECS
description: Build and push a Docker image to AWS ECR and trigger an AWS ECS deployment.
author: Buildkite
use_cases: ["CD", "CI"]
platforms: ["AWS"]
languages: []
tools: []
primary_emojis: [":aws-logo:", ":ecs:"]
---

# CI/CD for AWS ECS

This templates gives you a continuous deployment (CD) pipeline that builds and deploys the latest version of an AWS ECR hosted Docker image to AWS ECS.

At a glance:

- For [Docker](https://www.docker.com/) applications
- Requires [AWS CLI](https://aws.amazon.com/cli/)
- Uses the [AWS Assume Role](https://github.com/buildkite-plugins/aws-assume-role-with-web-identity-buildkite-plugin) plugin to access AWS credentials
- Uses [ECR](https://aws.amazon.com/ecr) for hosting images
- Deploys to [AWS ECS](https://aws.amazon.com/ecs/)

## How it works

This template:

1. Builds a Docker image
2. Assumes an AWS role using the AWS Assume Role with Web Identity plugin.
3. Pushes a tagged Docker image to an AWS ECR registry.
4. Deploys an AWS ECS service with the latest image.
5. Waits for the AWS ECS service to stabilize.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your project.
2. Using an AWS IAM role with the appropriate ECR and ECS policies, replace the placeholder `ROLE_ARN` in the pipeline definition.
3. Replace the placeholder `IMAGE_NAME`, `SERVICE` and `CLUSTER` in the pipeline definition to match your project.
4. Configure the compute—run locally, on-premises, or in the cloud.
5. Run the pipeline.
