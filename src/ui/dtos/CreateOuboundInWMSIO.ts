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

export type CreateOuboundInWMSInput = {
    payload: {
        items: Item[];
        shippingAddress: Address;
    };
    metadata: {
        requestId: string;
    };
};

export type CreateOuboundInWMSOutput = {
    payload: {
        id: string;
        items: Item[];
        shippingAddress: Address;
    };
    metadata: {
        requestId: string;
    };
};
