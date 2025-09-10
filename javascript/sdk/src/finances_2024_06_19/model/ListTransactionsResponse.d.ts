/**
 * The ListTransactionsResponse model module.
 * @module finances_2024_06_19/model/ListTransactionsResponse
 * @version 2024-06-19
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
     * @member {TransactionsPayload} payload
     * @type {TransactionsPayload}
     */
    payload: TransactionsPayload;
}
import { TransactionsPayload } from './TransactionsPayload.js';
//# sourceMappingURL=ListTransactionsResponse.d.ts.map