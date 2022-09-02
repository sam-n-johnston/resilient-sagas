import { PubsubUnreachableException } from '../application/services/errors/PubsubUnreachableException';
import { Outbound } from '../domain/Outbound';
import { PubsubService } from '../application/services/PubsubService';

export class SNSPubsubService implements PubsubService {
    emit(outbound: Outbound, requestId: string): Promise<void> {
        try {
            // Random chance of failure
            const value = Math.random();

            if (value > 0.5) {
                throw new Error('SNS timed out, received HTTP code 504');
            }

            return Promise.resolve();
        } catch (error: any) {
            if (error.message === 'SNS timed out, received HTTP code 504') {
                throw new PubsubUnreachableException('', error);
            } else {
                throw error;
            }
        }
    }
}
