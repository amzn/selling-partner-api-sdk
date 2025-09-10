/**
 * The TransactionReference model module.
 * @module vendorshipments_v1/model/TransactionReference
 * @version v1
 */
export class TransactionReference {
    /**
     * Constructs a <code>TransactionReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionReference} obj Optional instance to populate.
     * @return {TransactionReference} The populated <code>TransactionReference</code> instance.
     */
    static constructFromObject(data: any, obj: TransactionReference): TransactionReference;
    /**
     * GUID assigned by Buyer to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction.
     * @member {String} transactionId
     * @type {String}
     */
    transactionId: string;
}
//# sourceMappingURL=TransactionReference.d.ts.map