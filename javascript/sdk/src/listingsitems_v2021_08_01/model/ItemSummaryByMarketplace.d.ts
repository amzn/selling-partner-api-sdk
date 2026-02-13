/**
 * The ItemSummaryByMarketplace model module.
 * @module listingsitems_v2021_08_01/model/ItemSummaryByMarketplace
 * @version 2021-08-01
 */
export class ItemSummaryByMarketplace {
    /**
     * Constructs a <code>ItemSummaryByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemSummaryByMarketplace} obj Optional instance to populate.
     * @return {ItemSummaryByMarketplace} The populated <code>ItemSummaryByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemSummaryByMarketplace): ItemSummaryByMarketplace;
    /**
     * Constructs a new <code>ItemSummaryByMarketplace</code>.
     * Summary details of a listings item for an Amazon marketplace.
     * @alias module:listingsitems_v2021_08_01/model/ItemSummaryByMarketplace
     * @class
     * @param marketplaceId {String} A marketplace identifier. Identifies the Amazon marketplace for the listings item.
     * @param productType {String} The Amazon product type of the listings item.
     * @param status {String[]} Statuses that apply to the listings item.
     * @param createdDate {Date} The date the listings item was created in ISO 8601 format.
     * @param lastUpdatedDate {Date} The date the listings item was last updated in ISO 8601 format.
     */
    constructor(marketplaceId: string, productType: string, status: string[], createdDate: Date, lastUpdatedDate: Date);
    marketplaceId: string;
    productType: string;
    status: string[];
    createdDate: Date;
    lastUpdatedDate: Date;
    /**
     * Amazon Standard Identification Number (ASIN) of the listings item.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * Identifies the condition of the listings item.
     * @member {String} conditionType
     * @type {String}
     */
    conditionType: string;
    /**
     * The fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item.
     * @member {String} fnSku
     * @type {String}
     */
    fnSku: string;
    /**
     * The name or title associated with an Amazon catalog item.
     * @member {String} itemName
     * @type {String}
     */
    itemName: string;
    /**
     * @member {ItemImage} mainImage
     * @type {ItemImage}
     */
    mainImage: ItemImage;
}
export namespace ItemSummaryByMarketplace {
    namespace ConditionTypeEnum {
        let new_new: string;
        let new_open_box: string;
        let new_oem: string;
        let refurbished_refurbished: string;
        let used_like_new: string;
        let used_very_good: string;
        let used_good: string;
        let used_acceptable: string;
        let collectible_like_new: string;
        let collectible_very_good: string;
        let collectible_good: string;
        let collectible_acceptable: string;
        let club_club: string;
    }
    /**
     * *
     */
    type ConditionTypeEnum = string;
    namespace StatusEnum {
        let BUYABLE: string;
        let DISCOVERABLE: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
}
import { ItemImage } from './ItemImage.js';
//# sourceMappingURL=ItemSummaryByMarketplace.d.ts.map