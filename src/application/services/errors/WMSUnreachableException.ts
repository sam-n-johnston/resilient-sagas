export class WMSUnreachableException extends Error {
    public readonly name: string = 'WMSUnreachableException';

    constructor(public readonly previousError?: any) {
        super('The WMS was unreachable within a reasonable delay');
    }
}
