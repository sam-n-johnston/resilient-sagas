export class PubsubUnreachableException extends Error {
    public readonly name: string = 'PubsubUnreachableException';

    constructor(public readonly previousError?: any) {
        super('The Pubsub service was unreachable within a reasonable delay');
    }
}
