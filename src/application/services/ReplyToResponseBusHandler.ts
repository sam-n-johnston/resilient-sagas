import { ReplyToResponseBusCommand } from './ReplyToResponseBusCommand';

export class ReplyToResponseBusHandler {
    constructor() {}

    public async handle(command: ReplyToResponseBusCommand): Promise<void> {
        console.log('OK!');
    }
}
