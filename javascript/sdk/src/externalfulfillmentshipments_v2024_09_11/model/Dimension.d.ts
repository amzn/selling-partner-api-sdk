/**
 * The Dimension model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Dimension
 * @version 2024-09-11
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
     * Constructs a new <code>Dimension</code>.
     * A dimension of a package.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Dimension
     * @class
     * @param value {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies.
     * @param dimensionUnit {String} The unit of measurement of the dimension.
     */
    constructor(value: string, dimensionUnit: string);
    value: string;
    dimensionUnit: string;
}
export namespace Dimension {
    namespace DimensionUnitEnum {
        let CM: string;
        let M: string;
    }
    /**
     * *
     */
    type DimensionUnitEnum = string;
}
//# sourceMappingURL=Dimension.d.ts.map