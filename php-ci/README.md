---
title: PHP + PHPUnit + Composer
description: Set up a CI pipeline for a PHP application with linting and testing, using PHP's built-in linter, PHPUnit, and Composer.
tags: ["CI", "PHP", "PHPUnit", "Composer"]
author: Buildkite
---

# CI/CD for PHP with Linting, Testing, and Building

This template gives you a continuous integration pipeline that lints and tests a PHP application.

At a glance:

- For PHP applications
- Uses Composer for installing packages
- Uses PHP's built-in linter
- Uses PHPUnit for testing

## How it works

This template:

1. Installs packages with Composer
1. Lints the PHP code with PHP's built-in linter.
2. Runs tests with PHPUnit.

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your PHP application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
