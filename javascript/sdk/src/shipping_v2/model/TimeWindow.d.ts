/**
 * The TimeWindow model module.
 * @module shipping_v2/model/TimeWindow
 * @version v2
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
     * The start time of the time window.
     * @member {Date} start
     * @type {Date}
     */
    start: Date;
    /**
     * The end time of the time window.
     * @member {Date} end
     * @type {Date}
     */
    end: Date;
}
//# sourceMappingURL=TimeWindow.d.ts.map