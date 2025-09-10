/**
 * The GetUnmanifestedShipmentsRequest model module.
 * @module shipping_v2/model/GetUnmanifestedShipmentsRequest
 * @version v2
 */
export class GetUnmanifestedShipmentsRequest {
    /**
     * Constructs a <code>GetUnmanifestedShipmentsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetUnmanifestedShipmentsRequest} obj Optional instance to populate.
     * @return {GetUnmanifestedShipmentsRequest} The populated <code>GetUnmanifestedShipmentsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetUnmanifestedShipmentsRequest): GetUnmanifestedShipmentsRequest;
    /**
     * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
     * @member {[ClientReferenceDetail]} clientReferenceDetails
     * @type {[ClientReferenceDetail]}
     */
    clientReferenceDetails: [ClientReferenceDetail];
}
import { ClientReferenceDetail } from './ClientReferenceDetail.js';
//# sourceMappingURL=GetUnmanifestedShipmentsRequest.d.ts.map