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
     * The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * A list of transactions within the specified time period.
     * @member {Array[]} transactions
     * @type {Array[]}
     */
    transactions: any[][];
}
//# sourceMappingURL=TransactionsPayload.d.ts.map