/**
 * The ExceptionDate model module.
 * @module orders_v2026_01_01/model/ExceptionDate
 * @version 2026-01-01
 */
export class ExceptionDate {
    /**
     * Constructs a <code>ExceptionDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ExceptionDate} obj Optional instance to populate.
     * @return {ExceptionDate} The populated <code>ExceptionDate</code> instance.
     */
    static constructFromObject(data: any, obj: ExceptionDate): ExceptionDate;
    /**
     * Specific calendar date when normal operating hours do not apply. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format at day granularity.
     * @member {Date} exceptionDate
     * @type {Date}
     */
    exceptionDate: Date;
    /**
     * Operational status of the business on the specified exception date.
     * @member {String} exceptionDateType
     * @type {String}
     */
    exceptionDateType: string;
    /**
     * Alternative operating hours that apply specifically to this exception date.
     * @member {[TimeWindow]} timeWindows
     * @type {[TimeWindow]}
     */
    timeWindows: [TimeWindow];
}
export namespace ExceptionDate {
    namespace ExceptionDateTypeEnum {
        let CLOSED: string;
        let OPEN: string;
    }
    /**
     * *
     */
    type ExceptionDateTypeEnum = string;
}
import { TimeWindow } from './TimeWindow.js';
//# sourceMappingURL=ExceptionDate.d.ts.map