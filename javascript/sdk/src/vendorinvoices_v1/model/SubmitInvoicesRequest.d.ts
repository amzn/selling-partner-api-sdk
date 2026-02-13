/**
 * The SubmitInvoicesRequest model module.
 * @module vendorinvoices_v1/model/SubmitInvoicesRequest
 * @version v1
 */
export class SubmitInvoicesRequest {
    /**
     * Constructs a <code>SubmitInvoicesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitInvoicesRequest} obj Optional instance to populate.
     * @return {SubmitInvoicesRequest} The populated <code>SubmitInvoicesRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitInvoicesRequest): SubmitInvoicesRequest;
    /**
     * An array of Invoice objects representing the invoices or credit notes to be submitted.
     * @member {Invoice[]} invoices
     * @type {Invoice[]}
     */
    invoices: Invoice[];
}
import { Invoice } from './Invoice.js';
//# sourceMappingURL=SubmitInvoicesRequest.d.ts.map