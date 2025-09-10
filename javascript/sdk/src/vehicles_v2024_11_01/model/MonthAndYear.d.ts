/**
 * The MonthAndYear model module.
 * @module vehicles_v2024_11_01/model/MonthAndYear
 * @version 2024-11-01
 */
export class MonthAndYear {
    /**
     * Constructs a <code>MonthAndYear</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MonthAndYear} obj Optional instance to populate.
     * @return {MonthAndYear} The populated <code>MonthAndYear</code> instance.
     */
    static constructFromObject(data: any, obj: MonthAndYear): MonthAndYear;
    /**
     * Year in YYYY format
     * @member {Number} year
     * @type {Number}
     */
    year: number;
    /**
     * Month in MM format
     * @member {Number} month
     * @type {Number}
     */
    month: number;
}
//# sourceMappingURL=MonthAndYear.d.ts.map