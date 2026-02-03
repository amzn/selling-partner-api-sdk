/**
 * The GovernmentInvoiceStatusResponse model module.
 * @module invoices_v2024_06_19/model/GovernmentInvoiceStatusResponse
 * @version 2024-06-19
 */
export class GovernmentInvoiceStatusResponse {
    /**
     * Constructs a <code>GovernmentInvoiceStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GovernmentInvoiceStatusResponse} obj Optional instance to populate.
     * @return {GovernmentInvoiceStatusResponse} The populated <code>GovernmentInvoiceStatusResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GovernmentInvoiceStatusResponse): GovernmentInvoiceStatusResponse;
    /**
     * The errors that occurred during invoice creation.
     * @member {Array[]} invoiceErrors
     * @type {Array[]}
     */
    invoiceErrors: any[][];
    /**
     * Government Invoice ID of a successfully authorized invoice.
     * @member {String} invoiceExternalDocumentId
     * @type {String}
     */
    invoiceExternalDocumentId: string;
    /**
     * @member {GovernmentInvoiceCreationStatus} status
     * @type {GovernmentInvoiceCreationStatus}
     */
    status: GovernmentInvoiceCreationStatus;
}
import { GovernmentInvoiceCreationStatus } from './GovernmentInvoiceCreationStatus.js';
//# sourceMappingURL=GovernmentInvoiceStatusResponse.d.ts.map