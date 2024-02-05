---
title: CI for Golang
description: A CI pipeline to build and test a Go application
author: Buildkite
languages: ["Go"]
platforms: ["Docker"]
use_cases: ["CI"]
tools: []
primary_emojis: [":golang:"]
---

# CI for Golang

This template provides a continuous integration (CI) pipeline for Golang applications. It builds and tests a Go module.

At a glance:
- For [Golang](https://go.dev/) applications.
- Requires [Docker](https://docs.docker.com/get-docker/)
- Runs Go's [standard library commands](https://pkg.go.dev/cmd/go) to build, test, and generate.

## How it works

This template:

- Downloads Go dependencies using `go mod vendor` and caches them for usage across subsequent steps.
- Builds the module
- Runs tests
- Ensures generated code is up.

The runtime environment uses the official [Golang Docker image](https://hub.docker.com/_/golang) with the latest version.

## Next steps

After you select Use template, you’ll:
1. Connect the Git repository with your Golang module.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
