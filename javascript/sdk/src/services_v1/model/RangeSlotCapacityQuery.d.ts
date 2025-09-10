/**
 * The RangeSlotCapacityQuery model module.
 * @module services_v1/model/RangeSlotCapacityQuery
 * @version v1
 */
export class RangeSlotCapacityQuery {
    /**
     * Constructs a <code>RangeSlotCapacityQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RangeSlotCapacityQuery} obj Optional instance to populate.
     * @return {RangeSlotCapacityQuery} The populated <code>RangeSlotCapacityQuery</code> instance.
     */
    static constructFromObject(data: any, obj: RangeSlotCapacityQuery): RangeSlotCapacityQuery;
    /**
     * Constructs a new <code>RangeSlotCapacityQuery</code>.
     * Request schema for the &#x60;getRangeSlotCapacity&#x60; operation. This schema is used to define the time range and capacity types that are being queried.
     * @alias module:services_v1/model/RangeSlotCapacityQuery
     * @class
     * @param startDateTime {Date} Start date time from which the capacity slots are being requested in ISO 8601 format.
     * @param endDateTime {Date} End date time up to which the capacity slots are being requested in ISO 8601 format.
     */
    constructor(startDateTime: Date, endDateTime: Date);
    startDateTime: Date;
    endDateTime: Date;
    /**
     * An array of capacity types which are being requested. Default value is `[SCHEDULED_CAPACITY]`.
     * @member {[CapacityType]} capacityTypes
     * @type {[CapacityType]}
     */
    capacityTypes: [CapacityType];
}
import { CapacityType } from './CapacityType.js';
//# sourceMappingURL=RangeSlotCapacityQuery.d.ts.map