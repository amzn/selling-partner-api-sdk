/**
 * The GetTransactionResponse model module.
 * @module vendortransactionstatus_v1/model/GetTransactionResponse
 * @version v1
 */
export class GetTransactionResponse {
    /**
     * Constructs a <code>GetTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetTransactionResponse} obj Optional instance to populate.
     * @return {GetTransactionResponse} The populated <code>GetTransactionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetTransactionResponse): GetTransactionResponse;
    /**
     * @member {TransactionStatus} payload
     * @type {TransactionStatus}
     */
    payload: TransactionStatus;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { TransactionStatus } from './TransactionStatus.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetTransactionResponse.d.ts.map