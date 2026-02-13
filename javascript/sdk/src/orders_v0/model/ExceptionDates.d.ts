/**
 * The ExceptionDates model module.
 * @module orders_v0/model/ExceptionDates
 * @version v0
 */
export class ExceptionDates {
    /**
     * Constructs a <code>ExceptionDates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ExceptionDates} obj Optional instance to populate.
     * @return {ExceptionDates} The populated <code>ExceptionDates</code> instance.
     */
    static constructFromObject(data: any, obj: ExceptionDates): ExceptionDates;
    /**
     * Date when the business is closed, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date format.
     * @member {String} exceptionDate
     * @type {String}
     */
    exceptionDate: string;
    /**
     * Boolean indicating if the business is closed or open on that date.
     * @member {Boolean} isOpen
     * @type {Boolean}
     */
    isOpen: boolean;
    /**
     * Time window during the day when the business is open.
     * @member {OpenInterval[]} openIntervals
     * @type {OpenInterval[]}
     */
    openIntervals: OpenInterval[];
}
import { OpenInterval } from './OpenInterval.js';
//# sourceMappingURL=ExceptionDates.d.ts.map