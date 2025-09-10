/**
 * The GetAccessPointsResponse model module.
 * @module shipping_v2/model/GetAccessPointsResponse
 * @version v2
 */
export class GetAccessPointsResponse {
    /**
     * Constructs a <code>GetAccessPointsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetAccessPointsResponse} obj Optional instance to populate.
     * @return {GetAccessPointsResponse} The populated <code>GetAccessPointsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetAccessPointsResponse): GetAccessPointsResponse;
    /**
     * @member {GetAccessPointsResult} payload
     * @type {GetAccessPointsResult}
     */
    payload: GetAccessPointsResult;
}
import { GetAccessPointsResult } from './GetAccessPointsResult.js';
//# sourceMappingURL=GetAccessPointsResponse.d.ts.map