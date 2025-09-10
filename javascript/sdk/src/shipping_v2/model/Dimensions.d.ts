/**
 * The Dimensions model module.
 * @module shipping_v2/model/Dimensions
 * @version v2
 */
export class Dimensions {
    /**
     * Constructs a <code>Dimensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Dimensions} obj Optional instance to populate.
     * @return {Dimensions} The populated <code>Dimensions</code> instance.
     */
    static constructFromObject(data: any, obj: Dimensions): Dimensions;
    /**
     * Constructs a new <code>Dimensions</code>.
     * A set of measurements for a three-dimensional object.
     * @alias module:shipping_v2/model/Dimensions
     * @class
     * @param length {Number} The length of the package.
     * @param width {Number} The width of the package.
     * @param height {Number} The height of the package.
     * @param unit {String} The unit of measurement.
     */
    constructor(length: number, width: number, height: number, unit: string);
    length: number;
    width: number;
    height: number;
    unit: string;
}
export namespace Dimensions {
    namespace UnitEnum {
        let INCH: string;
        let CENTIMETER: string;
    }
    /**
     * *
     */
    type UnitEnum = string;
}
//# sourceMappingURL=Dimensions.d.ts.map