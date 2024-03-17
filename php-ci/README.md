---
title: CI for PHP
description: Build, lint and test a PHP application using Composer, PHP's built-in linter, and PHPUnit.
author: Buildkite
languages: ["PHP"]
use_cases: ["CI"]
tools: ["composer", "phpunit"]
platforms: []
primary_emojis: [":php:"]
---

# CI/CD for PHP with Linting, Testing, and Building

This template gives you a continuous integration (CI) pipeline that lints and tests a PHP application.

At a glance:

- For [PHP](https://www.php.net/) applications
- Uses [Composer](https://getcomposer.org/) for installing packages
- Uses PHP's built-in linter
- Uses [PHPUnit](https://phpunit.de/) for testing

## How it works

This template:

1. Installs PHP dependencies with Composer
2. Lints application PHP code with PHP's built-in linter.
3. Runs tests with PHPUnit.

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your PHP application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
