/**
 * The ItemBrowseClassificationsByMarketplace model module.
 * @module catalogitems_v2022_04_01/model/ItemBrowseClassificationsByMarketplace
 * @version 2022-04-01
 */
export class ItemBrowseClassificationsByMarketplace {
    /**
     * Constructs a <code>ItemBrowseClassificationsByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemBrowseClassificationsByMarketplace} obj Optional instance to populate.
     * @return {ItemBrowseClassificationsByMarketplace} The populated <code>ItemBrowseClassificationsByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemBrowseClassificationsByMarketplace): ItemBrowseClassificationsByMarketplace;
    /**
     * Constructs a new <code>ItemBrowseClassificationsByMarketplace</code>.
     * Classifications (browse nodes) that are associated with the item in the Amazon catalog for the indicated &#x60;marketplaceId&#x60;.
     * @alias module:catalogitems_v2022_04_01/model/ItemBrowseClassificationsByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     */
    constructor(marketplaceId: string);
    marketplaceId: string;
    /**
     * Classifications (browse nodes) that are associated with the item in the Amazon catalog.
     * @member {[ItemBrowseClassification]} classifications
     * @type {[ItemBrowseClassification]}
     */
    classifications: [ItemBrowseClassification];
}
import { ItemBrowseClassification } from './ItemBrowseClassification.js';
//# sourceMappingURL=ItemBrowseClassificationsByMarketplace.d.ts.map