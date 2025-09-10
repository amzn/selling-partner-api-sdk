/**
 * The ItemDimensionsByMarketplace model module.
 * @module catalogitems_v2022_04_01/model/ItemDimensionsByMarketplace
 * @version 2022-04-01
 */
export class ItemDimensionsByMarketplace {
    /**
     * Constructs a <code>ItemDimensionsByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemDimensionsByMarketplace} obj Optional instance to populate.
     * @return {ItemDimensionsByMarketplace} The populated <code>ItemDimensionsByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemDimensionsByMarketplace): ItemDimensionsByMarketplace;
    /**
     * Constructs a new <code>ItemDimensionsByMarketplace</code>.
     * Dimensions that are associated with the item in the Amazon catalog for the indicated &#x60;marketplaceId&#x60;.
     * @alias module:catalogitems_v2022_04_01/model/ItemDimensionsByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     */
    constructor(marketplaceId: string);
    marketplaceId: string;
    /**
     * @member {Dimensions} item
     * @type {Dimensions}
     */
    item: Dimensions;
    /**
     * @member {Dimensions} _package
     * @type {Dimensions}
     */
    _package: Dimensions;
}
import { Dimensions } from './Dimensions.js';
//# sourceMappingURL=ItemDimensionsByMarketplace.d.ts.map