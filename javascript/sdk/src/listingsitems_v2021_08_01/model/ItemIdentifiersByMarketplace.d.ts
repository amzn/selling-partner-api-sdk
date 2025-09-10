/**
 * The ItemIdentifiersByMarketplace model module.
 * @module listingsitems_v2021_08_01/model/ItemIdentifiersByMarketplace
 * @version 2021-08-01
 */
export class ItemIdentifiersByMarketplace {
    /**
     * Constructs a <code>ItemIdentifiersByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemIdentifiersByMarketplace} obj Optional instance to populate.
     * @return {ItemIdentifiersByMarketplace} The populated <code>ItemIdentifiersByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemIdentifiersByMarketplace): ItemIdentifiersByMarketplace;
    /**
     * A marketplace identifier. Identifies the Amazon marketplace for the listings item.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * Amazon Standard Identification Number (ASIN) of the listings item.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
}
//# sourceMappingURL=ItemIdentifiersByMarketplace.d.ts.map