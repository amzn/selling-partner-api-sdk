/**
 * The InvoiceResponse model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/InvoiceResponse
 * @version 2024-09-11
 */
export class InvoiceResponse {
    /**
     * Constructs a <code>InvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceResponse} obj Optional instance to populate.
     * @return {InvoiceResponse} The populated <code>InvoiceResponse</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceResponse): InvoiceResponse;
    /**
     * Constructs a new <code>InvoiceResponse</code>.
     * The response of the &#x60;generateInvoice&#x60; operation.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/InvoiceResponse
     * @class
     * @param document {Document}
     */
    constructor(document: Document);
    document: Document;
}
import { Document } from './Document.js';
//# sourceMappingURL=InvoiceResponse.d.ts.map