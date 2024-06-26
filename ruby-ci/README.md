---
title: CI for Ruby
description: Build, lint, and test a Ruby application using Bundler, RuboCop, and RSpec.
author: Buildkite
languages: ["Ruby"]
use_cases: ["CI", "Web"]
platforms: ["Docker"]
tools: ["Bundler", "RuboCop", "RSpec"]
primary_emojis: [":ruby:"]
---

# CI for Ruby

This template gives you a continuous integration (CI) pipeline that builds, lints, and tests a Ruby application.

At a glance:

- For [Ruby](https://www.ruby-lang.org/) applications
- Uses [Bundler](https://bundler.io/)
- Requires [Docker](https://docs.docker.com/get-docker/)
- Lints code with [RuboCop](https://rubocop.org/)
- Tests code using [RSpec](https://rspec.info/)

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
