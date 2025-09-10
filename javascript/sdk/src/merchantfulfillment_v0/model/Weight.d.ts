/**
 * The Weight model module.
 * @module merchantfulfillment_v0/model/Weight
 * @version v0
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
     * @alias module:merchantfulfillment_v0/model/Weight
     * @class
     * @param value {Number} The weight value.
     * @param unit {UnitOfWeight}
     */
    constructor(value: number, unit: UnitOfWeight);
    value: number;
    unit: UnitOfWeight;
}
import { UnitOfWeight } from './UnitOfWeight.js';
//# sourceMappingURL=Weight.d.ts.map