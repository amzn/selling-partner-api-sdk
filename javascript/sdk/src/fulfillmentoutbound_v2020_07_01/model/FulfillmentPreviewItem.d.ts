/**
 * The FulfillmentPreviewItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FulfillmentPreviewItem
 * @version 2020-07-01
 */
export class FulfillmentPreviewItem {
    /**
     * Constructs a <code>FulfillmentPreviewItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentPreviewItem} obj Optional instance to populate.
     * @return {FulfillmentPreviewItem} The populated <code>FulfillmentPreviewItem</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentPreviewItem): FulfillmentPreviewItem;
    /**
     * Constructs a new <code>FulfillmentPreviewItem</code>.
     * Item information for a shipment in a fulfillment order preview.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/FulfillmentPreviewItem
     * @class
     * @param sellerSku {String} The seller SKU of the item.
     * @param quantity {Number} The item quantity.
     * @param sellerFulfillmentOrderItemId {String} A fulfillment order item identifier that the seller created with a call to the `createFulfillmentOrder` operation.
     */
    constructor(sellerSku: string, quantity: number, sellerFulfillmentOrderItemId: string);
    sellerSku: string;
    quantity: number;
    sellerFulfillmentOrderItemId: string;
    /**
     * @member {Weight} estimatedShippingWeight
     * @type {Weight}
     */
    estimatedShippingWeight: Weight;
    /**
     * The method used to calculate the estimated shipping weight.
     * @member {String} shippingWeightCalculationMethod
     * @type {String}
     */
    shippingWeightCalculationMethod: string;
}
export namespace FulfillmentPreviewItem {
    namespace ShippingWeightCalculationMethodEnum {
        let Package: string;
        let Dimensional: string;
    }
    /**
     * *
     */
    type ShippingWeightCalculationMethodEnum = string;
}
import { Weight } from './Weight.js';
//# sourceMappingURL=FulfillmentPreviewItem.d.ts.map