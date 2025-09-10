/**
 * The UpdateFulfillmentOrderItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/UpdateFulfillmentOrderItem
 * @version 2020-07-01
 */
export class UpdateFulfillmentOrderItem {
    /**
     * Constructs a <code>UpdateFulfillmentOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateFulfillmentOrderItem} obj Optional instance to populate.
     * @return {UpdateFulfillmentOrderItem} The populated <code>UpdateFulfillmentOrderItem</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateFulfillmentOrderItem): UpdateFulfillmentOrderItem;
    /**
     * Constructs a new <code>UpdateFulfillmentOrderItem</code>.
     * Item information for updating a fulfillment order.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/UpdateFulfillmentOrderItem
     * @class
     * @param sellerFulfillmentOrderItemId {String} Identifies the fulfillment order item to update. Created with a previous call to the `createFulfillmentOrder` operation.
     * @param quantity {Number} The item quantity.
     */
    constructor(sellerFulfillmentOrderItemId: string, quantity: number);
    sellerFulfillmentOrderItemId: string;
    quantity: number;
    /**
     * The seller SKU of the item.
     * @member {String} sellerSku
     * @type {String}
     */
    sellerSku: string;
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
//# sourceMappingURL=UpdateFulfillmentOrderItem.d.ts.map