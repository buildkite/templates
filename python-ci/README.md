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

1. Install Python dependencies with pip, caching the result.
2. Performs static analysis on the codebase with Ruff.
3. Runs pytest unit tests.
4. Automatically annotates the build based on junit test output

The runtime environment uses the official [Python Docker image](https://hub.docker.com/_/python) with the latest version.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Python application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.
