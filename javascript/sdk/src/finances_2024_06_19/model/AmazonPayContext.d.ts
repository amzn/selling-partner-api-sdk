/**
 * The AmazonPayContext model module.
 * @module finances_2024_06_19/model/AmazonPayContext
 * @version 2024-06-19
 */
export class AmazonPayContext {
    /**
     * Constructs a <code>AmazonPayContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AmazonPayContext} obj Optional instance to populate.
     * @return {AmazonPayContext} The populated <code>AmazonPayContext</code> instance.
     */
    static constructFromObject(data: any, obj: AmazonPayContext): AmazonPayContext;
    /**
     * The name of the store that is related to the transaction.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
    /**
     * The transaction's order type.
     * @member {String} orderType
     * @type {String}
     */
    orderType: string;
    /**
     * Channel details of related transaction.
     * @member {String} channel
     * @type {String}
     */
    channel: string;
}
//# sourceMappingURL=AmazonPayContext.d.ts.map