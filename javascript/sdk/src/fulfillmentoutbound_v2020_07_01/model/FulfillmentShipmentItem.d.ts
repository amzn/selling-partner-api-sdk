/**
 * The FulfillmentShipmentItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FulfillmentShipmentItem
 * @version 2020-07-01
 */
export class FulfillmentShipmentItem {
    /**
     * Constructs a <code>FulfillmentShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentShipmentItem} obj Optional instance to populate.
     * @return {FulfillmentShipmentItem} The populated <code>FulfillmentShipmentItem</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentShipmentItem): FulfillmentShipmentItem;
    /**
     * Constructs a new <code>FulfillmentShipmentItem</code>.
     * Item information for a shipment in a fulfillment order.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/FulfillmentShipmentItem
     * @class
     * @param sellerSku {String} The seller SKU of the item.
     * @param sellerFulfillmentOrderItemId {String} The fulfillment order item identifier that the seller created and submitted with a call to the `createFulfillmentOrder` operation.
     * @param quantity {Number} The item quantity.
     */
    constructor(sellerSku: string, sellerFulfillmentOrderItemId: string, quantity: number);
    sellerSku: string;
    sellerFulfillmentOrderItemId: string;
    quantity: number;
    /**
     * An identifier for the package that contains the item quantity.
     * @member {Number} packageNumber
     * @type {Number}
     */
    packageNumber: number;
    /**
     * The serial number of the shipped item.
     * @member {String} serialNumber
     * @type {String}
     */
    serialNumber: string;
    /**
     * String list
     * @member {[String]} manufacturerLotCodes
     * @type {[String]}
     */
    manufacturerLotCodes: [string];
}
//# sourceMappingURL=FulfillmentShipmentItem.d.ts.map