/**
 * The FixedSlotCapacityQuery model module.
 * @module services_v1/model/FixedSlotCapacityQuery
 * @version v1
 */
export class FixedSlotCapacityQuery {
    /**
     * Constructs a <code>FixedSlotCapacityQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FixedSlotCapacityQuery} obj Optional instance to populate.
     * @return {FixedSlotCapacityQuery} The populated <code>FixedSlotCapacityQuery</code> instance.
     */
    static constructFromObject(data: any, obj: FixedSlotCapacityQuery): FixedSlotCapacityQuery;
    /**
     * Constructs a new <code>FixedSlotCapacityQuery</code>.
     * Request schema for the &#x60;getFixedSlotCapacity&#x60; operation. This schema is used to define the time range, capacity types and slot duration which are being queried.
     * @alias module:services_v1/model/FixedSlotCapacityQuery
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
    /**
     * Size in which slots are being requested. This value should be a multiple of 5 and fall in the range: 5 <= `slotDuration` <= 360.
     * @member {Number} slotDuration
     * @type {Number}
     */
    slotDuration: number;
}
import { CapacityType } from './CapacityType.js';
//# sourceMappingURL=FixedSlotCapacityQuery.d.ts.map