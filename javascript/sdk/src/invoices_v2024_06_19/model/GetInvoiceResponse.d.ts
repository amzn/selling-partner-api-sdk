/**
 * The GetInvoiceResponse model module.
 * @module invoices_v2024_06_19/model/GetInvoiceResponse
 * @version 2024-06-19
 */
export class GetInvoiceResponse {
    /**
     * Constructs a <code>GetInvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetInvoiceResponse} obj Optional instance to populate.
     * @return {GetInvoiceResponse} The populated <code>GetInvoiceResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetInvoiceResponse): GetInvoiceResponse;
    /**
     * @member {Invoice} invoice
     * @type {Invoice}
     */
    invoice: Invoice;
}
import { Invoice } from './Invoice.js';
//# sourceMappingURL=GetInvoiceResponse.d.ts.map