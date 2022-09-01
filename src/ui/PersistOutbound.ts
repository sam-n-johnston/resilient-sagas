import { PersistOutboundCommand } from '../application/services/PersistOutboundCommand';
import { PersistOutboundHandler } from '../application/services/PersistOutboundHandler';
import {
    PersistOutboundInput,
    PersistOutboundOutput,
} from './dtos/PersistOutboundIO';

export const handler = async (
    event: PersistOutboundInput
): Promise<PersistOutboundOutput> => {
    const handler = new PersistOutboundHandler();
    const command = new PersistOutboundCommand(
        event.payload.items,
        event.payload.shippingAddress,
        event.metadata.requestId
    );

    await handler.handle(command);
};
