---
title: Rust + Clippy + Cargo
description: Set up a CI/CD pipeline for a Rust application with linting, testing, and building using Clippy and Cargo.
author: Buildkite
languages: ["Rust"]
use_cases: ["CI"]
platforms: ["Docker"]
tools: ["clippy", "cargo"]
---

# CI/CD for Rust with Linting, Testing, and Building

This template gives you a continuous integration (CI) pipeline that lints, tests, and builds a Rust application.

At a glance:

- For [Rust](https://www.rust-lang.org/) applications
- Requires [Docker](https://docs.docker.com/get-docker/)
- Uses [Clippy](https://github.com/rust-lang/rust-clippy) for linting
- Uses Cargo for building and testing

## How it works

This template:

1. Lints the Rust code with Clippy.
2. Runs tests with Cargo.
3. Compiles and uploads a Rust binary as a [build artifact](https://buildkite.com/docs/pipelines/artifacts).

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your Rust application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
