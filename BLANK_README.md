<!--
*** This is a example README that you can edit to suit your needs.
*** After you've edited this file, delete this comment block
*** and ensure that there are no leading spaces before the front matter.
*** Then, save this file as README.md in the directory for your template.
*** If you have any trouble, submit a PR, and we'll get back to you.
*** Thank you!
***
***
*** Front Matter Key
***
*** title: <List of key tech separated by ‘+’>
*** description: <Short description of the use case>
*** author: <Organization or person in double quotes>
*** use_cases: <Array of use cases in format ["IaC", "CI"]>
*** languages: <Array of programming languages in format ["JavaScript", "Go"]>
*** platforms: <Array of platforms in format ["Pulumi", "Docker", "AWS"]>
*** tools: <Array of tools in format ["clippy", "cargo"]>
*** primary_emojis: <Array of Buildkite emoji shortcodes for rendering in search results [":buildkite:", ":aws:"]
***
***
*** Content Guide
***
*** H1: CI/CD for <technology> with <key features>
*** Intro paragraph: This template gives you a continuous integration and
*** continuous deployment (CI/CD) pipeline that <high-level description of pipeline goal>.
***
*** At a glance:
*** - For <X>
*** - Uses <X>
*** - Requires <X>
*** - <Additional relevant behavior>
*** - Deploys to <X>
***
*** H2: How it works
*** This template:
*** 1. <Talk through steps in detail>
*** 2. <...More steps...>
*** <Additional details about how the pipeline runs and the runtime environment>
***
*** H2: Next steps
*** After you select **Use template**, you’ll:
*** 1. Connect the Git repository with your <X>.
*** 2. <Any modifications to the template like commands, environment variables, secrets>
*** 3. Configure the compute—run locally, on-premises, or in the cloud.
*** 4. Run the pipeline.
***
*** Footer:
*** <You can then play around...>
*** <If you need help,...>
-->

---
title: Pulumi + AWS + Node.js + npm
description: Preview and deploy Pulumi changes to AWS using Node.js and npm
author: "Buildkite"
use_cases: ["IaC", "CI"]
languages: ["JavaScript"]
platforms: ["Pulumi", "Docker", "AWS"]
tools: []
primary_emojis: [":pulumi:", ":aws:"]
---

# CI/CD for Pulumi projects with AWS, Node.js, and npm

This template gives you a continuous integration and continuous deployment (CI/CD) pipeline that previews a Pulumi change before deploying it to AWS.

At a glance:

- For [Pulumi projects](https://www.pulumi.com/)
- Uses [Node.js](https://www.pulumi.com/) and [npm](https://www.npmjs.com/)
- Requires [Docker](https://www.npmjs.com/)
- Prompts for confirmation before deploying
- Deploys to [AWS](https://aws.amazon.com/)

## How it works

This template:

1. Assumes a role in AWS using Buildkite’s OIDC.
2. Installs Node dependencies using npm.
3. Prints a preview of the Pulumi change in an annotation on the build.
4. Asks for manual confirmation to deploy the change.
5. Deploys the Pulumi change to AWS with `pulumi up`.

The runtime environment uses a Docker image with the Pulumi CLI and Node.js.

## Next steps

After you select **Use template**, you’ll:

1. Connect the Git repository with your Pulumi code.
2. Set Buildkite as an OIDC provider in AWS.
3. Set the `AWS_ROLE_ARN` environment variable to a role with permission to deploy Pulumi changes to your AWS account.
4. Set the `PULUMI_STACK` environment variable to the [Pulumi Stack](https://buildkite.com/support) being deployed.
5. Store `PULUMI_ACCESS_TOKEN` in your pipeline secrets.
6. Configure the compute—run locally, on-premises, or in the cloud.
7. Run the pipeline.

You can then play around with the pipeline settings. For example, run the pipeline locally while you iterate on the definition or set a schedule to trigger a nightly build.

If you need help, please [check our documentation](https://buildkite.com/docs/pipelines/configuration-overview), [raise an issue](https://github.com/buildkite/templates/issues), or [reach out to support](https://buildkite.com/support).
