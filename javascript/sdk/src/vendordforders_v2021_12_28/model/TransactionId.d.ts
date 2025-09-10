/**
 * The TransactionId model module.
 * @module vendordforders_v2021_12_28/model/TransactionId
 * @version 2021-12-28
 */
export class TransactionId {
    /**
     * Constructs a <code>TransactionId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionId} obj Optional instance to populate.
     * @return {TransactionId} The populated <code>TransactionId</code> instance.
     */
    static constructFromObject(data: any, obj: TransactionId): TransactionId;
    /**
     * GUID assigned by Amazon to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction.
     * @member {String} transactionId
     * @type {String}
     */
    transactionId: string;
}
//# sourceMappingURL=TransactionId.d.ts.map