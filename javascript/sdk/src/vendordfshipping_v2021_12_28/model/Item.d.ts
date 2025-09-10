/**
 * The Item model module.
 * @module vendordfshipping_v2021_12_28/model/Item
 * @version 2021-12-28
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
     * @alias module:vendordfshipping_v2021_12_28/model/Item
     * @class
     * @param itemSequenceNumber {Number} The sequence number of the item. The number must be the same as the order number of the item.
     * @param shippedQuantity {ItemQuantity}
     */
    constructor(itemSequenceNumber: number, shippedQuantity: ItemQuantity);
    itemSequenceNumber: number;
    shippedQuantity: ItemQuantity;
    /**
     * The buyer's Amazon Standard Identification Number (ASIN) of an item. Either `buyerProductIdentifier` or `vendorProductIdentifier` is required.
     * @member {String} buyerProductIdentifier
     * @type {String}
     */
    buyerProductIdentifier: string;
    /**
     * An item's product identifier, which the vendor selects. This identifier should be the same as the identifier, such as a SKU, in the purchase order.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
}
import { ItemQuantity } from './ItemQuantity.js';
//# sourceMappingURL=Item.d.ts.map