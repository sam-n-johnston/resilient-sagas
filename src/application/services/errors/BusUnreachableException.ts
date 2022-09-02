export class BusUnreachableException extends Error {
    public readonly name: string = 'BusUnreachableException';

    constructor(errorMsg: string, public readonly previousError?: any) {
        super(errorMsg);
    }
}
