/**
 * The CreateReturnItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/CreateReturnItem
 * @version 2020-07-01
 */
export class CreateReturnItem {
    /**
     * Constructs a <code>CreateReturnItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateReturnItem} obj Optional instance to populate.
     * @return {CreateReturnItem} The populated <code>CreateReturnItem</code> instance.
     */
    static constructFromObject(data: any, obj: CreateReturnItem): CreateReturnItem;
    /**
     * Constructs a new <code>CreateReturnItem</code>.
     * An item that Amazon accepted for return.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/CreateReturnItem
     * @class
     * @param sellerReturnItemId {String} An identifier the seller assigns to the return item.
     * @param sellerFulfillmentOrderItemId {String} The identifier assigned to the item by the seller when the fulfillment order was created.
     * @param amazonShipmentId {String} The identifier for the shipment that is associated with the return item.
     * @param returnReasonCode {String} The return reason code assigned to the return item by the seller.
     */
    constructor(sellerReturnItemId: string, sellerFulfillmentOrderItemId: string, amazonShipmentId: string, returnReasonCode: string);
    sellerReturnItemId: string;
    sellerFulfillmentOrderItemId: string;
    amazonShipmentId: string;
    returnReasonCode: string;
    /**
     * An optional comment about the return item.
     * @member {String} returnComment
     * @type {String}
     */
    returnComment: string;
}
//# sourceMappingURL=CreateReturnItem.d.ts.map