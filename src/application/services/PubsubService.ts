import { Outbound } from '../../domain/Outbound';

export interface PubsubService {
    emit(outbound: Outbound, requestId: string): Promise<void>;
}
