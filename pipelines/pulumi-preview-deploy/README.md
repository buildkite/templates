---
name: "Pulumi preview and deploy AWS"
categories: ["IaC"]
tags: ["IaC", "DevOps", "Node.js", "Pulumi", "AWS"]
---

# Update AWS stack with Pulumi

A Infrastructure as Code (Iac) pipeline for managing AWS resources using [Pulumi](https://pulumi.com).

## How it works
- Assumes AWS role via Buildkite OIDC
- Runs Pulumi CLI in Node.js environment
- Preview Pulumi changes with a Buildkite annotation
- Blocks deployment until stack changes are confirmed
- Deploys stack (`pulumi up`)

## Prerequisites
- Setup Buildkite as OIDC provider in AWS
- Pulumi is installed
- `PULKUMI_ACCESS_TOKEN` environment variable

## Plugins
- https://github.com/buildkite-plugins/aws-assume-role-with-web-identity-buildkite-plugin
- https://github.com/buildkite-plugins/docker-buildkite-plugin
