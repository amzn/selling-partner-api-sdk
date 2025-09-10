/**
 * The Weight model module.
 * @module shipping_v2/model/Weight
 * @version v2
 */
export class Weight {
    /**
     * Constructs a <code>Weight</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Weight} obj Optional instance to populate.
     * @return {Weight} The populated <code>Weight</code> instance.
     */
    static constructFromObject(data: any, obj: Weight): Weight;
    /**
     * Constructs a new <code>Weight</code>.
     * The weight in the units indicated.
     * @alias module:shipping_v2/model/Weight
     * @class
     * @param unit {String} The unit of measurement.
     * @param value {Number} The measurement value.
     */
    constructor(unit: string, value: number);
    unit: string;
    value: number;
}
export namespace Weight {
    namespace UnitEnum {
        let GRAM: string;
        let KILOGRAM: string;
        let OUNCE: string;
        let POUND: string;
    }
    /**
     * *
     */
    type UnitEnum = string;
}
//# sourceMappingURL=Weight.d.ts.map