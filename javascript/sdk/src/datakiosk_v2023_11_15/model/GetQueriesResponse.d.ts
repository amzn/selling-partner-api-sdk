/**
 * The GetQueriesResponse model module.
 * @module datakiosk_v2023_11_15/model/GetQueriesResponse
 * @version 2023-11-15
 */
export class GetQueriesResponse {
    /**
     * Constructs a <code>GetQueriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetQueriesResponse} obj Optional instance to populate.
     * @return {GetQueriesResponse} The populated <code>GetQueriesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetQueriesResponse): GetQueriesResponse;
    /**
     * Constructs a new <code>GetQueriesResponse</code>.
     * The response for the &#x60;getQueries&#x60; operation.
     * @alias module:datakiosk_v2023_11_15/model/GetQueriesResponse
     * @class
     * @param queries {Array[]} A list of queries.
     */
    constructor(queries: any[][]);
    queries: any[][];
    /**
     * @member {GetQueriesResponsePagination} pagination
     * @type {GetQueriesResponsePagination}
     */
    pagination: GetQueriesResponsePagination;
}
import { GetQueriesResponsePagination } from './GetQueriesResponsePagination.js';
//# sourceMappingURL=GetQueriesResponse.d.ts.map