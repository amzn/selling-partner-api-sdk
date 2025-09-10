/**
 * The InvoiceDetails model module.
 * @module shipping_v2/model/InvoiceDetails
 * @version v2
 */
export class InvoiceDetails {
    /**
     * Constructs a <code>InvoiceDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceDetails} obj Optional instance to populate.
     * @return {InvoiceDetails} The populated <code>InvoiceDetails</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceDetails): InvoiceDetails;
    /**
     * The invoice number of the item.
     * @member {String} invoiceNumber
     * @type {String}
     */
    invoiceNumber: string;
    /**
     * The invoice date of the item in ISO 8061 format.
     * @member {Date} invoiceDate
     * @type {Date}
     */
    invoiceDate: Date;
}
//# sourceMappingURL=InvoiceDetails.d.ts.map