import { EmitEventCommand } from '../application/services/EmitEventCommand';
import { EmitEventHandler } from '../application/services/EmitEventHandler';
import { SNSPubsubService } from '../infrastructure/SNSPubsubService';
import { EmitEventInput, EmitEventOutput } from './dtos/EmitEventIO';

export const handler = async (
    event: EmitEventInput
): Promise<EmitEventOutput> => {
    const handler = new EmitEventHandler(new SNSPubsubService());
    const command = new EmitEventCommand(
        event.payload.items,
        event.payload.shippingAddress,
        event.metadata.requestId
    );

    await handler.handle(command);
};
