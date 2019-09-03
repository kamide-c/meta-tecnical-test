export class Document {
    documentNumber: string;
    documentType: string;

    constructor(values?: Object) {
        Object.assign(this, values);
    }
}
