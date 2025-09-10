/**
 * The GetTrackingResponse model module.
 * @module shipping_v2/model/GetTrackingResponse
 * @version v2
 */
export class GetTrackingResponse {
    /**
     * Constructs a <code>GetTrackingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetTrackingResponse} obj Optional instance to populate.
     * @return {GetTrackingResponse} The populated <code>GetTrackingResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetTrackingResponse): GetTrackingResponse;
    /**
     * @member {GetTrackingResult} payload
     * @type {GetTrackingResult}
     */
    payload: GetTrackingResult;
}
import { GetTrackingResult } from './GetTrackingResult.js';
//# sourceMappingURL=GetTrackingResponse.d.ts.map