# Resilient Sagas

## Deployment

To deploy, first change the `LogGroupName` from `sam123` to something unique. Then:

```bash
export AWS_PROFILE=sandbox
aws sso login --profile sandbox
sam build
npm run build:watch # in a different different terminal
sam sync --watch --stack-name <insert-your-stack-name-here> --no-dependency-layer
```

## Starting the saga

To find the name of your SQS, go to the AWS console > CloudFormation > Stacks > Search for the stack name you entered in [Deployment](#deployment) > Resources.

This will list all resources that were created with your stack. By searching with `CreateOutboundQueue`, you should be able to find the SQS, it will have a name like `<stack name>-CreateOutboundQueue-<random id>`. 

Once you have the name, you can go to the SQS console, search with your SQS's name, then send a message:

```json
{
  "test": "my message"
}
```
