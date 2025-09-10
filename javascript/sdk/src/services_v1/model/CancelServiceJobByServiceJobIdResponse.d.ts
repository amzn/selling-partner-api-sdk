/**
 * The CancelServiceJobByServiceJobIdResponse model module.
 * @module services_v1/model/CancelServiceJobByServiceJobIdResponse
 * @version v1
 */
export class CancelServiceJobByServiceJobIdResponse {
    /**
     * Constructs a <code>CancelServiceJobByServiceJobIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CancelServiceJobByServiceJobIdResponse} obj Optional instance to populate.
     * @return {CancelServiceJobByServiceJobIdResponse} The populated <code>CancelServiceJobByServiceJobIdResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CancelServiceJobByServiceJobIdResponse): CancelServiceJobByServiceJobIdResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=CancelServiceJobByServiceJobIdResponse.d.ts.map