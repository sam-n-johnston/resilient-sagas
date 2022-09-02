import { OutboundId } from '../../domain/OutboundId';

export interface Bus {
    reply(
        fqdn: string,
        requestId: string,
        payload: {
            id?: OutboundId;
            errors?: Error[];
        }
    ): Promise<void>;
}
