import { InvalidOutboundException } from './errors/InvalidOutboundException';
import { OutboundId } from './OutboundId';

export class Outbound {
    private constructor(private readonly _id: OutboundId) {}

    public static create(): Outbound {
        // Random chance of failure
        const value = Math.random();

        if (value > 0.75) {
            throw new InvalidOutboundException('Outbound is not valid!');
        }

        return new Outbound(OutboundId.create('myId'));
    }

    get id() {
        return this._id;
    }
}
