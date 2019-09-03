import { Address } from './address';
import { Document } from './document';

export class Farmer {
    id: string;
    document: Document;
    name: string;
    address: Address;

    constructor(values?: Object) {
        Object.assign(this, values);
    }
}
