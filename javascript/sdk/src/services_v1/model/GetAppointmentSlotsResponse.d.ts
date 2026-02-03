/**
 * The GetAppointmentSlotsResponse model module.
 * @module services_v1/model/GetAppointmentSlotsResponse
 * @version v1
 */
export class GetAppointmentSlotsResponse {
    /**
     * Constructs a <code>GetAppointmentSlotsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetAppointmentSlotsResponse} obj Optional instance to populate.
     * @return {GetAppointmentSlotsResponse} The populated <code>GetAppointmentSlotsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetAppointmentSlotsResponse): GetAppointmentSlotsResponse;
    /**
     * @member {AppointmentSlotReport} payload
     * @type {AppointmentSlotReport}
     */
    payload: AppointmentSlotReport;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { AppointmentSlotReport } from './AppointmentSlotReport.js';
//# sourceMappingURL=GetAppointmentSlotsResponse.d.ts.map