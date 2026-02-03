/**
 * The ItemIdentifiersByMarketplace model module.
 * @module catalogitems_v2022_04_01/model/ItemIdentifiersByMarketplace
 * @version 2022-04-01
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
     * Constructs a new <code>ItemIdentifiersByMarketplace</code>.
     * Identifiers that are associated with the item in the Amazon catalog, grouped by &#x60;marketplaceId&#x60;.
     * @alias module:catalogitems_v2022_04_01/model/ItemIdentifiersByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).identifier.
     * @param identifiers {Array[]} Identifiers associated with the item in the Amazon catalog for the indicated `marketplaceId`.
     */
    constructor(marketplaceId: string, identifiers: any[][]);
    marketplaceId: string;
    identifiers: any[][];
}
//# sourceMappingURL=ItemIdentifiersByMarketplace.d.ts.map