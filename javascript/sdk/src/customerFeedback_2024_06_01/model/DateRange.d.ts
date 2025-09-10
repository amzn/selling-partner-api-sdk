/**
 * The DateRange model module.
 * @module customerFeedback_2024_06_01/model/DateRange
 * @version 2024-06-01
 */
export class DateRange {
    /**
     * Constructs a <code>DateRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DateRange} obj Optional instance to populate.
     * @return {DateRange} The populated <code>DateRange</code> instance.
     */
    static constructFromObject(data: any, obj: DateRange): DateRange;
    /**
     * Constructs a new <code>DateRange</code>.
     * A date range.
     * @alias module:customerFeedback_2024_06_01/model/DateRange
     * @class
     * @param startDate {Date} The start date of the date range in ISO-8601 date/time format.
     * @param endDate {Date} The end date of the date range in ISO-8601 date/time format.
     */
    constructor(startDate: Date, endDate: Date);
    startDate: Date;
    endDate: Date;
}
//# sourceMappingURL=DateRange.d.ts.map