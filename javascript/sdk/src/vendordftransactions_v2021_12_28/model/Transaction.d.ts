/**
 * The Transaction model module.
 * @module vendordftransactions_v2021_12_28/model/Transaction
 * @version 2021-12-28
 */
export class Transaction {
    /**
     * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Transaction} obj Optional instance to populate.
     * @return {Transaction} The populated <code>Transaction</code> instance.
     */
    static constructFromObject(data: any, obj: Transaction): Transaction;
    /**
     * Constructs a new <code>Transaction</code>.
     * The transaction status details.
     * @alias module:vendordftransactions_v2021_12_28/model/Transaction
     * @class
     * @param transactionId {String} The unique identifier sent in the 'transactionId' field in response to the post request of a specific transaction.
     * @param status {String} Current processing status of the transaction.
     */
    constructor(transactionId: string, status: string);
    transactionId: string;
    status: string;
    /**
     * @member {ErrorList} errors
     * @type {ErrorList}
     */
    errors: ErrorList;
}
export namespace Transaction {
    namespace StatusEnum {
        let Failure: string;
        let Processing: string;
        let Success: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
}
import { ErrorList } from './ErrorList.js';
//# sourceMappingURL=Transaction.d.ts.map