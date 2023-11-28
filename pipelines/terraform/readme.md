# CI/CD for Terraform with Buildkite

This template gives you a continuous integration and continuous deployment (CI/CD) pipeline that manages a company's infrastructure using Terraform and Buildkite.

At a glance:

- For Terraform
- Requires a Terraform project
- Deploys to the specified infrastructure in the Terraform project

## How it works

This template:

1. Initializes the Terraform project with `terraform init`
2. Validates the Terraform configuration with `terraform validate`
3. Creates an execution plan with `terraform plan`
4. Applies the changes with `terraform apply`
5. Destroys the infrastructure with `terraform destroy`

## Next steps

After you select Use template, you’ll:

1. Connect the Git repository with your Terraform project.
2. Configure the compute—run locally, on-premises, or in the cloud.
3. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.