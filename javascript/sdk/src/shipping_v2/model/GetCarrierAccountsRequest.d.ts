/**
 * The GetCarrierAccountsRequest model module.
 * @module shipping_v2/model/GetCarrierAccountsRequest
 * @version v2
 */
export class GetCarrierAccountsRequest {
    /**
     * Constructs a <code>GetCarrierAccountsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetCarrierAccountsRequest} obj Optional instance to populate.
     * @return {GetCarrierAccountsRequest} The populated <code>GetCarrierAccountsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetCarrierAccountsRequest): GetCarrierAccountsRequest;
    /**
     * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
     * @member {ClientReferenceDetail[]} clientReferenceDetails
     * @type {ClientReferenceDetail[]}
     */
    clientReferenceDetails: ClientReferenceDetail[];
}
import { ClientReferenceDetail } from './ClientReferenceDetail.js';
//# sourceMappingURL=GetCarrierAccountsRequest.d.ts.map