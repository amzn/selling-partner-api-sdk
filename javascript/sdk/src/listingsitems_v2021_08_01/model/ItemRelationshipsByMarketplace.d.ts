/**
 * The ItemRelationshipsByMarketplace model module.
 * @module listingsitems_v2021_08_01/model/ItemRelationshipsByMarketplace
 * @version 2021-08-01
 */
export class ItemRelationshipsByMarketplace {
    /**
     * Constructs a <code>ItemRelationshipsByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemRelationshipsByMarketplace} obj Optional instance to populate.
     * @return {ItemRelationshipsByMarketplace} The populated <code>ItemRelationshipsByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemRelationshipsByMarketplace): ItemRelationshipsByMarketplace;
    /**
     * Constructs a new <code>ItemRelationshipsByMarketplace</code>.
     * Relationship details for the listing item in the specified marketplace.
     * @alias module:listingsitems_v2021_08_01/model/ItemRelationshipsByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier.
     * @param relationships {Array[]} Relationships for the listing item.
     */
    constructor(marketplaceId: string, relationships: any[][]);
    marketplaceId: string;
    relationships: any[][];
}
//# sourceMappingURL=ItemRelationshipsByMarketplace.d.ts.map