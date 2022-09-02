import { Outbound } from '../../domain/Outbound';

export interface WMSService {
    createOutbound(outbound: Outbound, requestId: string): Promise<void>;
}
