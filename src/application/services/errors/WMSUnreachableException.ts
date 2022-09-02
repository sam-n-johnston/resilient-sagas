export class WMSUnreachableException extends Error {
    public readonly name: string = 'WMSUnreachableException';

    constructor(errorMsg: string, public readonly previousError?: any) {
        super(errorMsg);
    }
}
