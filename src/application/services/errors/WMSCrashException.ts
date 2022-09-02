export class WMSCrashException extends Error {
    public readonly name: string = 'WMSCrashException';

    constructor(errorMsg: string, public readonly previousError?: any) {
        super(errorMsg);
    }
}
