/**
 * The UpdatePackageDetails model module.
 * @module easyship_v2022_03_23/model/UpdatePackageDetails
 * @version 2022-03-23
 */
export class UpdatePackageDetails {
    /**
     * Constructs a <code>UpdatePackageDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdatePackageDetails} obj Optional instance to populate.
     * @return {UpdatePackageDetails} The populated <code>UpdatePackageDetails</code> instance.
     */
    static constructFromObject(data: any, obj: UpdatePackageDetails): UpdatePackageDetails;
    /**
     * Constructs a new <code>UpdatePackageDetails</code>.
     * Request to update the time slot of a package.
     * @alias module:easyship_v2022_03_23/model/UpdatePackageDetails
     * @class
     * @param scheduledPackageId {ScheduledPackageId}
     * @param packageTimeSlot {TimeSlot}
     */
    constructor(scheduledPackageId: ScheduledPackageId, packageTimeSlot: TimeSlot);
    scheduledPackageId: ScheduledPackageId;
    packageTimeSlot: TimeSlot;
}
import { ScheduledPackageId } from './ScheduledPackageId.js';
import { TimeSlot } from './TimeSlot.js';
//# sourceMappingURL=UpdatePackageDetails.d.ts.map