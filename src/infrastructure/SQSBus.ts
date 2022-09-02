import { Bus } from '../application/services/Bus';
import { OutboundId } from '../domain/OutboundId';
import { SQS } from 'aws-sdk';

export class SQSBus implements Bus {
    async reply(
        fqdn: string,
        requestId: string,
        payload: { id?: OutboundId | undefined; errors?: Error[] | undefined }
    ): Promise<void> {
        const bus = new SQS({ region: 'us-west-2' });
        await bus
            .sendMessage({
                QueueUrl: process.env.REPLY_QUEUE_URL || '',
                MessageBody: JSON.stringify({
                    payload,
                    metadata: {
                        requestId,
                        fqdn,
                    },
                }),
            })
            .promise();
    }
}
