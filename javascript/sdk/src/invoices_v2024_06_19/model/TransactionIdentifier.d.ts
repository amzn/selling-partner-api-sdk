/**
 * The TransactionIdentifier model module.
 * @module invoices_v2024_06_19/model/TransactionIdentifier
 * @version 2024-06-19
 */
export class TransactionIdentifier {
    /**
     * Constructs a <code>TransactionIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionIdentifier} obj Optional instance to populate.
     * @return {TransactionIdentifier} The populated <code>TransactionIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: TransactionIdentifier): TransactionIdentifier;
    /**
     * The transaction identifier name. Use the `getInvoicesAttributes` operation to check `transactionIdentifierName` options.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * The transaction identifier.
     * @member {String} id
     * @type {String}
     */
    id: string;
}
//# sourceMappingURL=TransactionIdentifier.d.ts.map