/**
 * The BusinessHour model module.
 * @module orders_v2026_01_01/model/BusinessHour
 * @version 2026-01-01
 */
export class BusinessHour {
    /**
     * Constructs a <code>BusinessHour</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BusinessHour} obj Optional instance to populate.
     * @return {BusinessHour} The populated <code>BusinessHour</code> instance.
     */
    static constructFromObject(data: any, obj: BusinessHour): BusinessHour;
    /**
     * Specific day of the week for which operating hours are being defined.
     * @member {String} dayOfWeek
     * @type {String}
     */
    dayOfWeek: string;
    /**
     * Collection of time windows during which the location is available for deliveries on the specified day.
     * @member {[TimeWindow]} timeWindows
     * @type {[TimeWindow]}
     */
    timeWindows: [TimeWindow];
}
export namespace BusinessHour {
    namespace DayOfWeekEnum {
        let SUN: string;
        let MON: string;
        let TUE: string;
        let WED: string;
        let THU: string;
        let FRI: string;
        let SAT: string;
    }
    /**
     * *
     */
    type DayOfWeekEnum = string;
}
import { TimeWindow } from './TimeWindow.js';
//# sourceMappingURL=BusinessHour.d.ts.map