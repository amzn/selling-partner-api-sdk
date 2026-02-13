/**
 * The GetCarrierAccountFormInputsResponse model module.
 * @module shipping_v2/model/GetCarrierAccountFormInputsResponse
 * @version v2
 */
export class GetCarrierAccountFormInputsResponse {
    /**
     * Constructs a <code>GetCarrierAccountFormInputsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetCarrierAccountFormInputsResponse} obj Optional instance to populate.
     * @return {GetCarrierAccountFormInputsResponse} The populated <code>GetCarrierAccountFormInputsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetCarrierAccountFormInputsResponse): GetCarrierAccountFormInputsResponse;
    /**
     * A list of LinkableCarrier
     * @member {LinkableCarrier[]} linkableCarriersList
     * @type {LinkableCarrier[]}
     */
    linkableCarriersList: LinkableCarrier[];
}
import { LinkableCarrier } from './LinkableCarrier.js';
//# sourceMappingURL=GetCarrierAccountFormInputsResponse.d.ts.map