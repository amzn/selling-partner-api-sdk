/**
 * The DetailedShippingTimeType model module.
 * @module pricing_v0/model/DetailedShippingTimeType
 * @version v0
 */
export class DetailedShippingTimeType {
    /**
     * Constructs a <code>DetailedShippingTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DetailedShippingTimeType} obj Optional instance to populate.
     * @return {DetailedShippingTimeType} The populated <code>DetailedShippingTimeType</code> instance.
     */
    static constructFromObject(data: any, obj: DetailedShippingTimeType): DetailedShippingTimeType;
    /**
     * The minimum time, in hours, that the item will likely be shipped after the order has been placed.
     * @member {Number} minimumHours
     * @type {Number}
     */
    minimumHours: number;
    /**
     * The maximum time, in hours, that the item will likely be shipped after the order has been placed.
     * @member {Number} maximumHours
     * @type {Number}
     */
    maximumHours: number;
    /**
     * The date when the item will be available for shipping. Only displayed for items that are not currently available for shipping.
     * @member {String} availableDate
     * @type {String}
     */
    availableDate: string;
    /**
     * Indicates whether the item is available for shipping now, or on a known or an unknown date in the future. If known, the availableDate property indicates the date that the item will be available for shipping. Possible values: NOW, FUTURE_WITHOUT_DATE, FUTURE_WITH_DATE.
     * @member {String} availabilityType
     * @type {String}
     */
    availabilityType: string;
}
export namespace DetailedShippingTimeType {
    namespace AvailabilityTypeEnum {
        let NOW: string;
        let FUTURE_WITHOUT_DATE: string;
        let FUTURE_WITH_DATE: string;
    }
    /**
     * *
     */
    type AvailabilityTypeEnum = string;
}
//# sourceMappingURL=DetailedShippingTimeType.d.ts.map