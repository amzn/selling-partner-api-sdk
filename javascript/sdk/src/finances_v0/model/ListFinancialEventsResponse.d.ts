/**
 * The ListFinancialEventsResponse model module.
 * @module finances_v0/model/ListFinancialEventsResponse
 * @version v0
 */
export class ListFinancialEventsResponse {
    /**
     * Constructs a <code>ListFinancialEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListFinancialEventsResponse} obj Optional instance to populate.
     * @return {ListFinancialEventsResponse} The populated <code>ListFinancialEventsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListFinancialEventsResponse): ListFinancialEventsResponse;
    /**
     * @member {ListFinancialEventsPayload} payload
     * @type {ListFinancialEventsPayload}
     */
    payload: ListFinancialEventsPayload;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { ListFinancialEventsPayload } from './ListFinancialEventsPayload.js';
import { Error } from './Error.js';
//# sourceMappingURL=ListFinancialEventsResponse.d.ts.map