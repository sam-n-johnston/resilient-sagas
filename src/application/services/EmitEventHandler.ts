import { EmitEventCommand } from "./EmitEventCommand";

export class EmitEventHandler {
    constructor(
    ) {}

    public async handle(command: EmitEventCommand): Promise<void> {
        console.log('OK!')
    }
}
