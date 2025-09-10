/**
 * The Item model module.
 * @module catalogitems_v2022_04_01/model/Item
 * @version 2022-04-01
 */
export class Item {
    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Item} obj Optional instance to populate.
     * @return {Item} The populated <code>Item</code> instance.
     */
    static constructFromObject(data: any, obj: Item): Item;
    /**
     * Constructs a new <code>Item</code>.
     * An item in the Amazon catalog.
     * @alias module:catalogitems_v2022_04_01/model/Item
     * @class
     * @param asin {String} The unique identifier of an item in the Amazon catalog.
     */
    constructor(asin: string);
    asin: string;
    /**
     * A JSON object containing structured item attribute data that is keyed by attribute name. Catalog item attributes conform to the related Amazon product type definitions that you can get from the [Product Type Definitions API](https://developer-docs.amazon.com/sp-api/reference/product-type-definitions-v2020-09-01).
     * @member {{String: Object}} attributes
     * @type {{String: Object}}
     */
    attributes: {
        String: any;
    };
    /**
     * An array of classifications (browse nodes) that is associated with the item in the Amazon catalog, grouped by `marketplaceId`.
     * @member {[ItemBrowseClassificationsByMarketplace]} classifications
     * @type {[ItemBrowseClassificationsByMarketplace]}
     */
    classifications: [ItemBrowseClassificationsByMarketplace];
    /**
     * An array of dimensions that are associated with the item in the Amazon catalog, grouped by `marketplaceId`.
     * @member {[ItemDimensionsByMarketplace]} dimensions
     * @type {[ItemDimensionsByMarketplace]}
     */
    dimensions: [ItemDimensionsByMarketplace];
    /**
     * Identifiers associated with the item in the Amazon catalog, such as UPC and EAN identifiers.
     * @member {[ItemIdentifiersByMarketplace]} identifiers
     * @type {[ItemIdentifiersByMarketplace]}
     */
    identifiers: [ItemIdentifiersByMarketplace];
    /**
     * The images for an item in the Amazon catalog.
     * @member {[ItemImagesByMarketplace]} images
     * @type {[ItemImagesByMarketplace]}
     */
    images: [ItemImagesByMarketplace];
    /**
     * Product types that are associated with the Amazon catalog item.
     * @member {[ItemProductTypeByMarketplace]} productTypes
     * @type {[ItemProductTypeByMarketplace]}
     */
    productTypes: [ItemProductTypeByMarketplace];
    /**
     * Relationships grouped by `marketplaceId` for an Amazon catalog item (for example, variations).
     * @member {[ItemRelationshipsByMarketplace]} relationships
     * @type {[ItemRelationshipsByMarketplace]}
     */
    relationships: [ItemRelationshipsByMarketplace];
    /**
     * Sales ranks of an Amazon catalog item.
     * @member {[ItemSalesRanksByMarketplace]} salesRanks
     * @type {[ItemSalesRanksByMarketplace]}
     */
    salesRanks: [ItemSalesRanksByMarketplace];
    /**
     * Summaries of Amazon catalog items.
     * @member {[ItemSummaryByMarketplace]} summaries
     * @type {[ItemSummaryByMarketplace]}
     */
    summaries: [ItemSummaryByMarketplace];
    /**
     * The vendor details that are associated with an Amazon catalog item. Vendor details are only available to vendors.
     * @member {[ItemVendorDetailsByMarketplace]} vendorDetails
     * @type {[ItemVendorDetailsByMarketplace]}
     */
    vendorDetails: [ItemVendorDetailsByMarketplace];
}
import { ItemBrowseClassificationsByMarketplace } from './ItemBrowseClassificationsByMarketplace.js';
import { ItemDimensionsByMarketplace } from './ItemDimensionsByMarketplace.js';
import { ItemIdentifiersByMarketplace } from './ItemIdentifiersByMarketplace.js';
import { ItemImagesByMarketplace } from './ItemImagesByMarketplace.js';
import { ItemProductTypeByMarketplace } from './ItemProductTypeByMarketplace.js';
import { ItemRelationshipsByMarketplace } from './ItemRelationshipsByMarketplace.js';
import { ItemSalesRanksByMarketplace } from './ItemSalesRanksByMarketplace.js';
import { ItemSummaryByMarketplace } from './ItemSummaryByMarketplace.js';
import { ItemVendorDetailsByMarketplace } from './ItemVendorDetailsByMarketplace.js';
//# sourceMappingURL=Item.d.ts.map