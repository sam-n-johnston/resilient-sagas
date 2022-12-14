import { CreateOutboundInWMSCommand } from '../application/services/CreateOutboundInWMSCommand';
import { CreateOutboundInWMSHandler } from '../application/services/CreateOutboundInWMSHandler';
import { HTTPWMSService } from '../infrastructure/HTTPWMSService';
import {
    CreateOuboundInWMSInput,
    CreateOuboundInWMSOutput,
} from './dtos/CreateOuboundInWMSIO';

export const handler = async (
    input: CreateOuboundInWMSInput
): Promise<CreateOuboundInWMSOutput> => {
    const handler = new CreateOutboundInWMSHandler(new HTTPWMSService());
    const command = new CreateOutboundInWMSCommand(
        input.payload.items,
        input.payload.shippingAddress,
        input.metadata.requestId
    );

    const id = await handler.handle(command);

    return {
        ...input,
        payload: {
            ...input.payload,
            id,
        },
    };
};
