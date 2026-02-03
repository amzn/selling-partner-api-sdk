/**
 * The SubmitInvoicesResponse model module.
 * @module vendorinvoices_v1/model/SubmitInvoicesResponse
 * @version v1
 */
export class SubmitInvoicesResponse {
    /**
     * Constructs a <code>SubmitInvoicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitInvoicesResponse} obj Optional instance to populate.
     * @return {SubmitInvoicesResponse} The populated <code>SubmitInvoicesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitInvoicesResponse): SubmitInvoicesResponse;
    /**
     * @member {TransactionId} payload
     * @type {TransactionId}
     */
    payload: TransactionId;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { TransactionId } from './TransactionId.js';
//# sourceMappingURL=SubmitInvoicesResponse.d.ts.map