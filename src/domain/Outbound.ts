export class Outbound {
    private constructor(private readonly _id: string) {}

    public static create(): Outbound {
        return new Outbound('myId');
    }

    get id() {
        return this._id;
    }
}
