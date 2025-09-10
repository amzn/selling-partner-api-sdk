/**
 * The DateTimeRange model module.
 * @module services_v1/model/DateTimeRange
 * @version v1
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
     * Constructs a new <code>DateTimeRange</code>.
     * A range of time.
     * @alias module:services_v1/model/DateTimeRange
     * @class
     * @param startTime {Date} The beginning of the time range. Must be in UTC in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @param endTime {Date} The end of the time range. Must be in UTC in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     */
    constructor(startTime: Date, endTime: Date);
    startTime: Date;
    endTime: Date;
}
//# sourceMappingURL=DateTimeRange.d.ts.map