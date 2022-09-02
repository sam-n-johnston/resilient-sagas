import { Outbound } from '../../domain/Outbound';
import { OutboundRepository } from '../../domain/PubsubService';
import { PersistOutboundCommand } from './PersistOutboundCommand';

export class PersistOutboundHandler {
    constructor(private readonly repository: OutboundRepository) {}

    public async handle(command: PersistOutboundCommand): Promise<void> {
        const outbound = Outbound.create();

        await this.repository.save(outbound, command.requestId);
    }
}
