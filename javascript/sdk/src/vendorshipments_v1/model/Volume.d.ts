/**
 * The Volume model module.
 * @module vendorshipments_v1/model/Volume
 * @version v1
 */
export class Volume {
    /**
     * Constructs a <code>Volume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Volume} obj Optional instance to populate.
     * @return {Volume} The populated <code>Volume</code> instance.
     */
    static constructFromObject(data: any, obj: Volume): Volume;
    /**
     * Constructs a new <code>Volume</code>.
     * The volume of the shipment.
     * @alias module:vendorshipments_v1/model/Volume
     * @class
     * @param unitOfMeasure {String} The unit of measurement.
     * @param value {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     */
    constructor(unitOfMeasure: string, value: string);
    unitOfMeasure: string;
    value: string;
}
export namespace Volume {
    namespace UnitOfMeasureEnum {
        let CuFt: string;
        let CuIn: string;
        let CuM: string;
        let CuY: string;
    }
    /**
     * *
     */
    type UnitOfMeasureEnum = string;
}
//# sourceMappingURL=Volume.d.ts.map