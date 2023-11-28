# CI/CD for React Component Library with Docker Compose Plugin

This template gives you a continuous integration and continuous deployment (CI/CD) pipeline that builds, tests, deploys and releases a react component library framework.

At a glance:

- For React Component Library
- Uses Docker Compose Plugin
- Requires Docker and Buildkite
- Builds and tests in parallel
- Deploys to npm

## How it works

This template:

1. Builds the base image using Docker Compose Plugin.
2. Builds the test image using Docker Compose Plugin.
3. Compiles the code.
4. Runs unit tests.
5. Performs dependency analysis.
6. Deploys the package to npm if the build is on the master branch and the commit message indicates a release.
7. Creates a GitHub release if the build is on the master branch and the commit message indicates a release.
8. Runs end-to-end tests.

The Docker Compose Plugin is used to build and run Docker images. It provides a way to define and manage multi-container Docker applications.

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your React Component Library.
2. Modify the commands, environment variables, secrets as per your project requirements.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.
