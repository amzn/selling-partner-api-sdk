/**
 * The GetFeaturesResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFeaturesResponse
 * @version 2020-07-01
 */
export class GetFeaturesResponse {
    /**
     * Constructs a <code>GetFeaturesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFeaturesResponse} obj Optional instance to populate.
     * @return {GetFeaturesResponse} The populated <code>GetFeaturesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetFeaturesResponse): GetFeaturesResponse;
    /**
     * @member {GetFeaturesResult} payload
     * @type {GetFeaturesResult}
     */
    payload: GetFeaturesResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { GetFeaturesResult } from './GetFeaturesResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetFeaturesResponse.d.ts.map