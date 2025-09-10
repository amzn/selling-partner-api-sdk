/**
 * The OperatingHoursByDay model module.
 * @module supplysources_v2020_07_01/model/OperatingHoursByDay
 * @version 2020-07-01
 */
export class OperatingHoursByDay {
    /**
     * Constructs a <code>OperatingHoursByDay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OperatingHoursByDay} obj Optional instance to populate.
     * @return {OperatingHoursByDay} The populated <code>OperatingHoursByDay</code> instance.
     */
    static constructFromObject(data: any, obj: OperatingHoursByDay): OperatingHoursByDay;
    /**
     * A list of Operating Hours.
     * @member {[OperatingHour]} monday
     * @type {[OperatingHour]}
     */
    monday: [OperatingHour];
    /**
     * A list of Operating Hours.
     * @member {[OperatingHour]} tuesday
     * @type {[OperatingHour]}
     */
    tuesday: [OperatingHour];
    /**
     * A list of Operating Hours.
     * @member {[OperatingHour]} wednesday
     * @type {[OperatingHour]}
     */
    wednesday: [OperatingHour];
    /**
     * A list of Operating Hours.
     * @member {[OperatingHour]} thursday
     * @type {[OperatingHour]}
     */
    thursday: [OperatingHour];
    /**
     * A list of Operating Hours.
     * @member {[OperatingHour]} friday
     * @type {[OperatingHour]}
     */
    friday: [OperatingHour];
    /**
     * A list of Operating Hours.
     * @member {[OperatingHour]} saturday
     * @type {[OperatingHour]}
     */
    saturday: [OperatingHour];
    /**
     * A list of Operating Hours.
     * @member {[OperatingHour]} sunday
     * @type {[OperatingHour]}
     */
    sunday: [OperatingHour];
}
import { OperatingHour } from './OperatingHour.js';
//# sourceMappingURL=OperatingHoursByDay.d.ts.map