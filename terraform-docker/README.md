---
title: CI/CD for Docker using Terraform
description: Build, change, and destroy Docker infrastructure using Terraform.
author: "Buildkite"
use_cases: ["IaC", "CI", "CD"]
languages: ["Terraform"]
platforms: ["Docker"]
tools: ["Terraform"]
primary_emojis: [":terraform:", ":docker:"]
---

# CI/CD for Docker infrastructure using Terraform

This template gives you a continuous integration (CI) pipeline for building, changing, and destroying Docker infrastructure using Terraform.

At a glance:

- For [Terraform](https://www.terraform.io/)
- Uses [Docker](https://github.com/buildkite-plugins/docker-buildkite-plugin) with a Terraform image

## How it works

This template:

1. Validates the Terraform configuration in a Docker image.
2. Initializes Terraform and plans changes, outputting a plan file, which is available as an [artifact](https://buildkite.com/docs/pipelines/artifacts).
3. Blocks for input before conditionally applying the proposed Terraform plan.

The pipeline runs all steps in a Docker container with the [HashiCorp Terraform image](https://hub.docker.com/r/hashicorp/terraform).

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Terraform configuration.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.
