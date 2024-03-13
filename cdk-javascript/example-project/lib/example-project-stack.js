const cdk = require('aws-cdk-lib');
const sns = require('aws-cdk-lib/aws-sns');
const subs = require('aws-cdk-lib/aws-sns-subscriptions');
const sqs = require('aws-cdk-lib/aws-sqs');

class ExampleProjectStack extends cdk.Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'ExampleProjectQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'ExampleProjectTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}

module.exports = { ExampleProjectStack }
