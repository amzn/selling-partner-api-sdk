/**
 * The OrderAcknowledgementItem model module.
 * @module vendororders_v1/model/OrderAcknowledgementItem
 * @version v1
 */
export class OrderAcknowledgementItem {
    /**
     * Constructs a <code>OrderAcknowledgementItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderAcknowledgementItem} obj Optional instance to populate.
     * @return {OrderAcknowledgementItem} The populated <code>OrderAcknowledgementItem</code> instance.
     */
    static constructFromObject(data: any, obj: OrderAcknowledgementItem): OrderAcknowledgementItem;
    /**
     * Constructs a new <code>OrderAcknowledgementItem</code>.
     * Details of the item being acknowledged.
     * @alias module:vendororders_v1/model/OrderAcknowledgementItem
     * @class
     * @param orderedQuantity {ItemQuantity}
     * @param itemAcknowledgements {Array[]} This is used to indicate acknowledged quantity.
     */
    constructor(orderedQuantity: ItemQuantity, itemAcknowledgements: any[][]);
    orderedQuantity: ItemQuantity;
    itemAcknowledgements: any[][];
    /**
     * Line item sequence number for the item.
     * @member {String} itemSequenceNumber
     * @type {String}
     */
    itemSequenceNumber: string;
    /**
     * Amazon Standard Identification Number (ASIN) of an item.
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
     * @member {Money} netCost
     * @type {Money}
     */
    netCost: Money;
    /**
     * @member {Money} listPrice
     * @type {Money}
     */
    listPrice: Money;
    /**
     * The discount multiplier that should be applied to the price if a vendor sells books with a list price. This is a multiplier factor to arrive at a final discounted price. A multiplier of .90 would be the factor if a 10% discount is given.
     * @member {String} discountMultiplier
     * @type {String}
     */
    discountMultiplier: string;
}
import { ItemQuantity } from './ItemQuantity.js';
import { Money } from './Money.js';
//# sourceMappingURL=OrderAcknowledgementItem.d.ts.map