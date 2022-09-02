import { Outbound } from '../../domain/Outbound';
import { EmitEventCommand } from './EmitEventCommand';
import { PubsubService } from './PubsubService';

export class EmitEventHandler {
    constructor(private readonly pubsubService: PubsubService) {}

    public async handle(command: EmitEventCommand): Promise<void> {
        const outbound = Outbound.create();

        await this.pubsubService.emit(outbound, command.requestId);
    }
}
