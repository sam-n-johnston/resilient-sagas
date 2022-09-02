export class InvalidOutboundException extends Error {
    public readonly name: string = 'InvalidOutboundException';

    constructor(errorMsg: string, public readonly previousError?: any) {
        super(errorMsg);
    }
}
