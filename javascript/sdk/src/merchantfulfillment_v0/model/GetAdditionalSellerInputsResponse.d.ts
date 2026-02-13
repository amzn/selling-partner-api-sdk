/**
 * The GetAdditionalSellerInputsResponse model module.
 * @module merchantfulfillment_v0/model/GetAdditionalSellerInputsResponse
 * @version v0
 */
export class GetAdditionalSellerInputsResponse {
    /**
     * Constructs a <code>GetAdditionalSellerInputsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetAdditionalSellerInputsResponse} obj Optional instance to populate.
     * @return {GetAdditionalSellerInputsResponse} The populated <code>GetAdditionalSellerInputsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetAdditionalSellerInputsResponse): GetAdditionalSellerInputsResponse;
    /**
     * @member {GetAdditionalSellerInputsResult} payload
     * @type {GetAdditionalSellerInputsResult}
     */
    payload: GetAdditionalSellerInputsResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { GetAdditionalSellerInputsResult } from './GetAdditionalSellerInputsResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetAdditionalSellerInputsResponse.d.ts.map