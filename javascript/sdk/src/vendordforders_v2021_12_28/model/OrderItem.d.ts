/**
 * The OrderItem model module.
 * @module vendordforders_v2021_12_28/model/OrderItem
 * @version 2021-12-28
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
     * An item within an order
     * @alias module:vendordforders_v2021_12_28/model/OrderItem
     * @class
     * @param itemSequenceNumber {String} Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     * @param orderedQuantity {ItemQuantity}
     * @param netPrice {Money}
     */
    constructor(itemSequenceNumber: string, orderedQuantity: ItemQuantity, netPrice: Money);
    itemSequenceNumber: string;
    orderedQuantity: ItemQuantity;
    netPrice: Money;
    /**
     * Buyer's standard identification number (ASIN) of an item.
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
     * Title for the item.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * @member {ScheduledDeliveryShipment} scheduledDeliveryShipment
     * @type {ScheduledDeliveryShipment}
     */
    scheduledDeliveryShipment: ScheduledDeliveryShipment;
    /**
     * @member {GiftDetails} giftDetails
     * @type {GiftDetails}
     */
    giftDetails: GiftDetails;
    /**
     * @member {TaxItemDetails} taxDetails
     * @type {TaxItemDetails}
     */
    taxDetails: TaxItemDetails;
    /**
     * @member {Money} totalPrice
     * @type {Money}
     */
    totalPrice: Money;
    /**
     * @member {BuyerCustomizedInfoDetail} buyerCustomizedInfo
     * @type {BuyerCustomizedInfoDetail}
     */
    buyerCustomizedInfo: BuyerCustomizedInfoDetail;
}
import { ItemQuantity } from './ItemQuantity.js';
import { Money } from './Money.js';
import { ScheduledDeliveryShipment } from './ScheduledDeliveryShipment.js';
import { GiftDetails } from './GiftDetails.js';
import { TaxItemDetails } from './TaxItemDetails.js';
import { BuyerCustomizedInfoDetail } from './BuyerCustomizedInfoDetail.js';
//# sourceMappingURL=OrderItem.d.ts.map