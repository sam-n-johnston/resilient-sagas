import { Outbound } from '../../domain/Outbound';
import { CreateShippingLabelCommand } from './CreateShippingLabelCommand';
import { CSMService } from './CSMService';

export class CreateShippingLabelHandler {
    constructor(private readonly wmsService: CSMService) {}

    public async handle(command: CreateShippingLabelCommand): Promise<string> {
        const outbound = Outbound.create();

        await this.wmsService.createShippingLabel(outbound, command.requestId);

        return outbound.id.toString();
    }
}
