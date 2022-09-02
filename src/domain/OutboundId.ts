export class OutboundId {
    private constructor(private readonly _id: string) {}

    public static create(): OutboundId {
        return new OutboundId('myId');
    }

    get id() {
        return this._id;
    }
}
