export class DatabaseUnreachableException extends Error {
    public readonly name: string = 'DatabaseUnreachableException';

    constructor(public readonly previousError?: any) {
        super('The database was unreachable within a reasonable delay');
    }
}
