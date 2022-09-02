import { DatabaseThrottlingException } from '../application/services/errors/DatabaseThrottlingException';
import { DatabaseUnreachableException } from '../application/services/errors/DatabaseUnreachableException';
import { Outbound } from '../domain/Outbound';
import { OutboundRepository } from '../domain/PubsubService';

export class DynamodbRepository implements OutboundRepository {
    save(outbound: Outbound, requestId: string): Promise<void> {
        try {
            // Random chance of failure
            const value = Math.random();

            if (value > 0.75) {
                throw new Error('HTTP timed out, received HTTP code 504');
            }

            if (value > 0.25 && value < 0.5) {
                throw { name: 'ProvisionedThroughputExceededException' };
            }

            return Promise.resolve();
        } catch (error: any) {
            if (error.message === 'HTTP timed out, received HTTP code 504') {
                throw new DatabaseUnreachableException(error);
            } else if (
                error.name === 'ProvisionedThroughputExceededException'
            ) {
                throw new DatabaseThrottlingException(error);
            } else {
                throw error;
            }
        }
    }
}
