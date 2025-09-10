/**
 * The IntegerWithUnits model module.
 * @module apluscontent_v2020_11_01/model/IntegerWithUnits
 * @version 2020-11-01
 */
export class IntegerWithUnits {
    /**
     * Constructs a <code>IntegerWithUnits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {IntegerWithUnits} obj Optional instance to populate.
     * @return {IntegerWithUnits} The populated <code>IntegerWithUnits</code> instance.
     */
    static constructFromObject(data: any, obj: IntegerWithUnits): IntegerWithUnits;
    /**
     * Constructs a new <code>IntegerWithUnits</code>.
     * A whole number dimension and its unit of measurement. For example, this can represent 100 pixels.
     * @alias module:apluscontent_v2020_11_01/model/IntegerWithUnits
     * @class
     * @param value {Number} The dimension value.
     * @param units {String} The unit of measurement.
     */
    constructor(value: number, units: string);
    value: number;
    units: string;
}
//# sourceMappingURL=IntegerWithUnits.d.ts.map