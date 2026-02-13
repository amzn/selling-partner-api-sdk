/**
 * The FixedSlotCapacityErrors model module.
 * @module services_v1/model/FixedSlotCapacityErrors
 * @version v1
 */
export class FixedSlotCapacityErrors {
    /**
     * Constructs a <code>FixedSlotCapacityErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FixedSlotCapacityErrors} obj Optional instance to populate.
     * @return {FixedSlotCapacityErrors} The populated <code>FixedSlotCapacityErrors</code> instance.
     */
    static constructFromObject(data: any, obj: FixedSlotCapacityErrors): FixedSlotCapacityErrors;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=FixedSlotCapacityErrors.d.ts.map