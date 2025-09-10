/**
 * The GetInvoicesDocumentResponse model module.
 * @module invoices_v2024_06_19/model/GetInvoicesDocumentResponse
 * @version 2024-06-19
 */
export class GetInvoicesDocumentResponse {
    /**
     * Constructs a <code>GetInvoicesDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetInvoicesDocumentResponse} obj Optional instance to populate.
     * @return {GetInvoicesDocumentResponse} The populated <code>GetInvoicesDocumentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetInvoicesDocumentResponse): GetInvoicesDocumentResponse;
    /**
     * @member {InvoicesDocument} invoicesDocument
     * @type {InvoicesDocument}
     */
    invoicesDocument: InvoicesDocument;
}
import { InvoicesDocument } from './InvoicesDocument.js';
//# sourceMappingURL=GetInvoicesDocumentResponse.d.ts.map