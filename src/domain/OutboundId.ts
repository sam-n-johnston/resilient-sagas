export class OutboundId {
    private constructor(private readonly _id: string) {}

    public static create(id: string): OutboundId {
        return new OutboundId(id);
    }

    toString() {
        return this._id;
    }
}
