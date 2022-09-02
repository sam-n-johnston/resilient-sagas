export class PubsubUnreachableException extends Error {
    public readonly name: string = 'PubsubUnreachableException';

    constructor(errorMsg: string, public readonly previousError?: any) {
        super(errorMsg);
    }
}
