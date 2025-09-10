/**
 * The GetInventorySummariesResponse model module.
 * @module fbainventory_v1/model/GetInventorySummariesResponse
 * @version v1
 */
export class GetInventorySummariesResponse {
    /**
     * Constructs a <code>GetInventorySummariesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetInventorySummariesResponse} obj Optional instance to populate.
     * @return {GetInventorySummariesResponse} The populated <code>GetInventorySummariesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetInventorySummariesResponse): GetInventorySummariesResponse;
    /**
     * @member {GetInventorySummariesResult} payload
     * @type {GetInventorySummariesResult}
     */
    payload: GetInventorySummariesResult;
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { GetInventorySummariesResult } from './GetInventorySummariesResult.js';
import { Pagination } from './Pagination.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetInventorySummariesResponse.d.ts.map