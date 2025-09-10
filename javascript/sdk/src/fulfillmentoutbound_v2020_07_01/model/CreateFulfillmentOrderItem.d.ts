/**
 * The CreateFulfillmentOrderItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/CreateFulfillmentOrderItem
 * @version 2020-07-01
 */
export class CreateFulfillmentOrderItem {
    /**
     * Constructs a <code>CreateFulfillmentOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFulfillmentOrderItem} obj Optional instance to populate.
     * @return {CreateFulfillmentOrderItem} The populated <code>CreateFulfillmentOrderItem</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFulfillmentOrderItem): CreateFulfillmentOrderItem;
    /**
     * Constructs a new <code>CreateFulfillmentOrderItem</code>.
     * Item information for creating a fulfillment order.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/CreateFulfillmentOrderItem
     * @class
     * @param sellerSku {String} The seller SKU of the item.
     * @param sellerFulfillmentOrderItemId {String} A fulfillment order item identifier that the seller creates to track fulfillment order items. Used to disambiguate multiple fulfillment items that have the same `sellerSku` value. For example, the seller might assign different `sellerFulfillmentOrderItemId` values to two items in a fulfillment order that share the same `sellerSku` value but have different `giftMessage` values.
     * @param quantity {Number} The item quantity.
     */
    constructor(sellerSku: string, sellerFulfillmentOrderItemId: string, quantity: number);
    sellerSku: string;
    sellerFulfillmentOrderItemId: string;
    quantity: number;
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
     * @member {Money} perUnitDeclaredValue
     * @type {Money}
     */
    perUnitDeclaredValue: Money;
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
}
import { Money } from './Money.js';
//# sourceMappingURL=CreateFulfillmentOrderItem.d.ts.map