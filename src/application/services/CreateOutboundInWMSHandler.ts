import { Outbound } from '../../domain/Outbound';
import { CreateOutboundInWMSCommand } from './CreateOutboundInWMSCommand';
import { WMSService } from './WMSService';

export class CreateOutboundInWMSHandler {
    constructor(private readonly wmsService: WMSService) {}

    public async handle(command: CreateOutboundInWMSCommand): Promise<string> {
        const outbound = Outbound.create();

        await this.wmsService.createOutbound(outbound, command.requestId);

        return outbound.id.toString();
    }
}
