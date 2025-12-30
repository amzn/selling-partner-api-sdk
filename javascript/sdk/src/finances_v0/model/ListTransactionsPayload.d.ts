/**
 * The ListTransactionsPayload model module.
 * @module finances_v0/model/ListTransactionsPayload
 * @version v0
 */
export class ListTransactionsPayload {
    /**
     * Constructs a <code>ListTransactionsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListTransactionsPayload} obj Optional instance to populate.
     * @return {ListTransactionsPayload} The populated <code>ListTransactionsPayload</code> instance.
     */
    static constructFromObject(data: any, obj: ListTransactionsPayload): ListTransactionsPayload;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * A list of transactions within a given time period.
     * @member {[Transaction]} transactions
     * @type {[Transaction]}
     */
    transactions: [Transaction];
}
import { Transaction } from './Transaction.js';
//# sourceMappingURL=ListTransactionsPayload.d.ts.map