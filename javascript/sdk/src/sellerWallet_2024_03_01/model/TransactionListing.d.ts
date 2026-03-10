/**
 * The TransactionListing model module.
 * @module sellerWallet_2024_03_01/model/TransactionListing
 * @version 2024-03-01
 */
export class TransactionListing {
    /**
     * Constructs a <code>TransactionListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionListing} obj Optional instance to populate.
     * @return {TransactionListing} The populated <code>TransactionListing</code> instance.
     */
    static constructFromObject(data: any, obj: TransactionListing): TransactionListing;
    /**
     * Constructs a new <code>TransactionListing</code>.
     * A list of transactions.
     * @alias module:sellerWallet_2024_03_01/model/TransactionListing
     * @class
     * @param transactions {Transaction[]} A list of transactions.
     */
    constructor(transactions: Transaction[]);
    transactions: Transaction[];
    /**
     * A token that you use to retrieve the next page of results. The response includes `nextPageToken` when the number of results exceeds 100. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextPageToken` is null. Note that this operation can return empty pages.
     * @member {String} nextPageToken
     * @type {String}
     */
    nextPageToken: string;
}
import { Transaction } from './Transaction.js';
//# sourceMappingURL=TransactionListing.d.ts.map