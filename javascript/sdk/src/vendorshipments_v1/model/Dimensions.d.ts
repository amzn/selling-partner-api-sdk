/**
 * The Dimensions model module.
 * @module vendorshipments_v1/model/Dimensions
 * @version v1
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
     * Physical dimensional measurements of a container.
     * @alias module:vendorshipments_v1/model/Dimensions
     * @class
     * @param length {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @param width {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @param height {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @param unitOfMeasure {String} The unit of measure for dimensions.
     */
    constructor(length: string, width: string, height: string, unitOfMeasure: string);
    length: string;
    width: string;
    height: string;
    unitOfMeasure: string;
}
export namespace Dimensions {
    namespace UnitOfMeasureEnum {
        let In: string;
        let Ft: string;
        let Meter: string;
        let Yard: string;
    }
    /**
     * *
     */
    type UnitOfMeasureEnum = string;
}
//# sourceMappingURL=Dimensions.d.ts.map