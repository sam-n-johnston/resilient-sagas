import { CSMService } from '../application/services/CSMService';
import { Outbound } from '../domain/Outbound';

export class HTTPCMSService implements CSMService {
    createShippingLabel(outbound: Outbound, requestId: string): Promise<void> {
        try {
            // Random chance of failure
            const value = Math.random();

            // These errors mimick errors from the CMS itself.
            if (value > 0.75) {
                throw new Error('HTTP timed out, received HTTP code 504');
            }

            if (value < 0.25) {
                throw new Error(
                    'Invalid shipping address provided, HTTP code 400'
                );
            }

            if (value > 0.25 && value < 0.5) {
                throw new Error(
                    'Internal Server Error, received HTTP code 500'
                );
            }

            return Promise.resolve();
        } catch (error: any) {
            // To fill out what we want to do here
            throw error;
        }
    }
}
