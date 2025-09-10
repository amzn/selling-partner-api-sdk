/**
 * The ScheduledDeliveryShipment model module.
 * @module vendordforders_v2021_12_28/model/ScheduledDeliveryShipment
 * @version 2021-12-28
 */
export class ScheduledDeliveryShipment {
    /**
     * Constructs a <code>ScheduledDeliveryShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ScheduledDeliveryShipment} obj Optional instance to populate.
     * @return {ScheduledDeliveryShipment} The populated <code>ScheduledDeliveryShipment</code> instance.
     */
    static constructFromObject(data: any, obj: ScheduledDeliveryShipment): ScheduledDeliveryShipment;
    /**
     * Scheduled delivery service type.
     * @member {String} scheduledDeliveryServiceType
     * @type {String}
     */
    scheduledDeliveryServiceType: string;
    /**
     * Earliest nominated delivery date for the scheduled delivery.
     * @member {Date} earliestNominatedDeliveryDate
     * @type {Date}
     */
    earliestNominatedDeliveryDate: Date;
    /**
     * Latest nominated delivery date for the scheduled delivery.
     * @member {Date} latestNominatedDeliveryDate
     * @type {Date}
     */
    latestNominatedDeliveryDate: Date;
}
//# sourceMappingURL=ScheduledDeliveryShipment.d.ts.map