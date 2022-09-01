import { ReplyToResponseBusCommand } from '../application/services/ReplyToResponseBusCommand';
import { ReplyToResponseBusHandler } from '../application/services/ReplyToResponseBusHandler';
import {
    ReplyToResponseBusInput,
    ReplyToResponseBusOutput,
} from './dtos/ReplyToResponseBusIO';

export const handler = async (
    event: ReplyToResponseBusInput
): Promise<ReplyToResponseBusOutput> => {
    const handler = new ReplyToResponseBusHandler();
    const command = new ReplyToResponseBusCommand(
        event.payload.items,
        event.payload.shippingAddress,
        event.metadata.requestId
    );

    await handler.handle(command);
};
