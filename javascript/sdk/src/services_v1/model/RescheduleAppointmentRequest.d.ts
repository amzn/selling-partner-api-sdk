/**
 * The RescheduleAppointmentRequest model module.
 * @module services_v1/model/RescheduleAppointmentRequest
 * @version v1
 */
export class RescheduleAppointmentRequest {
    /**
     * Constructs a <code>RescheduleAppointmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RescheduleAppointmentRequest} obj Optional instance to populate.
     * @return {RescheduleAppointmentRequest} The populated <code>RescheduleAppointmentRequest</code> instance.
     */
    static constructFromObject(data: any, obj: RescheduleAppointmentRequest): RescheduleAppointmentRequest;
    /**
     * Constructs a new <code>RescheduleAppointmentRequest</code>.
     * Input for rescheduled appointment operation.
     * @alias module:services_v1/model/RescheduleAppointmentRequest
     * @class
     * @param appointmentTime {AppointmentTimeInput}
     * @param rescheduleReasonCode {String} The appointment reschedule reason code.
     */
    constructor(appointmentTime: AppointmentTimeInput, rescheduleReasonCode: string);
    appointmentTime: AppointmentTimeInput;
    rescheduleReasonCode: string;
}
import { AppointmentTimeInput } from './AppointmentTimeInput.js';
//# sourceMappingURL=RescheduleAppointmentRequest.d.ts.map