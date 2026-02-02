/**
 * The GovtInvoiceDocumentResponse model module.
 * @module invoices_v2024_06_19/model/GovtInvoiceDocumentResponse
 * @version 2024-06-19
 */
export class GovtInvoiceDocumentResponse {
    /**
     * Constructs a <code>GovtInvoiceDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GovtInvoiceDocumentResponse} obj Optional instance to populate.
     * @return {GovtInvoiceDocumentResponse} The populated <code>GovtInvoiceDocumentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GovtInvoiceDocumentResponse): GovtInvoiceDocumentResponse;
    /**
     * @member {InvoiceDocument} invoiceDocument
     * @type {InvoiceDocument}
     */
    invoiceDocument: InvoiceDocument;
}
import { InvoiceDocument } from './InvoiceDocument.js';
//# sourceMappingURL=GovtInvoiceDocumentResponse.d.ts.map