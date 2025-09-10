/**
 * The FulfillmentOrderItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FulfillmentOrderItem
 * @version 2020-07-01
 */
export class FulfillmentOrderItem {
    /**
     * Constructs a <code>FulfillmentOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentOrderItem} obj Optional instance to populate.
     * @return {FulfillmentOrderItem} The populated <code>FulfillmentOrderItem</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentOrderItem): FulfillmentOrderItem;
    /**
     * Constructs a new <code>FulfillmentOrderItem</code>.
     * Item information for a fulfillment order.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/FulfillmentOrderItem
     * @class
     * @param sellerSku {String} The seller SKU of the item.
     * @param sellerFulfillmentOrderItemId {String} A fulfillment order item identifier submitted with a call to the `createFulfillmentOrder` operation.
     * @param quantity {Number} The item quantity.
     * @param cancelledQuantity {Number} The item quantity.
     * @param unfulfillableQuantity {Number} The item quantity.
     */
    constructor(sellerSku: string, sellerFulfillmentOrderItemId: string, quantity: number, cancelledQuantity: number, unfulfillableQuantity: number);
    sellerSku: string;
    sellerFulfillmentOrderItemId: string;
    quantity: number;
    cancelledQuantity: number;
    unfulfillableQuantity: number;
    /**
     * A message to the gift recipient, if applicable.
     * @member {String} giftMessage
     * @type {String}
     */
    giftMessage: string;
    /**
     * Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip.
     * @member {String} displayableComment
     * @type {String}
     */
    displayableComment: string;
    /**
     * Amazon's fulfillment network SKU of the item.
     * @member {String} fulfillmentNetworkSku
     * @type {String}
     */
    fulfillmentNetworkSku: string;
    /**
     * Indicates whether the item is sellable or unsellable.
     * @member {String} orderItemDisposition
     * @type {String}
     */
    orderItemDisposition: string;
    /**
     * Date timestamp
     * @member {Date} estimatedShipDate
     * @type {Date}
     */
    estimatedShipDate: Date;
    /**
     * Date timestamp
     * @member {Date} estimatedArrivalDate
     * @type {Date}
     */
    estimatedArrivalDate: Date;
    /**
     * @member {Money} perUnitPrice
     * @type {Money}
     */
    perUnitPrice: Money;
    /**
     * @member {Money} perUnitTax
     * @type {Money}
     */
    perUnitTax: Money;
    /**
     * @member {Money} perUnitDeclaredValue
     * @type {Money}
     */
    perUnitDeclaredValue: Money;
}
import { Money } from './Money.js';
//# sourceMappingURL=FulfillmentOrderItem.d.ts.map