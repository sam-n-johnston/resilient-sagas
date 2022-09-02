import { Outbound } from './Outbound';

export interface OutboundRepository {
    save(outbound: Outbound, requestId: string): Promise<void>;
}
