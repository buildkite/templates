---
title: Golang CI/CD Pipeline
description: A Golang pipeline to build and test a go module
tags: ["CI", "Golang"]
author: Buildkite
---

# Golang CI/CD Pipeline

This template provides a continuous integration (CI) pipeline for Golang applications. It builds and tests a Go module.

At a glance:
- For Golang applications
- Uses Go build and test commands
- Requires a Go module
- Deploys to a local environment

## How it works

This template:
1. Builds the Go module using the `go build` command.
2. Runs tests on the module using the `go test` command.

The pipeline runs in a Docker container using the Golang image.

## Next steps

After you select Use template, you’ll:
1. Connect the Git repository with your Golang module.
2. Modify the build and test commands as necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
