/**
 * The LinkCarrierAccountResponse model module.
 * @module shipping_v2/model/LinkCarrierAccountResponse
 * @version v2
 */
export class LinkCarrierAccountResponse {
    /**
     * Constructs a <code>LinkCarrierAccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LinkCarrierAccountResponse} obj Optional instance to populate.
     * @return {LinkCarrierAccountResponse} The populated <code>LinkCarrierAccountResponse</code> instance.
     */
    static constructFromObject(data: any, obj: LinkCarrierAccountResponse): LinkCarrierAccountResponse;
    /**
     * @member {AccountStatus} registrationStatus
     * @type {AccountStatus}
     */
    registrationStatus: AccountStatus;
    /**
     * Identifier for the seller's carrier account.
     * @member {String} accountId
     * @type {String}
     */
    accountId: string;
}
import { AccountStatus } from './AccountStatus.js';
//# sourceMappingURL=LinkCarrierAccountResponse.d.ts.map