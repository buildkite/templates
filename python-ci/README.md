---
title: CI for Python
description: Build, lint, and test a Python application using pip, Ruff, and pytest.
author: Buildkite
languages: ["Python"]
use_cases: ["CI", "Web"]
platforms: ["Docker"]
tools: ["pip", "pytest", "Ruff", "junit"]
primary_emojis: [":python:"]
---

# CI for Python with pip, pytest and Ruff

This template gives you a continuous integration (CI) pipeline that lints, tests, and builds a Python application.

At a glance:

- For [Python](https://www.python.org/) applications
- Uses [pip](https://pypi.org/project/pip/)
- Requires [Docker](https://docs.docker.com/get-docker/)
- Lints code with [Ruff](https://docs.astral.sh/ruff/)
- Tests code using [pytest](https://docs.pytest.org/)

## How it works

This template:

- Install Python dependencies with pip, caching the result.
- Performs static analysis on the codebase with Ruff.
- Runs pytest unit tests.
- Automatically annotates the build based on junit test output

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Python application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
