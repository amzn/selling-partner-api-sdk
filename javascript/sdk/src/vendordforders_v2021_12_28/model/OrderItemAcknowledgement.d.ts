/**
 * The OrderItemAcknowledgement model module.
 * @module vendordforders_v2021_12_28/model/OrderItemAcknowledgement
 * @version 2021-12-28
 */
export class OrderItemAcknowledgement {
    /**
     * Constructs a <code>OrderItemAcknowledgement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemAcknowledgement} obj Optional instance to populate.
     * @return {OrderItemAcknowledgement} The populated <code>OrderItemAcknowledgement</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemAcknowledgement): OrderItemAcknowledgement;
    /**
     * Constructs a new <code>OrderItemAcknowledgement</code>.
     * Details of an individual item within the order being acknowledged.
     * @alias module:vendordforders_v2021_12_28/model/OrderItemAcknowledgement
     * @class
     * @param itemSequenceNumber {String} Line item sequence number for the item.
     * @param acknowledgedQuantity {ItemQuantity}
     */
    constructor(itemSequenceNumber: string, acknowledgedQuantity: ItemQuantity);
    itemSequenceNumber: string;
    acknowledgedQuantity: ItemQuantity;
    /**
     * Buyer's standard identification number (ASIN) of an item.
     * @member {String} buyerProductIdentifier
     * @type {String}
     */
    buyerProductIdentifier: string;
    /**
     * The vendor selected product identification of the item. Should be the same as was provided in the purchase order.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
}
import { ItemQuantity } from './ItemQuantity.js';
//# sourceMappingURL=OrderItemAcknowledgement.d.ts.map