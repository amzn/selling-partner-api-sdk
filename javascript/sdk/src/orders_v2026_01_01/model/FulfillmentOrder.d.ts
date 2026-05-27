/**
 * The FulfillmentOrder model module.
 * @module orders_v2026_01_01/model/FulfillmentOrder
 * @version 2026-01-01
 */
export class FulfillmentOrder {
    /**
     * Constructs a <code>FulfillmentOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentOrder} obj Optional instance to populate.
     * @return {FulfillmentOrder} The populated <code>FulfillmentOrder</code> instance.
     */
    static constructFromObject(data: Object, obj: FulfillmentOrder): FulfillmentOrder;
    /**
     * Constructs a new <code>FulfillmentOrder</code>.
     * Information about a fulfillment order associated with a customer order. A fulfillment order represents a unit of fulfillment created by Amazon for the order. **Note:** Only available for EasyShip orders at present.
     * @alias module:orders_v2026_01_01/model/FulfillmentOrder
     * @class
     * @param fulfillmentOrderId {String} The Fulfillment Order ID assigned by Amazon after fulfillment planning. This identifier is identical to the Shipment ID required by External Fulfillment APIs.
     */
    constructor(fulfillmentOrderId: string);
    fulfillmentOrderId: string;
}
//# sourceMappingURL=FulfillmentOrder.d.ts.map