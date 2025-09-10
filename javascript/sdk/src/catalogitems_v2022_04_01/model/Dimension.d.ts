/**
 * The Dimension model module.
 * @module catalogitems_v2022_04_01/model/Dimension
 * @version 2022-04-01
 */
export class Dimension {
    /**
     * Constructs a <code>Dimension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Dimension} obj Optional instance to populate.
     * @return {Dimension} The populated <code>Dimension</code> instance.
     */
    static constructFromObject(data: any, obj: Dimension): Dimension;
    /**
     * Unit of measurement for the dimension value.
     * @member {String} unit
     * @type {String}
     */
    unit: string;
    /**
     * Numeric value of the dimension.
     * @member {Number} value
     * @type {Number}
     */
    value: number;
}
//# sourceMappingURL=Dimension.d.ts.map