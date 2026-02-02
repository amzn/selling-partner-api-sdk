/**
 * The DateTimeRange model module.
 * @module orders_v2026_01_01/model/DateTimeRange
 * @version 2026-01-01
 */
export class DateTimeRange {
    /**
     * Constructs a <code>DateTimeRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DateTimeRange} obj Optional instance to populate.
     * @return {DateTimeRange} The populated <code>DateTimeRange</code> instance.
     */
    static constructFromObject(data: any, obj: DateTimeRange): DateTimeRange;
    /**
     * The beginning of the time period, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @member {Date} earliestDateTime
     * @type {Date}
     */
    earliestDateTime: Date;
    /**
     * The end of the time period, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @member {Date} latestDateTime
     * @type {Date}
     */
    latestDateTime: Date;
}
//# sourceMappingURL=DateTimeRange.d.ts.map