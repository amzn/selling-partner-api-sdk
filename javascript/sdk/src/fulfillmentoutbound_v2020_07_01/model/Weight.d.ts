/**
 * The Weight model module.
 * @module fulfillmentoutbound_v2020_07_01/model/Weight
 * @version 2020-07-01
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
     * The weight.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/Weight
     * @class
     * @param unit {String} The unit of weight.
     * @param value {String} The weight value.
     */
    constructor(unit: string, value: string);
    unit: string;
    value: string;
}
export namespace Weight {
    namespace UnitEnum {
        let KG: string;
        let KILOGRAMS: string;
        let LB: string;
        let POUNDS: string;
    }
    /**
     * *
     */
    type UnitEnum = string;
}
//# sourceMappingURL=Weight.d.ts.map