/**
 * The TransactionsPayload model module.
 * @module finances_2024_06_19/model/TransactionsPayload
 * @version 2024-06-19
 */
export class TransactionsPayload {
    /**
     * Constructs a <code>TransactionsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionsPayload} obj Optional instance to populate.
     * @return {TransactionsPayload} The populated <code>TransactionsPayload</code> instance.
     */
    static constructFromObject(data: any, obj: TransactionsPayload): TransactionsPayload;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * Contains transactions within a given time period.
     * @member {[Transaction]} transactions
     * @type {[Transaction]}
     */
    transactions: [Transaction];
}
import { Transaction } from './Transaction.js';
//# sourceMappingURL=TransactionsPayload.d.ts.map