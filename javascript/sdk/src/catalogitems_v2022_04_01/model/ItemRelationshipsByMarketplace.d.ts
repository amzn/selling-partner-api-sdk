/**
 * The ItemRelationshipsByMarketplace model module.
 * @module catalogitems_v2022_04_01/model/ItemRelationshipsByMarketplace
 * @version 2022-04-01
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
     * Relationship details for the Amazon catalog item for the specified Amazon &#x60;marketplaceId&#x60;.
     * @alias module:catalogitems_v2022_04_01/model/ItemRelationshipsByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param relationships {[ItemRelationship]} Relationships for the item.
     */
    constructor(marketplaceId: string, relationships: [ItemRelationship]);
    marketplaceId: string;
    relationships: [ItemRelationship];
}
import { ItemRelationship } from './ItemRelationship.js';
//# sourceMappingURL=ItemRelationshipsByMarketplace.d.ts.map