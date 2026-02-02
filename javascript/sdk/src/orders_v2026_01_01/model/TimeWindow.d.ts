/**
 * The TimeWindow model module.
 * @module orders_v2026_01_01/model/TimeWindow
 * @version 2026-01-01
 */
export class TimeWindow {
    /**
     * Constructs a <code>TimeWindow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TimeWindow} obj Optional instance to populate.
     * @return {TimeWindow} The populated <code>TimeWindow</code> instance.
     */
    static constructFromObject(data: any, obj: TimeWindow): TimeWindow;
    /**
     * @member {HourMinute} startTime
     * @type {HourMinute}
     */
    startTime: HourMinute;
    /**
     * @member {HourMinute} endTime
     * @type {HourMinute}
     */
    endTime: HourMinute;
}
import { HourMinute } from './HourMinute.js';
//# sourceMappingURL=TimeWindow.d.ts.map