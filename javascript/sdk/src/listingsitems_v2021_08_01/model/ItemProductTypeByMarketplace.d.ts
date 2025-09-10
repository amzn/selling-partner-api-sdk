/**
 * The ItemProductTypeByMarketplace model module.
 * @module listingsitems_v2021_08_01/model/ItemProductTypeByMarketplace
 * @version 2021-08-01
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
     * Constructs a new <code>ItemProductTypeByMarketplace</code>.
     * Product types that are associated with the listing item for the specified marketplace.
     * @alias module:listingsitems_v2021_08_01/model/ItemProductTypeByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier.
     * @param productType {String} The name of the product type that is submitted by the Selling Partner.
     */
    constructor(marketplaceId: string, productType: string);
    marketplaceId: string;
    productType: string;
}
//# sourceMappingURL=ItemProductTypeByMarketplace.d.ts.map