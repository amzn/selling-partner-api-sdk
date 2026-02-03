/**
 * The Appointment model module.
 * @module services_v1/model/Appointment
 * @version v1
 */
export class Appointment {
    /**
     * Constructs a <code>Appointment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Appointment} obj Optional instance to populate.
     * @return {Appointment} The populated <code>Appointment</code> instance.
     */
    static constructFromObject(data: any, obj: Appointment): Appointment;
    /**
     * The appointment identifier.
     * @member {String} appointmentId
     * @type {String}
     */
    appointmentId: string;
    /**
     * The status of the appointment.
     * @member {String} appointmentStatus
     * @type {String}
     */
    appointmentStatus: string;
    /**
     * @member {AppointmentTime} appointmentTime
     * @type {AppointmentTime}
     */
    appointmentTime: AppointmentTime;
    /**
     * A list of technicians assigned to the service job.
     * @member {Array[]} assignedTechnicians
     * @type {Array[]}
     */
    assignedTechnicians: any[][];
    /**
     * The appointment identifier.
     * @member {String} rescheduledAppointmentId
     * @type {String}
     */
    rescheduledAppointmentId: string;
    /**
     * @member {Poa} poa
     * @type {Poa}
     */
    poa: Poa;
}
export namespace Appointment {
    namespace AppointmentStatusEnum {
        let ACTIVE: string;
        let CANCELLED: string;
        let COMPLETED: string;
    }
    /**
     * *
     */
    type AppointmentStatusEnum = string;
}
import { AppointmentTime } from './AppointmentTime.js';
import { Poa } from './Poa.js';
//# sourceMappingURL=Appointment.d.ts.map