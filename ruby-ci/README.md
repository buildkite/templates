---
title: CI for Ruby
description: Build, lint, and test a Ruby application using Bundler, Rubocop, and RSpec.
author: Buildkite
languages: ["Ruby"]
use_cases: ["CI", "Web"]
platforms: ["Docker"]
tools: ["Bundler", "RuboCop", "RSpec"]
primary_emojis: [":ruby:"]
---

# CI for Ruby with Bundler, Rubocop, and RSpec

This template gives you a continuous integration (CI) pipeline that lints and tests a Ruby application.

At a glance:

- For [Ruby](https://www.ruby-lang.org/) applications
- Uses [Bundler](https://bundler.io/)
- Requires [Docker](https://docs.docker.com/get-docker/)
- Runs [RuboCop](https://rubocop.org/) for linting
- Runs [RSpec](https://rspec.info/) for testing

## How it works

This template:

1. Installs ruby gems using bundler, caching the result.
2. Lints your Ruby code with RuboCop.
3. Runs tests with RSpec.

All steps run in serial, with each depending on the previous step to complete before starting. The runtime environment uses a Docker image with the latest version of Ruby.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Ruby application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.

If you need help, please [check our documentation](https://buildkite.com/docs/pipelines/configuration-overview), [raise an issue](https://github.com/buildkite/templates/issues), or [reach out to support](https://buildkite.com/support).
