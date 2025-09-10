/**
 * The Weight model module.
 * @module easyship_v2022_03_23/model/Weight
 * @version 2022-03-23
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
     * The weight of the package.
     * @member {Number} value
     * @type {Number}
     */
    value: number;
    /**
     * @member {UnitOfWeight} unit
     * @type {UnitOfWeight}
     */
    unit: UnitOfWeight;
}
import { UnitOfWeight } from './UnitOfWeight.js';
//# sourceMappingURL=Weight.d.ts.map