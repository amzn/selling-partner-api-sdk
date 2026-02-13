/**
 * The ItemSummaryByMarketplace model module.
 * @module catalogitems_v2022_04_01/model/ItemSummaryByMarketplace
 * @version 2022-04-01
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
     * Information about an Amazon catalog item for the indicated &#x60;marketplaceId&#x60;.
     * @alias module:catalogitems_v2022_04_01/model/ItemSummaryByMarketplace
     * @class
     * @param marketplaceId {String} Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     */
    constructor(marketplaceId: string);
    marketplaceId: string;
    /**
     * When `true`, the Amazon catalog item is intended for an adult audience or is sexual in nature.
     * @member {Boolean} adultProduct
     * @type {Boolean}
     */
    adultProduct: boolean;
    /**
     * When `true`, the Amazon catalog item is autographed.
     * @member {Boolean} autographed
     * @type {Boolean}
     */
    autographed: boolean;
    /**
     * Name of the brand that is associated with the Amazon catalog item.
     * @member {String} brand
     * @type {String}
     */
    brand: string;
    /**
     * @member {ItemBrowseClassification} browseClassification
     * @type {ItemBrowseClassification}
     */
    browseClassification: ItemBrowseClassification;
    /**
     * The color that is associated with the Amazon catalog item.
     * @member {String} color
     * @type {String}
     */
    color: string;
    /**
     * Individual contributors to the creation of the item, such as the authors or actors.
     * @member {ItemContributor[]} contributors
     * @type {ItemContributor[]}
     */
    contributors: ItemContributor[];
    /**
     * Classification type that is associated with the Amazon catalog item.
     * @member {String} itemClassification
     * @type {String}
     */
    itemClassification: string;
    /**
     * The name that is associated with the Amazon catalog item.
     * @member {String} itemName
     * @type {String}
     */
    itemName: string;
    /**
     * The name of the manufacturer that is associated with the Amazon catalog item.
     * @member {String} manufacturer
     * @type {String}
     */
    manufacturer: string;
    /**
     * When true, the item is classified as memorabilia.
     * @member {Boolean} memorabilia
     * @type {Boolean}
     */
    memorabilia: boolean;
    /**
     * The model number that is associated with the Amazon catalog item.
     * @member {String} modelNumber
     * @type {String}
     */
    modelNumber: string;
    /**
     * The quantity of the Amazon catalog item within one package.
     * @member {Number} packageQuantity
     * @type {Number}
     */
    packageQuantity: number;
    /**
     * The part number that is associated with the Amazon catalog item.
     * @member {String} partNumber
     * @type {String}
     */
    partNumber: string;
    /**
     * The earliest date on which the Amazon catalog item can be shipped to customers.
     * @member {Date} releaseDate
     * @type {Date}
     */
    releaseDate: Date;
    /**
     * The name of the size of the Amazon catalog item.
     * @member {String} size
     * @type {String}
     */
    size: string;
    /**
     * The name of the style that is associated with the Amazon catalog item.
     * @member {String} style
     * @type {String}
     */
    style: string;
    /**
     * When true, the Amazon catalog item is eligible for trade-in.
     * @member {Boolean} tradeInEligible
     * @type {Boolean}
     */
    tradeInEligible: boolean;
    /**
     * The identifier of the website display group that is associated with the Amazon catalog item.
     * @member {String} websiteDisplayGroup
     * @type {String}
     */
    websiteDisplayGroup: string;
    /**
     * The display name of the website display group that is associated with the Amazon catalog item.
     * @member {String} websiteDisplayGroupName
     * @type {String}
     */
    websiteDisplayGroupName: string;
}
export namespace ItemSummaryByMarketplace {
    namespace ItemClassificationEnum {
        let BASE_PRODUCT: string;
        let OTHER: string;
        let PRODUCT_BUNDLE: string;
        let VARIATION_PARENT: string;
    }
    /**
     * *
     */
    type ItemClassificationEnum = string;
}
import { ItemBrowseClassification } from './ItemBrowseClassification.js';
import { ItemContributor } from './ItemContributor.js';
//# sourceMappingURL=ItemSummaryByMarketplace.d.ts.map