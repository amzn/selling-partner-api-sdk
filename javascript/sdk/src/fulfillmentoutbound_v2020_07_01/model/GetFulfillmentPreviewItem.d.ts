/**
 * The GetFulfillmentPreviewItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFulfillmentPreviewItem
 * @version 2020-07-01
 */
export class GetFulfillmentPreviewItem {
    /**
     * Constructs a <code>GetFulfillmentPreviewItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFulfillmentPreviewItem} obj Optional instance to populate.
     * @return {GetFulfillmentPreviewItem} The populated <code>GetFulfillmentPreviewItem</code> instance.
     */
    static constructFromObject(data: any, obj: GetFulfillmentPreviewItem): GetFulfillmentPreviewItem;
    /**
     * Constructs a new <code>GetFulfillmentPreviewItem</code>.
     * Item information for a fulfillment order preview.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetFulfillmentPreviewItem
     * @class
     * @param sellerSku {String} The seller SKU of the item.
     * @param quantity {Number} The item quantity.
     * @param sellerFulfillmentOrderItemId {String} A fulfillment order item identifier that the seller creates to track items in the fulfillment preview.
     */
    constructor(sellerSku: string, quantity: number, sellerFulfillmentOrderItemId: string);
    sellerSku: string;
    quantity: number;
    sellerFulfillmentOrderItemId: string;
    /**
     * @member {Money} perUnitDeclaredValue
     * @type {Money}
     */
    perUnitDeclaredValue: Money;
}
import { Money } from './Money.js';
//# sourceMappingURL=GetFulfillmentPreviewItem.d.ts.map