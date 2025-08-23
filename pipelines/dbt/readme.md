---
title: DBT
description: Lint, build and run DBT models
tags: ["CI", "Python", "DBT", "Data"]
author: Buildkite
---

# CI for dbt with Buildkite

This template gives you a continuous integration pipeline that automates your dbt workflow of linting, testing and running your dbt models.

At a glance:

- For DBT projects to lint, seed, run and test in CI
- Uses Docker on a python image

## How it works

This template:

1. Installs dependencies using pip and dbt deps on a python docker image, saving into a `plugins` variable
2. Lints SQL using [sqlfluff](https://sqlfluff.com/) and [sqlfluff-templater-dbt](https://pypi.org/project/sqlfluff-templater-dbt/)
3. Runs DBT source freshness tests
4. Seeds the DBT project
5. Runs DBT
6. Runs DBT model tests

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your DBT project.
2. Ensure the dbt commands match your dbt profiles.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
