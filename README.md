# Templates

A collection of Buildkite Pipelines starter templates that are showcased on the [template gallery](https://buildkite.com/templates).

## Creating a new template

A pipeline template is defined using the following structure:

```
.
└── pipelines/
    └── snowflake-data-ingestion-pipeline/
        ├── pipeline.yaml
        └── README.md
```

### `README.md`

This file contains a detailed description of what a specific template definition is and how it works.

A template `README.md` MUST include the following metadata defined as YAML frontmatter:

- `name` – The name of the pipeline template.
- `categories` – The categories this pipeline template will be grouped under.

### `pipeline.yaml`

A Buildkite Pipeline definition [file](https://buildkite.com/docs/pipelines/defining-steps).

## Templates -> DatoCMS

The templates defined in this repository are ingesting into DatoCMS.

```mermaid

sequenceDiagram
User->>templates: Merge new template pull request
templates->>Buildkite: Trigger build on Buildkite
Buildkite->>DatoCMS: Parse and publish templates to DatoCMS
User->>site: Visit buildkite.com/templates
site->>DatoCMS: Fetch templates from DatoCMS
```
