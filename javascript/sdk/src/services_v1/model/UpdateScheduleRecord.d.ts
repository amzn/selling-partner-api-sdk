/**
 * The UpdateScheduleRecord model module.
 * @module services_v1/model/UpdateScheduleRecord
 * @version v1
 */
export class UpdateScheduleRecord {
    /**
     * Constructs a <code>UpdateScheduleRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateScheduleRecord} obj Optional instance to populate.
     * @return {UpdateScheduleRecord} The populated <code>UpdateScheduleRecord</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateScheduleRecord): UpdateScheduleRecord;
    /**
     * @member {AvailabilityRecord} availability
     * @type {AvailabilityRecord}
     */
    availability: AvailabilityRecord;
    /**
     * A list of warnings returned in the sucessful execution response of an API request.
     * @member {[Warning]} warnings
     * @type {[Warning]}
     */
    warnings: [Warning];
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { AvailabilityRecord } from './AvailabilityRecord.js';
import { Warning } from './Warning.js';
import { Error } from './Error.js';
//# sourceMappingURL=UpdateScheduleRecord.d.ts.map