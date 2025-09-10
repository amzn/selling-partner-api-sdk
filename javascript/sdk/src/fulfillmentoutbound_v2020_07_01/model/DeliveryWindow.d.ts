/**
 * The DeliveryWindow model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DeliveryWindow
 * @version 2020-07-01
 */
export class DeliveryWindow {
    /**
     * Constructs a <code>DeliveryWindow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryWindow} obj Optional instance to populate.
     * @return {DeliveryWindow} The populated <code>DeliveryWindow</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryWindow): DeliveryWindow;
    /**
     * Constructs a new <code>DeliveryWindow</code>.
     * The time range within which a Scheduled Delivery fulfillment order should be delivered. This is only available in the JP marketplace.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/DeliveryWindow
     * @class
     * @param startDate {Date} Date timestamp
     * @param endDate {Date} Date timestamp
     */
    constructor(startDate: Date, endDate: Date);
    startDate: Date;
    endDate: Date;
}
//# sourceMappingURL=DeliveryWindow.d.ts.map