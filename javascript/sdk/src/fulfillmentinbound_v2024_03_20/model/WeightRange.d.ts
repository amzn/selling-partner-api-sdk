/**
 * The WeightRange model module.
 * @module fulfillmentinbound_v2024_03_20/model/WeightRange
 * @version 2024-03-20
 */
export class WeightRange {
    /**
     * Constructs a <code>WeightRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {WeightRange} obj Optional instance to populate.
     * @return {WeightRange} The populated <code>WeightRange</code> instance.
     */
    static constructFromObject(data: any, obj: WeightRange): WeightRange;
    /**
     * Constructs a new <code>WeightRange</code>.
     * The range of weights that are allowed for a package.
     * @alias module:fulfillmentinbound_v2024_03_20/model/WeightRange
     * @class
     * @param maximum {Number} Maximum allowed weight.
     * @param minimum {Number} Minimum allowed weight.
     * @param unit {UnitOfWeight}
     */
    constructor(maximum: number, minimum: number, unit: UnitOfWeight);
    maximum: number;
    minimum: number;
    unit: UnitOfWeight;
}
import { UnitOfWeight } from './UnitOfWeight.js';
//# sourceMappingURL=WeightRange.d.ts.map