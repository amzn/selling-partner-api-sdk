/**
 * The GetServiceJobByServiceJobIdResponse model module.
 * @module services_v1/model/GetServiceJobByServiceJobIdResponse
 * @version v1
 */
export class GetServiceJobByServiceJobIdResponse {
    /**
     * Constructs a <code>GetServiceJobByServiceJobIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetServiceJobByServiceJobIdResponse} obj Optional instance to populate.
     * @return {GetServiceJobByServiceJobIdResponse} The populated <code>GetServiceJobByServiceJobIdResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetServiceJobByServiceJobIdResponse): GetServiceJobByServiceJobIdResponse;
    /**
     * @member {ServiceJob} payload
     * @type {ServiceJob}
     */
    payload: ServiceJob;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { ServiceJob } from './ServiceJob.js';
//# sourceMappingURL=GetServiceJobByServiceJobIdResponse.d.ts.map