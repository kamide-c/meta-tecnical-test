export class Address {
    street: string;
    state: string;
    address: string;
    country: string;

    constructor(values?: Object) {
        Object.assign(this, values);
    }
}
