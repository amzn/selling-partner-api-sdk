/**
 * The AssignAppointmentResourcesResponsePayload model module.
 * @module services_v1/model/AssignAppointmentResourcesResponsePayload
 * @version v1
 */
export class AssignAppointmentResourcesResponsePayload {
    /**
     * Constructs a <code>AssignAppointmentResourcesResponsePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AssignAppointmentResourcesResponsePayload} obj Optional instance to populate.
     * @return {AssignAppointmentResourcesResponsePayload} The populated <code>AssignAppointmentResourcesResponsePayload</code> instance.
     */
    static constructFromObject(data: any, obj: AssignAppointmentResourcesResponsePayload): AssignAppointmentResourcesResponsePayload;
    /**
     * A list of warnings returned in the sucessful execution response of an API request.
     * @member {Warning[]} warnings
     * @type {Warning[]}
     */
    warnings: Warning[];
}
import { Warning } from './Warning.js';
//# sourceMappingURL=AssignAppointmentResourcesResponsePayload.d.ts.map