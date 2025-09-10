/**
 * The GetSelfShipAppointmentSlotsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/GetSelfShipAppointmentSlotsResponse
 * @version 2024-03-20
 */
export class GetSelfShipAppointmentSlotsResponse {
    /**
     * Constructs a <code>GetSelfShipAppointmentSlotsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSelfShipAppointmentSlotsResponse} obj Optional instance to populate.
     * @return {GetSelfShipAppointmentSlotsResponse} The populated <code>GetSelfShipAppointmentSlotsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetSelfShipAppointmentSlotsResponse): GetSelfShipAppointmentSlotsResponse;
    /**
     * Constructs a new <code>GetSelfShipAppointmentSlotsResponse</code>.
     * The &#x60;getSelfShipAppointmentSlots&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/GetSelfShipAppointmentSlotsResponse
     * @class
     * @param selfShipAppointmentSlotsAvailability {SelfShipAppointmentSlotsAvailability}
     */
    constructor(selfShipAppointmentSlotsAvailability: SelfShipAppointmentSlotsAvailability);
    selfShipAppointmentSlotsAvailability: SelfShipAppointmentSlotsAvailability;
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { SelfShipAppointmentSlotsAvailability } from './SelfShipAppointmentSlotsAvailability.js';
import { Pagination } from './Pagination.js';
//# sourceMappingURL=GetSelfShipAppointmentSlotsResponse.d.ts.map