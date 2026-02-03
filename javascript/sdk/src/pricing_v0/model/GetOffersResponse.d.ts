/**
 * The GetOffersResponse model module.
 * @module pricing_v0/model/GetOffersResponse
 * @version v0
 */
export class GetOffersResponse {
    /**
     * Constructs a <code>GetOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOffersResponse} obj Optional instance to populate.
     * @return {GetOffersResponse} The populated <code>GetOffersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOffersResponse): GetOffersResponse;
    /**
     * @member {GetOffersResult} payload
     * @type {GetOffersResult}
     */
    payload: GetOffersResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { GetOffersResult } from './GetOffersResult.js';
//# sourceMappingURL=GetOffersResponse.d.ts.map