# Contributing

## Creating a new template

A pipeline template should be defined using the following structure:

```
.
└── snowflake-data-ingestion-pipeline/
    ├── pipeline.yaml
    └── README.md
    └── example-project
        └── ...
```

### `README.md`

This file contains a detailed description of what a specific template definition is and how it works.

A template `README.md` MUST include the following metadata defined as YAML frontmatter:

- `name` – The name of the pipeline template.
- `description` – The meta description for the template.
- `tags` – The attributes the pipeline template will be grouped by. Such as NextJS, Rails, Ruby, AWS or Deploy.
- `author` - The author of the pipeline template

### `pipeline.yaml`

A Buildkite Pipeline definition [file](https://buildkite.com/docs/pipelines/defining-steps).

### `example-project` (optional)

Having an example project with relevant boilerplate makes it possible to test pipeline yaml in isolation.

It's paricularly useful when paired with the Buildkite CLI by running the following command:

```sh
cd my-template-ci/example;
bk local run ../pipeline.yaml
```

## DatoCMS

The templates defined in this repository are ingested into DatoCMS.

```mermaid

sequenceDiagram
User->>templates: Merge new template pull request
templates->>Buildkite: Trigger build on Buildkite
Buildkite->>DatoCMS: Parse and publish templates to DatoCMS
User->>site: Visit buildkite.com/templates
site->>DatoCMS: Fetch templates from DatoCMS
```
