/**
 * The UpdateScheduleRequest model module.
 * @module services_v1/model/UpdateScheduleRequest
 * @version v1
 */
export class UpdateScheduleRequest {
    /**
     * Constructs a <code>UpdateScheduleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateScheduleRequest} obj Optional instance to populate.
     * @return {UpdateScheduleRequest} The populated <code>UpdateScheduleRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateScheduleRequest): UpdateScheduleRequest;
    /**
     * Constructs a new <code>UpdateScheduleRequest</code>.
     * Request schema for the &#x60;updateSchedule&#x60; operation.
     * @alias module:services_v1/model/UpdateScheduleRequest
     * @class
     * @param schedules {AvailabilityRecord[]} List of `AvailabilityRecord`s to represent the capacity of a resource over a time range.
     */
    constructor(schedules: AvailabilityRecord[]);
    schedules: AvailabilityRecord[];
}
import { AvailabilityRecord } from './AvailabilityRecord.js';
//# sourceMappingURL=UpdateScheduleRequest.d.ts.map