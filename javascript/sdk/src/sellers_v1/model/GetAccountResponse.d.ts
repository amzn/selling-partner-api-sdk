/**
 * The GetAccountResponse model module.
 * @module sellers_v1/model/GetAccountResponse
 * @version v1
 */
export class GetAccountResponse {
    /**
     * Constructs a <code>GetAccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetAccountResponse} obj Optional instance to populate.
     * @return {GetAccountResponse} The populated <code>GetAccountResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetAccountResponse): GetAccountResponse;
    /**
     * @member {Account} payload
     * @type {Account}
     */
    payload: Account;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Account } from './Account.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetAccountResponse.d.ts.map