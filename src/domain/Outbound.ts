import { InvalidOutboundException } from './errors/InvalidOutboundException';

export class Outbound {
    private constructor(private readonly _id: string) {}

    public static create(): Outbound {
        // Random chance of failure
        const value = Math.random();

        if (value > 0.75) {
            throw new InvalidOutboundException('Outbound is not valid!');
        }

        return new Outbound('myId');
    }

    get id() {
        return this._id;
    }
}
