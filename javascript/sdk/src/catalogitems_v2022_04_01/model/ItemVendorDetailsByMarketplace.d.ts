/**
 * The ItemVendorDetailsByMarketplace model module.
 * @module catalogitems_v2022_04_01/model/ItemVendorDetailsByMarketplace
 * @version 2022-04-01
 */
export class ItemVendorDetailsByMarketplace {
    /**
     * Constructs a <code>ItemVendorDetailsByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemVendorDetailsByMarketplace} obj Optional instance to populate.
     * @return {ItemVendorDetailsByMarketplace} The populated <code>ItemVendorDetailsByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemVendorDetailsByMarketplace): ItemVendorDetailsByMarketplace;
    /**
     * Constructs a new <code>ItemVendorDetailsByMarketplace</code>.
     * The vendor details that are associated with an Amazon catalog item for the specified &#x60;marketplaceId&#x60;.
     * @alias module:catalogitems_v2022_04_01/model/ItemVendorDetailsByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     */
    constructor(marketplaceId: string);
    marketplaceId: string;
    /**
     * The brand code that is associated with an Amazon catalog item.
     * @member {String} brandCode
     * @type {String}
     */
    brandCode: string;
    /**
     * The manufacturer code that is associated with an Amazon catalog item.
     * @member {String} manufacturerCode
     * @type {String}
     */
    manufacturerCode: string;
    /**
     * The parent vendor code of the manufacturer code.
     * @member {String} manufacturerCodeParent
     * @type {String}
     */
    manufacturerCodeParent: string;
    /**
     * @member {ItemVendorDetailsCategory} productCategory
     * @type {ItemVendorDetailsCategory}
     */
    productCategory: ItemVendorDetailsCategory;
    /**
     * The product group that is associated with an Amazon catalog item.
     * @member {String} productGroup
     * @type {String}
     */
    productGroup: string;
    /**
     * @member {ItemVendorDetailsCategory} productSubcategory
     * @type {ItemVendorDetailsCategory}
     */
    productSubcategory: ItemVendorDetailsCategory;
    /**
     * The replenishment category that is associated with an Amazon catalog item.
     * @member {String} replenishmentCategory
     * @type {String}
     */
    replenishmentCategory: string;
}
export namespace ItemVendorDetailsByMarketplace {
    namespace ReplenishmentCategoryEnum {
        let ALLOCATED: string;
        let BASIC_REPLENISHMENT: string;
        let IN_SEASON: string;
        let LIMITED_REPLENISHMENT: string;
        let MANUFACTURER_OUT_OF_STOCK: string;
        let NEW_PRODUCT: string;
        let NON_REPLENISHABLE: string;
        let NON_STOCKUPABLE: string;
        let OBSOLETE: string;
        let PLANNED_REPLENISHMENT: string;
    }
    /**
     * *
     */
    type ReplenishmentCategoryEnum = string;
}
import { ItemVendorDetailsCategory } from './ItemVendorDetailsCategory.js';
//# sourceMappingURL=ItemVendorDetailsByMarketplace.d.ts.map