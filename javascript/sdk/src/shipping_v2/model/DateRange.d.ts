/**
 * The DateRange model module.
 * @module shipping_v2/model/DateRange
 * @version v2
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
     * Start Date for query .
     * @member {String} startDate
     * @type {String}
     */
    startDate: string;
    /**
     * end date for query.
     * @member {String} endDate
     * @type {String}
     */
    endDate: string;
}
//# sourceMappingURL=DateRange.d.ts.map