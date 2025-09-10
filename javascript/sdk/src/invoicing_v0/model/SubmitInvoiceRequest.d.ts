/**
 * The SubmitInvoiceRequest model module.
 * @module invoicing_v0/model/SubmitInvoiceRequest
 * @version v0
 */
export class SubmitInvoiceRequest {
    /**
     * Constructs a <code>SubmitInvoiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitInvoiceRequest} obj Optional instance to populate.
     * @return {SubmitInvoiceRequest} The populated <code>SubmitInvoiceRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitInvoiceRequest): SubmitInvoiceRequest;
    /**
     * Constructs a new <code>SubmitInvoiceRequest</code>.
     * The request schema for the submitInvoice operation.
     * @alias module:invoicing_v0/model/SubmitInvoiceRequest
     * @class
     * @param invoiceContent {Blob} Shipment invoice document content.
     * @param contentMD5Value {String} MD5 sum for validating the invoice data. For more information about calculating this value, see [Working with Content-MD5 Checksums](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_MD5.html).
     */
    constructor(invoiceContent: Blob, contentMD5Value: string);
    invoiceContent: Blob;
    contentMD5Value: string;
    /**
     * An Amazon marketplace identifier.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
}
//# sourceMappingURL=SubmitInvoiceRequest.d.ts.map