/**
 * The AvailabilityRecord model module.
 * @module services_v1/model/AvailabilityRecord
 * @version v1
 */
export class AvailabilityRecord {
    /**
     * Constructs a <code>AvailabilityRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AvailabilityRecord} obj Optional instance to populate.
     * @return {AvailabilityRecord} The populated <code>AvailabilityRecord</code> instance.
     */
    static constructFromObject(data: any, obj: AvailabilityRecord): AvailabilityRecord;
    /**
     * Constructs a new <code>AvailabilityRecord</code>.
     * &#x60;AvailabilityRecord&#x60; to represent the capacity of a resource over a time range.
     * @alias module:services_v1/model/AvailabilityRecord
     * @class
     * @param startTime {Date} Denotes the time from when the resource is available in a day in ISO-8601 format.
     * @param endTime {Date} Denotes the time till when the resource is available in a day in ISO-8601 format.
     */
    constructor(startTime: Date, endTime: Date);
    startTime: Date;
    endTime: Date;
    /**
     * @member {Recurrence} recurrence
     * @type {Recurrence}
     */
    recurrence: Recurrence;
    /**
     * Signifies the capacity of a resource which is available.
     * @member {Number} capacity
     * @type {Number}
     */
    capacity: number;
}
import { Recurrence } from './Recurrence.js';
//# sourceMappingURL=AvailabilityRecord.d.ts.map