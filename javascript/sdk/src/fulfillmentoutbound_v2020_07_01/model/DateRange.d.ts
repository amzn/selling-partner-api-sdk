/**
 * The DateRange model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DateRange
 * @version 2020-07-01
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
     * The time range within which something (for example, a delivery) will occur.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/DateRange
     * @class
     * @param earliest {Date} Date timestamp
     * @param latest {Date} Date timestamp
     */
    constructor(earliest: Date, latest: Date);
    earliest: Date;
    latest: Date;
}
//# sourceMappingURL=DateRange.d.ts.map