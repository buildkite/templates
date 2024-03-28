---
name: Push image to AWS ECR
tags: ["AWS", "ECR", "Docker"]
---

# Build, tag, and push a Docker image to Amazon ECR


This pipeline fully manages an ECR application repository by first [creating an ECR repository](https://github.com/seek-oss/create-ecr-buildkite-plugin), then subsequently p[publishing to an ECR repository](https://github.com/seek-oss/docker-ecr-publish-buildkite-plugin).


This will use standard AWS credentials available [in the environment](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html), or as an [instance role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) or task role as available. These must be granted [appropriate permissions](https://docs.aws.amazon.com/AmazonECR/latest/userguide/security_iam_id-based-policy-examples.html) for login to succeed and for push and pull to operate.

#### Plugins used:
- https://github.com/buildkite-plugins/ecr-buildkite-plugin
- https://github.com/seek-oss/create-ecr-buildkite-plugin
- https://github.com/seek-oss/docker-ecr-publish-buildkite-plugin
