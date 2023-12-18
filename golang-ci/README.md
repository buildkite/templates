---
title: Golang CI pipeline
description: A Golang pipeline to build and test a Go module
tags: ["CI", "Golang"]
author: Buildkite
---

# CI for Golang

This template provides a continuous integration (CI) pipeline for Golang applications. It builds and tests a Go module.

At a glance:
- For [Golang](https://go.dev/) applications.
- Requires [Docker](https://docs.docker.com/get-docker/)
- Runs Go's [standard library commands](https://pkg.go.dev/cmd/go) to:
  - Install dependencies using `go install`.
  - Build the module using `go build`.
  - Run tests using `go test`.
  - Ensures generated code is up to date with `go generate` and `git diff`.

## How it works

This template:

- Installs Go dependencies.
- Builds the module.
- Runs tests.
- Ensures generated code is up to date and throws an error if it isn't.

All steps run in serial, with each depending on the previous step to complete before starting. The runtime environment uses the official [Golang Docker image](https://hub.docker.com/_/golang) with the latest version.

## Next steps

After you select Use template, you’ll:
1. Connect the Git repository with your Golang module.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
