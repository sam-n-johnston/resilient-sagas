import { Outbound } from '../../domain/Outbound';

export interface CSMService {
    createShippingLabel(outbound: Outbound, requestId: string): Promise<void>;
}
