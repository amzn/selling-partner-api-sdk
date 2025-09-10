/**
 * The GetMyFeesEstimateResponse model module.
 * @module productfees_v0/model/GetMyFeesEstimateResponse
 * @version v0
 */
export class GetMyFeesEstimateResponse {
    /**
     * Constructs a <code>GetMyFeesEstimateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetMyFeesEstimateResponse} obj Optional instance to populate.
     * @return {GetMyFeesEstimateResponse} The populated <code>GetMyFeesEstimateResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetMyFeesEstimateResponse): GetMyFeesEstimateResponse;
    /**
     * @member {GetMyFeesEstimateResult} payload
     * @type {GetMyFeesEstimateResult}
     */
    payload: GetMyFeesEstimateResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { GetMyFeesEstimateResult } from './GetMyFeesEstimateResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetMyFeesEstimateResponse.d.ts.map