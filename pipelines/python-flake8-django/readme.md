---
title: Python + Django + flake8
description: Set up a CI/CD pipeline for a Python application with linting, testing, and building using flake8, Django's manage.py, and setup.py.
tags: ["CI", "Python", "Django", "flake8"]
author: Buildkite
---

# CI/CD for Python + Django with Linting, Testing, and Building

This template gives you a continuous integration (CI) pipeline that lints, tests, and builds a Python application.

At a glance:

- For Python applications
- Uses flake8 for linting
- Uses Django's manage.py for testing
- Uses setup.py for building
- Deploys to PyPI

## How it works

This template:

1. Lints the Python code with flake8.
2. Runs tests with Django's manage.py.
3. Builds a source distribution and a wheel distribution with setup.py.

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your Python application.
2. Modify the commands if necessary.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
