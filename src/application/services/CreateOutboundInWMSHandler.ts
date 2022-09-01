import { CreateOutboundInWMSCommand } from "./CreateOutboundInWMSCommand";

export class CreateOutboundInWMSHandler {
    constructor(
    ) {}

    public async handle(command: CreateOutboundInWMSCommand): Promise<void> {
        console.log('OK!')
    }
}
