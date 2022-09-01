import { StepFunctions } from 'aws-sdk';
import { StartExecutionInput } from 'aws-sdk/clients/stepfunctions';

export const handler = async (event: any) => {
    const input: StartExecutionInput = {
        stateMachineArn:
            'arn:aws:states:us-west-2:252011305655:stateMachine:CreateOutbound-p8K5UCInW7ov',
        input: JSON.stringify({
            id: '123123',
            items: [
                { sku: '123', source: 'MD', quantity: 2 },
                { sku: '345', source: 'MD', quantity: 1 },
            ],
        }),
    };

    const stepFunctionClient = new StepFunctions({
        region: 'us-west-2',
    });

    await stepFunctionClient.startExecution(input).promise();
};
