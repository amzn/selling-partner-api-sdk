/**
 * The RemovalShipmentAdjustmentEvent model module.
 * @module finances_v0/model/RemovalShipmentAdjustmentEvent
 * @version v0
 */
export class RemovalShipmentAdjustmentEvent {
    /**
     * Constructs a <code>RemovalShipmentAdjustmentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RemovalShipmentAdjustmentEvent} obj Optional instance to populate.
     * @return {RemovalShipmentAdjustmentEvent} The populated <code>RemovalShipmentAdjustmentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: RemovalShipmentAdjustmentEvent): RemovalShipmentAdjustmentEvent;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * The unique identifier for the adjustment event.
     * @member {String} adjustmentEventId
     * @type {String}
     */
    adjustmentEventId: string;
    /**
     * The merchant removal orderId.
     * @member {String} merchantOrderId
     * @type {String}
     */
    merchantOrderId: string;
    /**
     * The orderId for shipping inventory.
     * @member {String} orderId
     * @type {String}
     */
    orderId: string;
    /**
     * The type of removal order.  Possible values:  * `WHOLESALE_LIQUIDATION`.
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
    /**
     * A comma-delimited list of `RemovalShipmentItemAdjustment` details for FBA inventory.
     * @member {Array[]} removalShipmentItemAdjustmentList
     * @type {Array[]}
     */
    removalShipmentItemAdjustmentList: any[][];
}
//# sourceMappingURL=RemovalShipmentAdjustmentEvent.d.ts.map