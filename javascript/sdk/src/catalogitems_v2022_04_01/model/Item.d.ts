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
     * @member {Array[]} classifications
     * @type {Array[]}
     */
    classifications: any[][];
    /**
     * An array of dimensions that are associated with the item in the Amazon catalog, grouped by `marketplaceId`.
     * @member {Array[]} dimensions
     * @type {Array[]}
     */
    dimensions: any[][];
    /**
     * Identifiers associated with the item in the Amazon catalog, such as UPC and EAN identifiers.
     * @member {Array[]} identifiers
     * @type {Array[]}
     */
    identifiers: any[][];
    /**
     * The images for an item in the Amazon catalog.
     * @member {Array[]} images
     * @type {Array[]}
     */
    images: any[][];
    /**
     * Product types that are associated with the Amazon catalog item.
     * @member {Array[]} productTypes
     * @type {Array[]}
     */
    productTypes: any[][];
    /**
     * Relationships grouped by `marketplaceId` for an Amazon catalog item (for example, variations).
     * @member {Array[]} relationships
     * @type {Array[]}
     */
    relationships: any[][];
    /**
     * Sales ranks of an Amazon catalog item.
     * @member {Array[]} salesRanks
     * @type {Array[]}
     */
    salesRanks: any[][];
    /**
     * Summaries of Amazon catalog items.
     * @member {Array[]} summaries
     * @type {Array[]}
     */
    summaries: any[][];
    /**
     * The vendor details that are associated with an Amazon catalog item. Vendor details are only available to vendors.
     * @member {Array[]} vendorDetails
     * @type {Array[]}
     */
    vendorDetails: any[][];
}
//# sourceMappingURL=Item.d.ts.map