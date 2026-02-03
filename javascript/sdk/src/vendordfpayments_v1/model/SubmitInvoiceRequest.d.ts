/**
 * The SubmitInvoiceRequest model module.
 * @module vendordfpayments_v1/model/SubmitInvoiceRequest
 * @version v1
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
     * An array of invoice details to be submitted.
     * @member {Array[]} invoices
     * @type {Array[]}
     */
    invoices: any[][];
}
//# sourceMappingURL=SubmitInvoiceRequest.d.ts.map