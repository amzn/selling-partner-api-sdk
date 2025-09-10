/**
 * The BoxRequirements model module.
 * @module fulfillmentinbound_v2024_03_20/model/BoxRequirements
 * @version 2024-03-20
 */
export class BoxRequirements {
    /**
     * Constructs a <code>BoxRequirements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BoxRequirements} obj Optional instance to populate.
     * @return {BoxRequirements} The populated <code>BoxRequirements</code> instance.
     */
    static constructFromObject(data: any, obj: BoxRequirements): BoxRequirements;
    /**
     * Constructs a new <code>BoxRequirements</code>.
     * The requirements for a box in the packing option.
     * @alias module:fulfillmentinbound_v2024_03_20/model/BoxRequirements
     * @class
     * @param weight {WeightRange}
     */
    constructor(weight: WeightRange);
    weight: WeightRange;
}
import { WeightRange } from './WeightRange.js';
//# sourceMappingURL=BoxRequirements.d.ts.map