---
title: "Compile Go binary"
description: "Build and cross-compile a Go binary for Linux, Windows, and Darwin architectures."
author: Buildkite
use_cases: ["CI"]
languages: ["Go"]
platforms: []
tools: []
primary_emojis: [":go:"]
---

# Cross compile a Go binary

This template gives you a continuous integration (CI) pipeline that compiles a Go binary for multiple targets.

At a glance:

- For [Golang projects](https://go.dev/)
- Uses the [Golang Cross Compile Buildkite Plugin](https://github.com/buildkite-plugins/golang-cross-compile-buildkite-plugin)
- Compiles for Linux, Windows, and Darwin architectures.

## How it works

This template:

1. Builds your Go project.
2. Cross-compiles for Linux, Windows, and Darwin architectures.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Go code.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.
