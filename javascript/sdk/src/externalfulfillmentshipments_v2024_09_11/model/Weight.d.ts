/**
 * The Weight model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Weight
 * @version 2024-09-11
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
     * The weight of a package.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Weight
     * @class
     * @param value {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies.
     * @param weightUnit {String} The unit of measurement of the weight.
     */
    constructor(value: string, weightUnit: string);
    value: string;
    weightUnit: string;
}
export namespace Weight {
    namespace WeightUnitEnum {
        let G: string;
        let KG: string;
    }
    /**
     * *
     */
    type WeightUnitEnum = string;
}
//# sourceMappingURL=Weight.d.ts.map