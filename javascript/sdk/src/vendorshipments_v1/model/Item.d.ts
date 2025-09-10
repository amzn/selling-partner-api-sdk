/**
 * The Item model module.
 * @module vendorshipments_v1/model/Item
 * @version v1
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
     * Details of the item being shipped.
     * @alias module:vendorshipments_v1/model/Item
     * @class
     * @param itemSequenceNumber {String} Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
     * @param shippedQuantity {ItemQuantity}
     */
    constructor(itemSequenceNumber: string, shippedQuantity: ItemQuantity);
    itemSequenceNumber: string;
    shippedQuantity: ItemQuantity;
    /**
     * Buyer Standard Identification Number (ASIN) of an item.
     * @member {String} amazonProductIdentifier
     * @type {String}
     */
    amazonProductIdentifier: string;
    /**
     * The vendor selected product identification of the item. Should be the same as was sent in the purchase order.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
    /**
     * @member {ItemDetails} itemDetails
     * @type {ItemDetails}
     */
    itemDetails: ItemDetails;
}
import { ItemQuantity } from './ItemQuantity.js';
import { ItemDetails } from './ItemDetails.js';
//# sourceMappingURL=Item.d.ts.map