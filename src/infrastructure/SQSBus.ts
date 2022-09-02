import { Bus } from '../application/services/Bus';
import { OutboundId } from '../domain/OutboundId';
import { SQS } from 'aws-sdk';
import { BusUnreachableException } from '../application/services/errors/BusUnreachableException';

export class SQSBus implements Bus {
    async reply(
        fqdn: string,
        requestId: string,
        payload: { id?: OutboundId | undefined; errors?: Error[] | undefined }
    ): Promise<void> {
        try {
            // Random chance of failure
            const value = Math.random();

            if (value > 0.5) {
                throw new Error('SQS timed out, received HTTP code 504');
            }

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
        } catch (error: any) {
            if (error.message === 'SQS timed out, received HTTP code 504') {
                throw new BusUnreachableException('', error);
            } else {
                throw error;
            }
        }
    }
}
