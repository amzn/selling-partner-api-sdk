/**
 * The GetUnmanifestedShipmentsResponse model module.
 * @module shipping_v2/model/GetUnmanifestedShipmentsResponse
 * @version v2
 */
export class GetUnmanifestedShipmentsResponse {
    /**
     * Constructs a <code>GetUnmanifestedShipmentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetUnmanifestedShipmentsResponse} obj Optional instance to populate.
     * @return {GetUnmanifestedShipmentsResponse} The populated <code>GetUnmanifestedShipmentsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetUnmanifestedShipmentsResponse): GetUnmanifestedShipmentsResponse;
    /**
     * A list of UnmanifestedCarrierInformation
     * @member {[UnmanifestedCarrierInformation]} unmanifestedCarrierInformationList
     * @type {[UnmanifestedCarrierInformation]}
     */
    unmanifestedCarrierInformationList: [UnmanifestedCarrierInformation];
}
import { UnmanifestedCarrierInformation } from './UnmanifestedCarrierInformation.js';
//# sourceMappingURL=GetUnmanifestedShipmentsResponse.d.ts.map