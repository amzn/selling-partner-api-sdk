/**
 * The OrderItem model module.
 * @module vendororders_v1/model/OrderItem
 * @version v1
 */
export class OrderItem {
    /**
     * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItem} obj Optional instance to populate.
     * @return {OrderItem} The populated <code>OrderItem</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItem): OrderItem;
    /**
     * Constructs a new <code>OrderItem</code>.
     * Represents an individual item in an order, including item details, quantities, pricing, and backorder information.
     * @alias module:vendororders_v1/model/OrderItem
     * @class
     * @param itemSequenceNumber {String} Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     * @param orderedQuantity {ItemQuantity}
     * @param isBackOrderAllowed {Boolean} When true, we will accept backorder confirmations for this item.
     */
    constructor(itemSequenceNumber: string, orderedQuantity: ItemQuantity, isBackOrderAllowed: boolean);
    itemSequenceNumber: string;
    orderedQuantity: ItemQuantity;
    isBackOrderAllowed: boolean;
    /**
     * Amazon Standard Identification Number (ASIN) of an item.
     * @member {String} amazonProductIdentifier
     * @type {String}
     */
    amazonProductIdentifier: string;
    /**
     * The vendor selected product identification of the item.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
    /**
     * @member {Money} netCost
     * @type {Money}
     */
    netCost: Money;
    /**
     * @member {Money} listPrice
     * @type {Money}
     */
    listPrice: Money;
}
import { ItemQuantity } from './ItemQuantity.js';
import { Money } from './Money.js';
//# sourceMappingURL=OrderItem.d.ts.map