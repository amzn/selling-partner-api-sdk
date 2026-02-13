/**
 * The ListFinancialEventGroupsResponse model module.
 * @module finances_v0/model/ListFinancialEventGroupsResponse
 * @version v0
 */
export class ListFinancialEventGroupsResponse {
    /**
     * Constructs a <code>ListFinancialEventGroupsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListFinancialEventGroupsResponse} obj Optional instance to populate.
     * @return {ListFinancialEventGroupsResponse} The populated <code>ListFinancialEventGroupsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListFinancialEventGroupsResponse): ListFinancialEventGroupsResponse;
    /**
     * @member {ListFinancialEventGroupsPayload} payload
     * @type {ListFinancialEventGroupsPayload}
     */
    payload: ListFinancialEventGroupsPayload;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { ListFinancialEventGroupsPayload } from './ListFinancialEventGroupsPayload.js';
import { Error } from './Error.js';
//# sourceMappingURL=ListFinancialEventGroupsResponse.d.ts.map