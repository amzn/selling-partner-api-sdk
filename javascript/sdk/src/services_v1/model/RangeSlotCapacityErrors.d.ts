/**
 * The RangeSlotCapacityErrors model module.
 * @module services_v1/model/RangeSlotCapacityErrors
 * @version v1
 */
export class RangeSlotCapacityErrors {
    /**
     * Constructs a <code>RangeSlotCapacityErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RangeSlotCapacityErrors} obj Optional instance to populate.
     * @return {RangeSlotCapacityErrors} The populated <code>RangeSlotCapacityErrors</code> instance.
     */
    static constructFromObject(data: any, obj: RangeSlotCapacityErrors): RangeSlotCapacityErrors;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=RangeSlotCapacityErrors.d.ts.map