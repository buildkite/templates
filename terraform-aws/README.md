---
title: CI/CD for AWS using Terraform
description: Build, change, and destroy AWS infrastructure using Terraform.
author: "Buildkite"
use_cases: ["IaC", "CI", "CD"]
languages: ["Terraform"]
platforms: ["AWS"]
tools: ["Terraform"]
primary_emojis: [":terraform:", ":aws-logo:"]
---

# CI/CD for AWS infrastructure using Terraform

This template gives you a continuous integration (CI) pipeline for building, changing, and destroying AWS infrastructure using Terraform.

At a glance:

- For [Terraform](https://www.terraform.io/)
- Uses [Docker](https://github.com/buildkite-plugins/docker-buildkite-plugin) with a Terraform image
- Uses the [AWS Assume Role](https://github.com/buildkite-plugins/aws-assume-role-with-web-identity-buildkite-plugin) plugin to access AWS credentials

## How it works

This template:

1. Validates the Terraform configuration in a Docker image.
2. Assumes an AWS role using the AWS Assume Role with Web Identity plugin.
3. Initializes Terraform and plans changes, outputting a plan file, which is available as an [artifact](https://buildkite.com/docs/pipelines/artifacts).
4. Blocks for input before conditionally applying the proposed Terraform plan.

The pipeline runs all steps in a Docker container with the HashiCorp Terraform image, passing through all the necessary AWS environment variables.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Terraform configuration.
2. Replace the placeholder AWS role ARN in the pipeline definition.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
