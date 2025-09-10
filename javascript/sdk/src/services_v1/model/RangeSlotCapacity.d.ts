/**
 * The RangeSlotCapacity model module.
 * @module services_v1/model/RangeSlotCapacity
 * @version v1
 */
export class RangeSlotCapacity {
    /**
     * Constructs a <code>RangeSlotCapacity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RangeSlotCapacity} obj Optional instance to populate.
     * @return {RangeSlotCapacity} The populated <code>RangeSlotCapacity</code> instance.
     */
    static constructFromObject(data: any, obj: RangeSlotCapacity): RangeSlotCapacity;
    /**
     * Resource Identifier.
     * @member {String} resourceId
     * @type {String}
     */
    resourceId: string;
    /**
     * Array of range capacities where each entry is for a specific capacity type.
     * @member {[RangeCapacity]} capacities
     * @type {[RangeCapacity]}
     */
    capacities: [RangeCapacity];
    /**
     * Next page token, if there are more pages.
     * @member {String} nextPageToken
     * @type {String}
     */
    nextPageToken: string;
}
import { RangeCapacity } from './RangeCapacity.js';
//# sourceMappingURL=RangeSlotCapacity.d.ts.map