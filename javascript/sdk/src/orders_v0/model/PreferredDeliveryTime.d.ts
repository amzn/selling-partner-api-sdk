/**
 * The PreferredDeliveryTime model module.
 * @module orders_v0/model/PreferredDeliveryTime
 * @version v0
 */
export class PreferredDeliveryTime {
    /**
     * Constructs a <code>PreferredDeliveryTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PreferredDeliveryTime} obj Optional instance to populate.
     * @return {PreferredDeliveryTime} The populated <code>PreferredDeliveryTime</code> instance.
     */
    static constructFromObject(data: any, obj: PreferredDeliveryTime): PreferredDeliveryTime;
    /**
     * Business hours when the business is open for deliveries.
     * @member {Array[]} businessHours
     * @type {Array[]}
     */
    businessHours: any[][];
    /**
     * Dates when the business is closed during the next 30 days.
     * @member {Array[]} exceptionDates
     * @type {Array[]}
     */
    exceptionDates: any[][];
}
//# sourceMappingURL=PreferredDeliveryTime.d.ts.map