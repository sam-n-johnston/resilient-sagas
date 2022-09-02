import { CreateShippingLabelCommand } from '../application/services/CreateShippingLabelCommand';
import { CreateShippingLabelHandler } from '../application/services/CreateShippingLabelHandler';
import { HTTPCMSService } from '../infrastructure/HTTPCMSService';
import {
    CreateShippingLabelInput,
    CreateShippingLabelOutput,
} from './dtos/CreateShippingLabelIO';

export const handler = async (
    input: CreateShippingLabelInput
): Promise<CreateShippingLabelOutput> => {
    const handler = new CreateShippingLabelHandler(new HTTPCMSService());
    const command = new CreateShippingLabelCommand(
        input.payload.items,
        input.payload.shippingAddress,
        input.metadata.requestId
    );

    await handler.handle(command);
};
