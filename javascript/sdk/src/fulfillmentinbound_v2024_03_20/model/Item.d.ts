/**
 * The Item model module.
 * @module fulfillmentinbound_v2024_03_20/model/Item
 * @version 2024-03-20
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
     * Information associated with a single SKU in the seller&#39;s catalog.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Item
     * @class
     * @param asin {String} The Amazon Standard Identification Number (ASIN) of the item.
     * @param fnsku {String} A unique identifier assigned by Amazon to products stored in and fulfilled from an Amazon fulfillment center.
     * @param labelOwner {String} Specifies who will label the items. Options include `AMAZON`, `SELLER`, and `NONE`. `AMAZON` is not an accepted value in the US marketplace.
     * @param msku {String} The merchant-defined SKU ID.
     * @param prepInstructions {PrepInstruction[]} Special preparations that are required for an item.
     * @param quantity {Number} The number of the specified MSKU.
     */
    constructor(asin: string, fnsku: string, labelOwner: string, msku: string, prepInstructions: PrepInstruction[], quantity: number);
    asin: string;
    fnsku: string;
    labelOwner: string;
    msku: string;
    prepInstructions: PrepInstruction[];
    quantity: number;
    /**
     * The expiration date of the MSKU. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern`YYYY-MM-DD`. The same MSKU with different expiration dates cannot go into the same box.
     * @member {String} expiration
     * @type {String}
     */
    expiration: string;
    /**
     * The manufacturing lot code.
     * @member {String} manufacturingLotCode
     * @type {String}
     */
    manufacturingLotCode: string;
}
import { PrepInstruction } from './PrepInstruction.js';
//# sourceMappingURL=Item.d.ts.map