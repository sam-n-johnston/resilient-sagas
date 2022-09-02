import { Outbound } from '../../domain/Outbound';
import { Bus } from './Bus';
import { ReplyToResponseBusCommand } from './ReplyToResponseBusCommand';

export class ReplyToResponseBusHandler {
    constructor(private readonly responseBus: Bus) {}

    public async handle(command: ReplyToResponseBusCommand): Promise<void> {
        const outbound = Outbound.create();

        await this.responseBus.reply(
            'Warehouse.OutboundCreated',
            command.requestId,
            outbound.id
        );
    }
}
