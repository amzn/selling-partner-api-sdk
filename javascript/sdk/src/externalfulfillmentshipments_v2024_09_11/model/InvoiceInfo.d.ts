/**
 * The InvoiceInfo model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/InvoiceInfo
 * @version 2024-09-11
 */
export class InvoiceInfo {
    /**
     * Constructs a <code>InvoiceInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceInfo} obj Optional instance to populate.
     * @return {InvoiceInfo} The populated <code>InvoiceInfo</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceInfo): InvoiceInfo;
    /**
     * Constructs a new <code>InvoiceInfo</code>.
     * Information about the shipment&#39;s invoice.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/InvoiceInfo
     * @class
     * @param invoiceId {String} The unique ID of the invoice that corresponds to the shipment.
     * @param creationDateTime {String} A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     */
    constructor(invoiceId: string, creationDateTime: string);
    invoiceId: string;
    creationDateTime: string;
}
//# sourceMappingURL=InvoiceInfo.d.ts.map