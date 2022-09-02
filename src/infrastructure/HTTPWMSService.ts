import { WMSCrashException } from '../application/services/errors/WMSCrashException';
import { WMSUnreachableException } from '../application/services/errors/WMSUnreachableException';
import { WMSValidationFailedException } from '../application/services/errors/WMSValidationFailedException';
import { WMSService } from '../application/services/WMSService';
import { Outbound } from '../domain/Outbound';

export class HTTPWMSService implements WMSService {
    createOutbound(outbound: Outbound, requestId: string): Promise<void> {
        try {
            // Random chance of failure
            const value = Math.random();

            if (value > 0.75) {
                throw new Error('HTTP timed out, received HTTP code 504');
            }

            if (value < 0.25) {
                throw new Error(
                    'Outbound does not have any items, received HTTP code 400'
                );
            }

            if (value > 0.25 && value < 0.5) {
                throw new Error(
                    'Internal Server Error, received HTTP code 500'
                );
            }

            return Promise.resolve();
        } catch (error: any) {
            if (error.message === 'HTTP timed out, received HTTP code 504') {
                throw new WMSUnreachableException(
                    'The WMS was unreachable within a reasonable delay',
                    error
                );
            } else if (
                error.message ===
                'Outbound does not have any items, received HTTP code 400'
            ) {
                throw new WMSValidationFailedException(
                    'The validation of the Outbound failed in the WMS',
                    error
                );
            } else if (
                error.message ===
                'Internal Server Error, received HTTP code 500'
            ) {
                throw new WMSCrashException(
                    'The WMS seems to be down, try again later',
                    error
                );
            } else {
                throw error;
            }
        }
    }
}
