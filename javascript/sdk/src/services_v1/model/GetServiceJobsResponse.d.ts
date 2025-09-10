/**
 * The GetServiceJobsResponse model module.
 * @module services_v1/model/GetServiceJobsResponse
 * @version v1
 */
export class GetServiceJobsResponse {
    /**
     * Constructs a <code>GetServiceJobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetServiceJobsResponse} obj Optional instance to populate.
     * @return {GetServiceJobsResponse} The populated <code>GetServiceJobsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetServiceJobsResponse): GetServiceJobsResponse;
    /**
     * @member {JobListing} payload
     * @type {JobListing}
     */
    payload: JobListing;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { JobListing } from './JobListing.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetServiceJobsResponse.d.ts.map