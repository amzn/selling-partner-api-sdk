/**
 * The RangeCapacity model module.
 * @module services_v1/model/RangeCapacity
 * @version v1
 */
export class RangeCapacity {
    /**
     * Constructs a <code>RangeCapacity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RangeCapacity} obj Optional instance to populate.
     * @return {RangeCapacity} The populated <code>RangeCapacity</code> instance.
     */
    static constructFromObject(data: any, obj: RangeCapacity): RangeCapacity;
    /**
     * @member {CapacityType} capacityType
     * @type {CapacityType}
     */
    capacityType: CapacityType;
    /**
     * Array of capacity slots in range slot format.
     * @member {[RangeSlot]} slots
     * @type {[RangeSlot]}
     */
    slots: [RangeSlot];
}
import { CapacityType } from './CapacityType.js';
import { RangeSlot } from './RangeSlot.js';
//# sourceMappingURL=RangeCapacity.d.ts.map