/**
 * The GetAdditionalSellerInputsRequest model module.
 * @module merchantfulfillment_v0/model/GetAdditionalSellerInputsRequest
 * @version v0
 */
export class GetAdditionalSellerInputsRequest {
    /**
     * Constructs a <code>GetAdditionalSellerInputsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetAdditionalSellerInputsRequest} obj Optional instance to populate.
     * @return {GetAdditionalSellerInputsRequest} The populated <code>GetAdditionalSellerInputsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetAdditionalSellerInputsRequest): GetAdditionalSellerInputsRequest;
    /**
     * Constructs a new <code>GetAdditionalSellerInputsRequest</code>.
     * Request schema.
     * @alias module:merchantfulfillment_v0/model/GetAdditionalSellerInputsRequest
     * @class
     * @param shippingServiceId {String} An Amazon-defined shipping service identifier.
     * @param shipFromAddress {Address}
     * @param orderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     */
    constructor(shippingServiceId: string, shipFromAddress: Address, orderId: string);
    shippingServiceId: string;
    shipFromAddress: Address;
    orderId: string;
}
import { Address } from './Address.js';
//# sourceMappingURL=GetAdditionalSellerInputsRequest.d.ts.map