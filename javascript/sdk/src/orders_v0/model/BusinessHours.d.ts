/**
 * The BusinessHours model module.
 * @module orders_v0/model/BusinessHours
 * @version v0
 */
export class BusinessHours {
    /**
     * Constructs a <code>BusinessHours</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BusinessHours} obj Optional instance to populate.
     * @return {BusinessHours} The populated <code>BusinessHours</code> instance.
     */
    static constructFromObject(data: any, obj: BusinessHours): BusinessHours;
    /**
     * Day of the week.
     * @member {String} dayOfWeek
     * @type {String}
     */
    dayOfWeek: string;
    /**
     * Time window during the day when the business is open.
     * @member {Array[]} openIntervals
     * @type {Array[]}
     */
    openIntervals: any[][];
}
export namespace BusinessHours {
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
//# sourceMappingURL=BusinessHours.d.ts.map