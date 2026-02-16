/**
 * The Item model module.
 * @module listingsitems_v2021_08_01/model/Item
 * @version 2021-08-01
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
     * A listings item.
     * @alias module:listingsitems_v2021_08_01/model/Item
     * @class
     * @param sku {String} A selling partner provided identifier for an Amazon listing.
     */
    constructor(sku: string);
    sku: string;
    /**
     * Summary details of a listings item.
     * @member {ItemSummaryByMarketplace[]} summaries
     * @type {ItemSummaryByMarketplace[]}
     */
    summaries: ItemSummaryByMarketplace[];
    /**
     * A JSON object containing structured listings item attribute data keyed by attribute name.
     * @member {{String: Object}} attributes
     * @type {{String: Object}}
     */
    attributes: {
        String: any;
    };
    /**
     * The issues associated with the listings item.
     * @member {Issue[]} issues
     * @type {Issue[]}
     */
    issues: Issue[];
    /**
     * Offer details for the listings item.
     * @member {ItemOfferByMarketplace[]} offers
     * @type {ItemOfferByMarketplace[]}
     */
    offers: ItemOfferByMarketplace[];
    /**
     * The fulfillment availability for the listings item.
     * @member {FulfillmentAvailability[]} fulfillmentAvailability
     * @type {FulfillmentAvailability[]}
     */
    fulfillmentAvailability: FulfillmentAvailability[];
    /**
     * The vendor procurement information for the listings item.
     * @member {ItemProcurement[]} procurement
     * @type {ItemProcurement[]}
     */
    procurement: ItemProcurement[];
    /**
     * Relationships for a listing item, by marketplace (for example, variations).
     * @member {ItemRelationshipsByMarketplace[]} relationships
     * @type {ItemRelationshipsByMarketplace[]}
     */
    relationships: ItemRelationshipsByMarketplace[];
    /**
     * Product types for a listing item, by marketplace.
     * @member {ItemProductTypeByMarketplace[]} productTypes
     * @type {ItemProductTypeByMarketplace[]}
     */
    productTypes: ItemProductTypeByMarketplace[];
}
import { ItemSummaryByMarketplace } from './ItemSummaryByMarketplace.js';
import { Issue } from './Issue.js';
import { ItemOfferByMarketplace } from './ItemOfferByMarketplace.js';
import { FulfillmentAvailability } from './FulfillmentAvailability.js';
import { ItemProcurement } from './ItemProcurement.js';
import { ItemRelationshipsByMarketplace } from './ItemRelationshipsByMarketplace.js';
import { ItemProductTypeByMarketplace } from './ItemProductTypeByMarketplace.js';
//# sourceMappingURL=Item.d.ts.map