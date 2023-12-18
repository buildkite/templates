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

## How it works

This template:
1. Installs dependencies using the `go install` command.
2. Builds the Go module using the `go build` command.
3. Runs tests on the module using the `go test` command.

## Next steps

After you select Use template, you’ll:
1. Connect the Git repository with your Golang module.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
