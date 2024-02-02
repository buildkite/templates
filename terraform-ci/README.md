---
title: Terraform + Docker + AWS
description: This pipeline validates and plans Terraform changes using Docker and AWS Assume Role.
tags: ["CI", "Terraform", "Docker", "AWS"]
author: Buildkite
---

# CI for Terraform with AWS Assume Role and Docker

This template gives you a continuous integration (CI) pipeline that validates and plans Terraform changes using Docker and AWS Assume Role.

At a glance:

- For [Terraform](https://www.terraform.io/)
- Uses [Docker](https://github.com/buildkite-plugins/docker-buildkite-plugin) with a terraform image
- Uses the [AWS Assume Role](https://github.com/buildkite-plugins/aws-assume-role-with-web-identity-buildkite-plugin) plugin to access AWS credentials

## How it works

This template:

1. Validates the Terraform configuration in a Docker image.
2. Assumes an AWS role using the AWS Assume Role with Web Identity plugin.
3. Initializes Terraform and plans changes, outputting a plan file, which is available as an [artifact](https://buildkite.com/docs/pipelines/artifacts).

The pipeline runs both steps in a Docker container with the HashiCorp Terraform image, passing through a number of environment variables.

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your Terraform configuration.
2. Replace the placeholder AWS role ARN in the pipeline definition.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
