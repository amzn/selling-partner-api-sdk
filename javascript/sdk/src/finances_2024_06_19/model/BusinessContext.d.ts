/**
 * The BusinessContext model module.
 * @module finances_2024_06_19/model/BusinessContext
 * @version 2024-06-19
 */
export class BusinessContext {
    /**
     * Constructs a <code>BusinessContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BusinessContext} obj Optional instance to populate.
     * @return {BusinessContext} The populated <code>BusinessContext</code> instance.
     */
    static constructFromObject(data: any, obj: BusinessContext): BusinessContext;
    /**
     * The store name associated with the transaction.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
}
export namespace BusinessContext {
    namespace StoreNameEnum {
        let AMAZON_HAUL: string;
    }
    /**
     * *
     */
    type StoreNameEnum = string;
}
//# sourceMappingURL=BusinessContext.d.ts.map