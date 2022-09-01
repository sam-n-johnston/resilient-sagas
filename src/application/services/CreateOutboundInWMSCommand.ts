import { Command } from './Command';

type Item = { sku: string; quantity: number };
type Address = {
    fullName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
};

export class CreateOutboundInWMSCommand extends Command {
    constructor(
        public readonly items: Item[],
        public readonly shippingAddress: Address,
        public readonly requestId: string
    ) {
        super(requestId);
    }
}
