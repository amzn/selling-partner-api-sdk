/**
 * The UnfulfillablePreviewItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/UnfulfillablePreviewItem
 * @version 2020-07-01
 */
export class UnfulfillablePreviewItem {
    /**
     * Constructs a <code>UnfulfillablePreviewItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UnfulfillablePreviewItem} obj Optional instance to populate.
     * @return {UnfulfillablePreviewItem} The populated <code>UnfulfillablePreviewItem</code> instance.
     */
    static constructFromObject(data: any, obj: UnfulfillablePreviewItem): UnfulfillablePreviewItem;
    /**
     * Constructs a new <code>UnfulfillablePreviewItem</code>.
     * Information about unfulfillable items in a fulfillment order preview.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/UnfulfillablePreviewItem
     * @class
     * @param sellerSku {String} The seller SKU of the item.
     * @param quantity {Number} The item quantity.
     * @param sellerFulfillmentOrderItemId {String} A fulfillment order item identifier created with a call to the `getFulfillmentPreview` operation.
     */
    constructor(sellerSku: string, quantity: number, sellerFulfillmentOrderItemId: string);
    sellerSku: string;
    quantity: number;
    sellerFulfillmentOrderItemId: string;
    /**
     * String list
     * @member {String[]} itemUnfulfillableReasons
     * @type {String[]}
     */
    itemUnfulfillableReasons: string[];
}
//# sourceMappingURL=UnfulfillablePreviewItem.d.ts.map