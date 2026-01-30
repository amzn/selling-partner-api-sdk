/**
 * The InvoiceDocument model module.
 * @module invoices_v2024_06_19/model/InvoiceDocument
 * @version 2024-06-19
 */
export class InvoiceDocument {
    /**
     * Constructs a <code>InvoiceDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceDocument} obj Optional instance to populate.
     * @return {InvoiceDocument} The populated <code>InvoiceDocument</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceDocument): InvoiceDocument;
    /**
     * A pre-signed URL to download the invoice document in its original format. This URL expires after 30 seconds.
     * @member {String} invoiceDocumentUrl
     * @type {String}
     */
    invoiceDocumentUrl: string;
}
//# sourceMappingURL=InvoiceDocument.d.ts.map