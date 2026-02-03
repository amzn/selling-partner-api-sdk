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
     * @member {Array[]} monday
     * @type {Array[]}
     */
    monday: any[][];
    /**
     * A list of Operating Hours.
     * @member {Array[]} tuesday
     * @type {Array[]}
     */
    tuesday: any[][];
    /**
     * A list of Operating Hours.
     * @member {Array[]} wednesday
     * @type {Array[]}
     */
    wednesday: any[][];
    /**
     * A list of Operating Hours.
     * @member {Array[]} thursday
     * @type {Array[]}
     */
    thursday: any[][];
    /**
     * A list of Operating Hours.
     * @member {Array[]} friday
     * @type {Array[]}
     */
    friday: any[][];
    /**
     * A list of Operating Hours.
     * @member {Array[]} saturday
     * @type {Array[]}
     */
    saturday: any[][];
    /**
     * A list of Operating Hours.
     * @member {Array[]} sunday
     * @type {Array[]}
     */
    sunday: any[][];
}
//# sourceMappingURL=OperatingHoursByDay.d.ts.map