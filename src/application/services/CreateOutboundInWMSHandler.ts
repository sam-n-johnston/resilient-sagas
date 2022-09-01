import { CreateOutboundInWMSCommand } from './CreateOutboundInWMSCommand';

export class CreateOutboundInWMSHandler {
    constructor() {}

    public async handle(command: CreateOutboundInWMSCommand): Promise<string> {
        console.log('OK!');
        return '123';
    }
}
