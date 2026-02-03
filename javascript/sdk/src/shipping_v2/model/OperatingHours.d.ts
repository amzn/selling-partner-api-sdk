/**
 * The OperatingHours model module.
 * @module shipping_v2/model/OperatingHours
 * @version v2
 */
export class OperatingHours {
    /**
     * Constructs a <code>OperatingHours</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OperatingHours} obj Optional instance to populate.
     * @return {OperatingHours} The populated <code>OperatingHours</code> instance.
     */
    static constructFromObject(data: any, obj: OperatingHours): OperatingHours;
    /**
     * @member {TimeOfDay} closingTime
     * @type {TimeOfDay}
     */
    closingTime: TimeOfDay;
    /**
     * @member {TimeOfDay} openingTime
     * @type {TimeOfDay}
     */
    openingTime: TimeOfDay;
    /**
     * midDayClosures operating hours array
     * @member {Array[]} midDayClosures
     * @type {Array[]}
     */
    midDayClosures: any[][];
}
import { TimeOfDay } from './TimeOfDay.js';
//# sourceMappingURL=OperatingHours.d.ts.map