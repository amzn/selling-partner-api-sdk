/**
 * The Weight model module.
 * @module fulfillmentinbound_v2024_03_20/model/Weight
 * @version 2024-03-20
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
     * @alias module:fulfillmentinbound_v2024_03_20/model/Weight
     * @class
     * @param unit {UnitOfWeight}
     * @param value {Number} Value of a weight.
     */
    constructor(unit: UnitOfWeight, value: number);
    unit: UnitOfWeight;
    value: number;
}
import { UnitOfWeight } from './UnitOfWeight.js';
//# sourceMappingURL=Weight.d.ts.map