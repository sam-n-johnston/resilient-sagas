export class BusUnreachableException extends Error {
    public readonly name: string = 'BusUnreachableException';

    constructor(public readonly previousError?: any) {
        super('The Bus was unreachable within a reasonable delay');
    }
}
