/**
 * The Recurrence model module.
 * @module services_v1/model/Recurrence
 * @version v1
 */
export class Recurrence {
    /**
     * Constructs a <code>Recurrence</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Recurrence} obj Optional instance to populate.
     * @return {Recurrence} The populated <code>Recurrence</code> instance.
     */
    static constructFromObject(data: any, obj: Recurrence): Recurrence;
    /**
     * Constructs a new <code>Recurrence</code>.
     * Repeated occurrence of an event in a time range.
     * @alias module:services_v1/model/Recurrence
     * @class
     * @param endTime {Date} End time of the recurrence.
     */
    constructor(endTime: Date);
    endTime: Date;
    /**
     * Days of the week when recurrence is valid. If the schedule is valid every Monday, input will only contain `MONDAY` in the list.
     * @member {DayOfWeek[]} daysOfWeek
     * @type {DayOfWeek[]}
     */
    daysOfWeek: DayOfWeek[];
    /**
     * Days of the month when recurrence is valid.
     * @member {Number[]} daysOfMonth
     * @type {Number[]}
     */
    daysOfMonth: number[];
}
import { DayOfWeek } from './DayOfWeek.js';
//# sourceMappingURL=Recurrence.d.ts.map