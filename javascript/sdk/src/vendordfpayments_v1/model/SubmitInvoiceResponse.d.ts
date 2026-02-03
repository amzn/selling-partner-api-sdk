/**
 * The SubmitInvoiceResponse model module.
 * @module vendordfpayments_v1/model/SubmitInvoiceResponse
 * @version v1
 */
export class SubmitInvoiceResponse {
    /**
     * Constructs a <code>SubmitInvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitInvoiceResponse} obj Optional instance to populate.
     * @return {SubmitInvoiceResponse} The populated <code>SubmitInvoiceResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitInvoiceResponse): SubmitInvoiceResponse;
    /**
     * @member {TransactionReference} payload
     * @type {TransactionReference}
     */
    payload: TransactionReference;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { TransactionReference } from './TransactionReference.js';
//# sourceMappingURL=SubmitInvoiceResponse.d.ts.map