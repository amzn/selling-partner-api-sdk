/**
 * The HourMinute model module.
 * @module orders_v2026_01_01/model/HourMinute
 * @version 2026-01-01
 */
export class HourMinute {
    /**
     * Constructs a <code>HourMinute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {HourMinute} obj Optional instance to populate.
     * @return {HourMinute} The populated <code>HourMinute</code> instance.
     */
    static constructFromObject(data: any, obj: HourMinute): HourMinute;
    /**
     * The hour when the business opens or closes, in 24-hour format (0-23).
     * @member {Number} hour
     * @type {Number}
     */
    hour: number;
    /**
     * The minute when the business opens or closes.
     * @member {Number} minute
     * @type {Number}
     */
    minute: number;
}
//# sourceMappingURL=HourMinute.d.ts.map