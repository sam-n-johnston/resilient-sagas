export class DatabaseThrottlingException extends Error {
    public readonly name: string = 'DatabaseThrottlingException';

    constructor(errorMsg: string, public readonly previousError?: any) {
        super(errorMsg);
    }
}
