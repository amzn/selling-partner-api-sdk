/**
 * The Weight model module.
 * @module vendorshipments_v1/model/Weight
 * @version v1
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
     * The weight of the shipment.
     * @alias module:vendorshipments_v1/model/Weight
     * @class
     * @param unitOfMeasure {String} The unit of measurement.
     * @param value {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     */
    constructor(unitOfMeasure: string, value: string);
    unitOfMeasure: string;
    value: string;
}
export namespace Weight {
    namespace UnitOfMeasureEnum {
        let G: string;
        let Kg: string;
        let Oz: string;
        let Lb: string;
    }
    /**
     * *
     */
    type UnitOfMeasureEnum = string;
}
//# sourceMappingURL=Weight.d.ts.map