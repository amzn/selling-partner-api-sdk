/**
 * The TimeRangeContext model module.
 * @module finances_2024_06_19/model/TimeRangeContext
 * @version 2024-06-19
 */
export class TimeRangeContext {
    /**
     * Constructs a <code>TimeRangeContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TimeRangeContext} obj Optional instance to populate.
     * @return {TimeRangeContext} The populated <code>TimeRangeContext</code> instance.
     */
    static constructFromObject(data: any, obj: TimeRangeContext): TimeRangeContext;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} startTime
     * @type {Date}
     */
    startTime: Date;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} endTime
     * @type {Date}
     */
    endTime: Date;
}
//# sourceMappingURL=TimeRangeContext.d.ts.map