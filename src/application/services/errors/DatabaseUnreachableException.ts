export class DatabaseUnreachableException extends Error {
    public readonly name: string = 'DatabaseUnreachableException';

    constructor(errorMsg: string, public readonly previousError?: any) {
        super(errorMsg);
    }
}
