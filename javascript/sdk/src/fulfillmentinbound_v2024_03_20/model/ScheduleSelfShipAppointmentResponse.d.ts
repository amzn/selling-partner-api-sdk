/**
 * The ScheduleSelfShipAppointmentResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ScheduleSelfShipAppointmentResponse
 * @version 2024-03-20
 */
export class ScheduleSelfShipAppointmentResponse {
    /**
     * Constructs a <code>ScheduleSelfShipAppointmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ScheduleSelfShipAppointmentResponse} obj Optional instance to populate.
     * @return {ScheduleSelfShipAppointmentResponse} The populated <code>ScheduleSelfShipAppointmentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ScheduleSelfShipAppointmentResponse): ScheduleSelfShipAppointmentResponse;
    /**
     * Constructs a new <code>ScheduleSelfShipAppointmentResponse</code>.
     * The &#x60;scheduleSelfShipAppointment&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ScheduleSelfShipAppointmentResponse
     * @class
     * @param selfShipAppointmentDetails {SelfShipAppointmentDetails}
     */
    constructor(selfShipAppointmentDetails: SelfShipAppointmentDetails);
    selfShipAppointmentDetails: SelfShipAppointmentDetails;
}
import { SelfShipAppointmentDetails } from './SelfShipAppointmentDetails.js';
//# sourceMappingURL=ScheduleSelfShipAppointmentResponse.d.ts.map