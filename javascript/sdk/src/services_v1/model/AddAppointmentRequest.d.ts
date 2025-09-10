/**
 * The AddAppointmentRequest model module.
 * @module services_v1/model/AddAppointmentRequest
 * @version v1
 */
export class AddAppointmentRequest {
    /**
     * Constructs a <code>AddAppointmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AddAppointmentRequest} obj Optional instance to populate.
     * @return {AddAppointmentRequest} The populated <code>AddAppointmentRequest</code> instance.
     */
    static constructFromObject(data: any, obj: AddAppointmentRequest): AddAppointmentRequest;
    /**
     * Constructs a new <code>AddAppointmentRequest</code>.
     * Input for add appointment operation.
     * @alias module:services_v1/model/AddAppointmentRequest
     * @class
     * @param appointmentTime {AppointmentTimeInput}
     */
    constructor(appointmentTime: AppointmentTimeInput);
    appointmentTime: AppointmentTimeInput;
}
import { AppointmentTimeInput } from './AppointmentTimeInput.js';
//# sourceMappingURL=AddAppointmentRequest.d.ts.map