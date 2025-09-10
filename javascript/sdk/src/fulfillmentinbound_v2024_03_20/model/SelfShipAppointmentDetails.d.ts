/**
 * The SelfShipAppointmentDetails model module.
 * @module fulfillmentinbound_v2024_03_20/model/SelfShipAppointmentDetails
 * @version 2024-03-20
 */
export class SelfShipAppointmentDetails {
    /**
     * Constructs a <code>SelfShipAppointmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SelfShipAppointmentDetails} obj Optional instance to populate.
     * @return {SelfShipAppointmentDetails} The populated <code>SelfShipAppointmentDetails</code> instance.
     */
    static constructFromObject(data: any, obj: SelfShipAppointmentDetails): SelfShipAppointmentDetails;
    /**
     * Identifier for appointment.
     * @member {Number} appointmentId
     * @type {Number}
     */
    appointmentId: number;
    /**
     * @member {AppointmentSlotTime} appointmentSlotTime
     * @type {AppointmentSlotTime}
     */
    appointmentSlotTime: AppointmentSlotTime;
    /**
     * Status of the appointment.
     * @member {String} appointmentStatus
     * @type {String}
     */
    appointmentStatus: string;
}
import { AppointmentSlotTime } from './AppointmentSlotTime.js';
//# sourceMappingURL=SelfShipAppointmentDetails.d.ts.map