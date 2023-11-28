# CI/CD for .NET with Buildkite

This template gives you a continuous integration and continuous deployment (CI/CD) pipeline that automates the build, test, and deployment process for .NET projects.

At a glance:

- For .NET projects
- Automates build, test, and deployment
- Deploys to the respective environments defined in your dotnet configuration files

## How it works

This template:

1. Builds the project using the `dotnet build` command.
2. Runs tests on the built project using the `dotnet test` command.
3. Deploys the project using the `dotnet publish` command.

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your .NET project.
2. Modify the commands, environment variables, secrets as per your project requirements.
3. Configure the compute—run locally, on-premises, or in the cloud.
4. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition, set a schedule to trigger a nightly build or have builds trigger based on pull reviews.
