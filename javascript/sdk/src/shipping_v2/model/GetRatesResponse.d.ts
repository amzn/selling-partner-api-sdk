/**
 * The GetRatesResponse model module.
 * @module shipping_v2/model/GetRatesResponse
 * @version v2
 */
export class GetRatesResponse {
    /**
     * Constructs a <code>GetRatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetRatesResponse} obj Optional instance to populate.
     * @return {GetRatesResponse} The populated <code>GetRatesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetRatesResponse): GetRatesResponse;
    /**
     * @member {GetRatesResult} payload
     * @type {GetRatesResult}
     */
    payload: GetRatesResult;
}
import { GetRatesResult } from './GetRatesResult.js';
//# sourceMappingURL=GetRatesResponse.d.ts.map