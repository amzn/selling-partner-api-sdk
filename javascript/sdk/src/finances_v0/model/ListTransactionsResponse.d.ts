/**
 * The ListTransactionsResponse model module.
 * @module finances_v0/model/ListTransactionsResponse
 * @version v0
 */
export class ListTransactionsResponse {
    /**
     * Constructs a <code>ListTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListTransactionsResponse} obj Optional instance to populate.
     * @return {ListTransactionsResponse} The populated <code>ListTransactionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListTransactionsResponse): ListTransactionsResponse;
    /**
     * @member {ListTransactionsPayload} payload
     * @type {ListTransactionsPayload}
     */
    payload: ListTransactionsPayload;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { ListTransactionsPayload } from './ListTransactionsPayload.js';
import { Error } from './Error.js';
//# sourceMappingURL=ListTransactionsResponse.d.ts.map