/**
 * The ShipmentSchedule model module.
 * @module vendordfshipping_v2021_12_28/model/ShipmentSchedule
 * @version 2021-12-28
 */
export class ShipmentSchedule {
    /**
     * Constructs a <code>ShipmentSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentSchedule} obj Optional instance to populate.
     * @return {ShipmentSchedule} The populated <code>ShipmentSchedule</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentSchedule): ShipmentSchedule;
    /**
     * Date on which the shipment is expected to reach the customer delivery location. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
     * @member {Date} estimatedDeliveryDateTime
     * @type {Date}
     */
    estimatedDeliveryDateTime: Date;
    /**
     * The date and time at the start of the appointment window when the shipment is expected to be delivered. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
     * @member {Date} apptWindowStartDateTime
     * @type {Date}
     */
    apptWindowStartDateTime: Date;
    /**
     * The date and time at the end of the appointment window when the shipment is expected to be delivered. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
     * @member {Date} apptWindowEndDateTime
     * @type {Date}
     */
    apptWindowEndDateTime: Date;
}
//# sourceMappingURL=ShipmentSchedule.d.ts.map