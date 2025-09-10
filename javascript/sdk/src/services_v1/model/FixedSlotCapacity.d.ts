/**
 * The FixedSlotCapacity model module.
 * @module services_v1/model/FixedSlotCapacity
 * @version v1
 */
export class FixedSlotCapacity {
    /**
     * Constructs a <code>FixedSlotCapacity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FixedSlotCapacity} obj Optional instance to populate.
     * @return {FixedSlotCapacity} The populated <code>FixedSlotCapacity</code> instance.
     */
    static constructFromObject(data: any, obj: FixedSlotCapacity): FixedSlotCapacity;
    /**
     * Resource Identifier.
     * @member {String} resourceId
     * @type {String}
     */
    resourceId: string;
    /**
     * The duration of each slot which is returned. This value will be a multiple of 5 and fall in the following range: 5 <= `slotDuration` <= 360.
     * @member {Number} slotDuration
     * @type {Number}
     */
    slotDuration: number;
    /**
     * Array of capacity slots in fixed slot format.
     * @member {[FixedSlot]} capacities
     * @type {[FixedSlot]}
     */
    capacities: [FixedSlot];
    /**
     * Next page token, if there are more pages.
     * @member {String} nextPageToken
     * @type {String}
     */
    nextPageToken: string;
}
import { FixedSlot } from './FixedSlot.js';
//# sourceMappingURL=FixedSlotCapacity.d.ts.map