/**
 * The OrderItemStatus model module.
 * @module vendororders_v1/model/OrderItemStatus
 * @version v1
 */
export class OrderItemStatus {
    /**
     * Constructs a <code>OrderItemStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemStatus} obj Optional instance to populate.
     * @return {OrderItemStatus} The populated <code>OrderItemStatus</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemStatus): OrderItemStatus;
    /**
     * Constructs a new <code>OrderItemStatus</code>.
     * Represents the current status of an order item, including acknowledgement and receiving details.
     * @alias module:vendororders_v1/model/OrderItemStatus
     * @class
     * @param itemSequenceNumber {String} Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     */
    constructor(itemSequenceNumber: string);
    itemSequenceNumber: string;
    /**
     * Buyer's Standard Identification Number (ASIN) of an item.
     * @member {String} buyerProductIdentifier
     * @type {String}
     */
    buyerProductIdentifier: string;
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
    /**
     * @member {OrderItemStatusOrderedQuantity} orderedQuantity
     * @type {OrderItemStatusOrderedQuantity}
     */
    orderedQuantity: OrderItemStatusOrderedQuantity;
    /**
     * @member {OrderItemStatusAcknowledgementStatus} acknowledgementStatus
     * @type {OrderItemStatusAcknowledgementStatus}
     */
    acknowledgementStatus: OrderItemStatusAcknowledgementStatus;
    /**
     * @member {OrderItemStatusReceivingStatus} receivingStatus
     * @type {OrderItemStatusReceivingStatus}
     */
    receivingStatus: OrderItemStatusReceivingStatus;
}
import { Money } from './Money.js';
import { OrderItemStatusOrderedQuantity } from './OrderItemStatusOrderedQuantity.js';
import { OrderItemStatusAcknowledgementStatus } from './OrderItemStatusAcknowledgementStatus.js';
import { OrderItemStatusReceivingStatus } from './OrderItemStatusReceivingStatus.js';
//# sourceMappingURL=OrderItemStatus.d.ts.map