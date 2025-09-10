/**
 * The ItemSalesRanksByMarketplace model module.
 * @module catalogitems_v2022_04_01/model/ItemSalesRanksByMarketplace
 * @version 2022-04-01
 */
export class ItemSalesRanksByMarketplace {
    /**
     * Constructs a <code>ItemSalesRanksByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemSalesRanksByMarketplace} obj Optional instance to populate.
     * @return {ItemSalesRanksByMarketplace} The populated <code>ItemSalesRanksByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemSalesRanksByMarketplace): ItemSalesRanksByMarketplace;
    /**
     * Constructs a new <code>ItemSalesRanksByMarketplace</code>.
     * Sales ranks of an Amazon catalog item, grouped by &#x60;marketplaceId&#x60;.
     * @alias module:catalogitems_v2022_04_01/model/ItemSalesRanksByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     */
    constructor(marketplaceId: string);
    marketplaceId: string;
    /**
     * Sales ranks of an Amazon catalog item for a `marketplaceId`, grouped by classification.
     * @member {[ItemClassificationSalesRank]} classificationRanks
     * @type {[ItemClassificationSalesRank]}
     */
    classificationRanks: [ItemClassificationSalesRank];
    /**
     * Sales ranks of an Amazon catalog item for a `marketplaceId`, grouped by website display group.
     * @member {[ItemDisplayGroupSalesRank]} displayGroupRanks
     * @type {[ItemDisplayGroupSalesRank]}
     */
    displayGroupRanks: [ItemDisplayGroupSalesRank];
}
import { ItemClassificationSalesRank } from './ItemClassificationSalesRank.js';
import { ItemDisplayGroupSalesRank } from './ItemDisplayGroupSalesRank.js';
//# sourceMappingURL=ItemSalesRanksByMarketplace.d.ts.map