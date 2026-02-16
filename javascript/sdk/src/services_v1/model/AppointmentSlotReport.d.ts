/**
 * The AppointmentSlotReport model module.
 * @module services_v1/model/AppointmentSlotReport
 * @version v1
 */
export class AppointmentSlotReport {
    /**
     * Constructs a <code>AppointmentSlotReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AppointmentSlotReport} obj Optional instance to populate.
     * @return {AppointmentSlotReport} The populated <code>AppointmentSlotReport</code> instance.
     */
    static constructFromObject(data: any, obj: AppointmentSlotReport): AppointmentSlotReport;
    /**
     * Defines the type of slots.
     * @member {String} schedulingType
     * @type {String}
     */
    schedulingType: string;
    /**
     * Start Time from which the appointment slots are generated in ISO 8601 format.
     * @member {Date} startTime
     * @type {Date}
     */
    startTime: Date;
    /**
     * End Time up to which the appointment slots are generated in ISO 8601 format.
     * @member {Date} endTime
     * @type {Date}
     */
    endTime: Date;
    /**
     * A list of time windows along with associated capacity in which the service can be performed.
     * @member {AppointmentSlot[]} appointmentSlots
     * @type {AppointmentSlot[]}
     */
    appointmentSlots: AppointmentSlot[];
}
export namespace AppointmentSlotReport {
    namespace SchedulingTypeEnum {
        let REAL_TIME_SCHEDULING: string;
        let NON_REAL_TIME_SCHEDULING: string;
    }
    /**
     * *
     */
    type SchedulingTypeEnum = string;
}
import { AppointmentSlot } from './AppointmentSlot.js';
//# sourceMappingURL=AppointmentSlotReport.d.ts.map