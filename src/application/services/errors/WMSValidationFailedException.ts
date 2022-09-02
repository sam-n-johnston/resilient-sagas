export class WMSValidationFailedException extends Error {
    public readonly name: string = 'WMSValidationFailedException';

    constructor(public readonly previousError?: any) {
        super('The validation of the Outbound failed in the WMS');
    }
}
