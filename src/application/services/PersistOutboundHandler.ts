import { PersistOutboundCommand } from './PersistOutboundCommand';

export class PersistOutboundHandler {
    constructor() {}

    public async handle(command: PersistOutboundCommand): Promise<void> {
        console.log('OK!');
    }
}
