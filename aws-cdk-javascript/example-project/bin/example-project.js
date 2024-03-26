#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { ExampleProjectStack } = require('../lib/example-project-stack');

const app = new cdk.App();
new ExampleProjectStack(app, 'ExampleProjectStack');
