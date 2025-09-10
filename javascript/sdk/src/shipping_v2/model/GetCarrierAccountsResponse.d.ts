/**
 * The GetCarrierAccountsResponse model module.
 * @module shipping_v2/model/GetCarrierAccountsResponse
 * @version v2
 */
export class GetCarrierAccountsResponse {
    /**
     * Constructs a <code>GetCarrierAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetCarrierAccountsResponse} obj Optional instance to populate.
     * @return {GetCarrierAccountsResponse} The populated <code>GetCarrierAccountsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetCarrierAccountsResponse): GetCarrierAccountsResponse;
    /**
     * Constructs a new <code>GetCarrierAccountsResponse</code>.
     * The Response  for the GetCarrierAccountsResponse operation.
     * @alias module:shipping_v2/model/GetCarrierAccountsResponse
     * @class
     * @param activeAccounts {[ActiveAccount]} A list of ActiveAccount
     */
    constructor(activeAccounts: [ActiveAccount]);
    activeAccounts: [ActiveAccount];
}
import { ActiveAccount } from './ActiveAccount.js';
//# sourceMappingURL=GetCarrierAccountsResponse.d.ts.map