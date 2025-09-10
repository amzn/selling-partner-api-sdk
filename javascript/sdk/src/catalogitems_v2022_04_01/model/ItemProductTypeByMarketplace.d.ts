/**
 * The ItemProductTypeByMarketplace model module.
 * @module catalogitems_v2022_04_01/model/ItemProductTypeByMarketplace
 * @version 2022-04-01
 */
export class ItemProductTypeByMarketplace {
    /**
     * Constructs a <code>ItemProductTypeByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemProductTypeByMarketplace} obj Optional instance to populate.
     * @return {ItemProductTypeByMarketplace} The populated <code>ItemProductTypeByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemProductTypeByMarketplace): ItemProductTypeByMarketplace;
    /**
     * Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * Name of the product type that is associated with the Amazon catalog item.
     * @member {String} productType
     * @type {String}
     */
    productType: string;
}
//# sourceMappingURL=ItemProductTypeByMarketplace.d.ts.map