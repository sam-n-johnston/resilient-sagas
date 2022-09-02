export class DatabaseThrottlingException extends Error {
    public readonly name: string = 'DatabaseThrottlingException';

    constructor(public readonly previousError?: any) {
        super('The database has throttled the request');
    }
}
