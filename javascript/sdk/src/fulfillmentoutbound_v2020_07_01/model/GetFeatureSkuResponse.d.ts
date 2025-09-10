/**
 * The GetFeatureSkuResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFeatureSkuResponse
 * @version 2020-07-01
 */
export class GetFeatureSkuResponse {
    /**
     * Constructs a <code>GetFeatureSkuResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFeatureSkuResponse} obj Optional instance to populate.
     * @return {GetFeatureSkuResponse} The populated <code>GetFeatureSkuResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetFeatureSkuResponse): GetFeatureSkuResponse;
    /**
     * @member {GetFeatureSkuResult} payload
     * @type {GetFeatureSkuResult}
     */
    payload: GetFeatureSkuResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { GetFeatureSkuResult } from './GetFeatureSkuResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetFeatureSkuResponse.d.ts.map