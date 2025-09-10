/**
 * The ItemImagesByMarketplace model module.
 * @module catalogitems_v2022_04_01/model/ItemImagesByMarketplace
 * @version 2022-04-01
 */
export class ItemImagesByMarketplace {
    /**
     * Constructs a <code>ItemImagesByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemImagesByMarketplace} obj Optional instance to populate.
     * @return {ItemImagesByMarketplace} The populated <code>ItemImagesByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemImagesByMarketplace): ItemImagesByMarketplace;
    /**
     * Constructs a new <code>ItemImagesByMarketplace</code>.
     * Images for an item in the Amazon catalog, grouped by &#x60;marketplaceId&#x60;.
     * @alias module:catalogitems_v2022_04_01/model/ItemImagesByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param images {[ItemImage]} Images for an item in the Amazon catalog, grouped by `marketplaceId`.
     */
    constructor(marketplaceId: string, images: [ItemImage]);
    marketplaceId: string;
    images: [ItemImage];
}
import { ItemImage } from './ItemImage.js';
//# sourceMappingURL=ItemImagesByMarketplace.d.ts.map