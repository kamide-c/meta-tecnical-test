import { Address } from './address';
import { Document } from './document';

export interface Farmer {
    id: string;
    document: Document;
    name: string;
    address: Address;
}
