/**
 * The OperatingHour model module.
 * @module supplysources_v2020_07_01/model/OperatingHour
 * @version 2020-07-01
 */
export class OperatingHour {
    /**
     * Constructs a <code>OperatingHour</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OperatingHour} obj Optional instance to populate.
     * @return {OperatingHour} The populated <code>OperatingHour</code> instance.
     */
    static constructFromObject(data: any, obj: OperatingHour): OperatingHour;
    /**
     * The opening time, ISO 8601 formatted timestamp without date, HH:mm.
     * @member {String} startTime
     * @type {String}
     */
    startTime: string;
    /**
     * The closing time, ISO 8601 formatted timestamp without date, HH:mm.
     * @member {String} endTime
     * @type {String}
     */
    endTime: string;
}
//# sourceMappingURL=OperatingHour.d.ts.map