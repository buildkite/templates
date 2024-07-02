---
title: Scan for vulnerabilities using Wiz
description: Scan your infrastructure-as-code CloudFormation stacks or Docker images for security vulnerabilities using Wiz.
author: Buildkite
use_cases: ["Security", "CI"]
tools: ["Wiz"]
primary_emojis: [":wiz:", ":buildkite:"]
platforms: []
languages: []
---

# Scan for vulnerabilities using Wiz Template

This template provides a continuous integration (CI) pipeline that scans a project for security vulnerabilities using [Wiz](https://www.wiz.io/).


## How it works

This template:

1. Configures and runs Wiz using a [Buildkite plugin](https://github.com/buildkite-plugins/wiz-buildkite-plugin)
2. Requires a Wiz account


## Configuration

The following options are available for the wiz-buildkite-plugin:

- scan-type (required, string): Specifies the type of scan to perform. Possible values are dir, docker, or iac.

### Optional Parameters

- api-secret-env (optional, string): The environment variable that the Wiz API Secret is stored in. Defaults to WIZ_API_SECRET. Refer to the documentation [here](https://buildkite.com/docs/pipelines/secrets#using-a-secrets-storage-service) for more information about managing secrets on your Buildkite agents.
  
- iac-type (optional, string): Specifies the type of Infrastructure as Code (IaC) to scan. Possible values are Ansible, AzureResourceManager, Cloudformation, Dockerfile, GoogleCloudDeploymentManager, Kubernetes, Terraform. Used when scan-type is iac.
  
- image-address (optional, string): The path to the image file, used when scan-type is docker.

- output-format (optional, string): Specifies the output format for the scan results. Possible values are human, json, or sarif. Defaults to human.

- parameter-files (optional, string): A comma-separated list of globs of external parameter files to include while scanning, e.g., variables.tf. Used when scan-type is iac.

- path (optional, string): The file or directory to scan. Defaults to the root directory of the repository. Used when scan-type is dir or iac.

- show-secret-snippets (optional, bool): Enables snippets in secrets. Defaults to false.

For more advanced configurations, you can specify additional options as needed. For example:

steps:
  - label: "Scan Terraform File"
    command: <your-command>
    env:
      WIZ_API_ID: "<your-id-goes-here>"
    plugins:
      - wiz#v1.4.0:
          scan-type: 'iac'
          iac-type: 'Terraform'
          path: 'main.tf'
          parameter-files: 'variables.tf'

## Next Steps

After you select Use template, you’ll:

1. Connect your Git repository.
2. Modify the template commands, environment variables, and secrets as needed for your project.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.