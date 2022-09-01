export abstract class Command {
    protected constructor(public readonly requestId: string) {}
}
