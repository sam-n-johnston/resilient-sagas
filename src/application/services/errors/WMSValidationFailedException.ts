export class WMSValidationFailedException extends Error {
    public readonly name: string = 'WMSValidationFailedException';

    constructor(errorMsg: string, public readonly previousError?: any) {
        super(errorMsg);
    }
}
