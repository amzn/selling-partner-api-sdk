/**
 * The TimeOfDay model module.
 * @module shipping_v2/model/TimeOfDay
 * @version v2
 */
export class TimeOfDay {
    /**
     * Constructs a <code>TimeOfDay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TimeOfDay} obj Optional instance to populate.
     * @return {TimeOfDay} The populated <code>TimeOfDay</code> instance.
     */
    static constructFromObject(data: any, obj: TimeOfDay): TimeOfDay;
    /**
     * Denotes hour of the day, used for defining opening or closing time of access points
     * @member {Number} hourOfDay
     * @type {Number}
     */
    hourOfDay: number;
    /**
     * Denotes minute of the hour, used for defining opening or closing time of access points
     * @member {Number} minuteOfHour
     * @type {Number}
     */
    minuteOfHour: number;
    /**
     * Denotes second of the minute, used for defining opening or closing time of access points
     * @member {Number} secondOfMinute
     * @type {Number}
     */
    secondOfMinute: number;
}
//# sourceMappingURL=TimeOfDay.d.ts.map