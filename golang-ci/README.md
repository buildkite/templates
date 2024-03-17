---
title: CI for Go
description: Set up a CI pipeline for a Go application using standard library tooling.
author: Buildkite
languages: ["Go"]
platforms: ["Docker"]
use_cases: ["CI", "Web"]
tools: []
primary_emojis: [":golang:"]
---

# CI for Go

This template provides a continuous integration (CI) pipeline for Go applications.

At a glance:
- For [Golang](https://go.dev/) applications.
- Requires [Docker](https://docs.docker.com/get-docker/).
- Runs Go's [standard library commands](https://pkg.go.dev/cmd/go) to build, test, and generate.

## How it works

This template:

1. Downloads Go dependencies using `go mod vendor` and caches them for use across subsequent steps.
2. Builds the module.
3. Runs the tests.
4. Ensures the generated code is up.

The runtime environment uses the official [Golang Docker image](https://hub.docker.com/_/golang) with the latest version.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Golang module.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.
