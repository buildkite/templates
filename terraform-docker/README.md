---
title: Deploy Docker with Terraform
description: Build, change, and destroy Docker infrastructure with Terraform.
author: "Buildkite"
use_cases: ["IaC", "CI", "CD"]
languages: ["Terraform"]
platforms: ["Docker"]
tools: ["Terraform"]
primary_emojis: [":terraform:", ":docker:"]
---

# Deploy Docker infrastructure with Terraform

This template gives you a continuous integration (CI) pipeline for building, changing, and destroying Docker infrastructure with Terraform.

At a glance:

- For [Terraform](https://www.terraform.io/)
- Uses [Docker](https://github.com/buildkite-plugins/docker-buildkite-plugin) with a terraform image

## How it works

This template:

1. Validates the Terraform configuration in a Docker image.
2. Initializes Terraform and plans changes, outputting a plan file, which is available as an [artifact](https://buildkite.com/docs/pipelines/artifacts).
3. Blocks for input before conditionally applying the proposed Terraform plan.

The pipeline runs all steps in a Docker container with the HashiCorp Terraform image, passing through all the necessary AWS environment variables.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Terraform configuration.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.

If you need help, please [check our documentation](https://buildkite.com/docs/pipelines/configuration-overview), [raise an issue](https://github.com/buildkite/templates/issues), or [reach out to support](https://buildkite.com/support).
