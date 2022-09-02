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
                throw new Error(
                    'Getting error Too Many Requests, received HTTP code 429'
                );
            }

            return Promise.resolve();
        } catch (error: any) {
            if (error.message === 'HTTP timed out, received HTTP code 504') {
                throw new DatabaseUnreachableException(
                    'The databvase was unreachable within a reasonable delay',
                    error
                );
            } else if (
                error.message ===
                'Getting error Too Many Requests, received HTTP code 429'
            ) {
                throw new DatabaseThrottlingException(
                    'The validation of the Outbound failed in the WMS',
                    error
                );
            } else {
                throw error;
            }
        }
    }
}
