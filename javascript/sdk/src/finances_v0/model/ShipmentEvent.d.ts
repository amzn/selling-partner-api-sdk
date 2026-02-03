/**
 * The ShipmentEvent model module.
 * @module finances_v0/model/ShipmentEvent
 * @version v0
 */
export class ShipmentEvent {
    /**
     * Constructs a <code>ShipmentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentEvent} obj Optional instance to populate.
     * @return {ShipmentEvent} The populated <code>ShipmentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentEvent): ShipmentEvent;
    /**
     * An Amazon-defined identifier for an order.
     * @member {String} amazonOrderId
     * @type {String}
     */
    amazonOrderId: string;
    /**
     * A seller-defined identifier for an order.
     * @member {String} sellerOrderId
     * @type {String}
     */
    sellerOrderId: string;
    /**
     * The name of the marketplace where the event occurred.
     * @member {String} marketplaceName
     * @type {String}
     */
    marketplaceName: string;
    /**
     * The name of the store where the event occurred.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
    /**
     * A list of charge information on the seller's account.
     * @member {Array[]} orderChargeList
     * @type {Array[]}
     */
    orderChargeList: any[][];
    /**
     * A list of charge information on the seller's account.
     * @member {Array[]} orderChargeAdjustmentList
     * @type {Array[]}
     */
    orderChargeAdjustmentList: any[][];
    /**
     * A list of fee component information.
     * @member {Array[]} shipmentFeeList
     * @type {Array[]}
     */
    shipmentFeeList: any[][];
    /**
     * A list of fee component information.
     * @member {Array[]} shipmentFeeAdjustmentList
     * @type {Array[]}
     */
    shipmentFeeAdjustmentList: any[][];
    /**
     * A list of fee component information.
     * @member {Array[]} orderFeeList
     * @type {Array[]}
     */
    orderFeeList: any[][];
    /**
     * A list of fee component information.
     * @member {Array[]} orderFeeAdjustmentList
     * @type {Array[]}
     */
    orderFeeAdjustmentList: any[][];
    /**
     * A list of direct payment information.
     * @member {Array[]} directPaymentList
     * @type {Array[]}
     */
    directPaymentList: any[][];
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * A list of shipment items.
     * @member {Array[]} shipmentItemList
     * @type {Array[]}
     */
    shipmentItemList: any[][];
    /**
     * A list of shipment items.
     * @member {Array[]} shipmentItemAdjustmentList
     * @type {Array[]}
     */
    shipmentItemAdjustmentList: any[][];
}
//# sourceMappingURL=ShipmentEvent.d.ts.map