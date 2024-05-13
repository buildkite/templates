---
title: CI for Ruby on Rails on Hosted Agents
description: Build, lint, audit, run static analysis, and test a Ruby on Rails application using Bundler, RuboCop, Bundler-audit, Brakeman, and RSpec.
author: "Buildkite"
use_cases: ["CI", "Web"]
languages: ["Ruby"]
platforms: ["Docker", "Hosted Agents"]
tools: ["Bundler", "RuboCop", "Bundler-audit", "Brakeman", "RSpec"]
primary_emojis: [":ruby:", ":rails:"]
---

# CI for Ruby on Rails on Hosted Agents

This template gives you a continuous integration (CI) pipeline that builds, lints, audits, runs static analysis, and tests a Ruby on Rails application.

At a glance:

- For [Ruby on Rails](https://rubyonrails.org/) applications
- Uses [Bundler](https://bundler.io/)
- Requires [Docker](https://docs.docker.com/get-docker/)
- Lints code with [RuboCop](https://rubocop.org/)
- Audits gems with [Bundler-audit](https://github.com/rubysec/bundler-audit#readme)
- Runs static analysis with [Brakeman](https://brakemanscanner.org/)
- Tests code using [RSpec](https://rspec.info/)

## How it works

This template:

1. Installs ruby gems using bundler, caching the result.
2. Lints your Ruby code with RuboCop.
3. Audits your gems with Bundler-audit.
4. Performs static analysis of your code with Brakeman.
3. Runs tests with RSpec.

The first step installs gems and caches them for the following steps. The remaining steps run in parallel. The runtime environment uses a Docker image with the latest version of Ruby.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your RoR application.
2. Modify the commands if necessary.
3. Configure the pipeline cluster to use hosted agents.
4. Enable Git mirror in Hosted agents - Cache Storage - Settings. This will speed up git checkout.
4. Run the pipeline.
