/**
 * The AssignAppointmentResourcesResponse model module.
 * @module services_v1/model/AssignAppointmentResourcesResponse
 * @version v1
 */
export class AssignAppointmentResourcesResponse {
    /**
     * Constructs a <code>AssignAppointmentResourcesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AssignAppointmentResourcesResponse} obj Optional instance to populate.
     * @return {AssignAppointmentResourcesResponse} The populated <code>AssignAppointmentResourcesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: AssignAppointmentResourcesResponse): AssignAppointmentResourcesResponse;
    /**
     * @member {AssignAppointmentResourcesResponsePayload} payload
     * @type {AssignAppointmentResourcesResponsePayload}
     */
    payload: AssignAppointmentResourcesResponsePayload;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { AssignAppointmentResourcesResponsePayload } from './AssignAppointmentResourcesResponsePayload.js';
import { Error } from './Error.js';
//# sourceMappingURL=AssignAppointmentResourcesResponse.d.ts.map