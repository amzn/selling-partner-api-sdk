/**
 * The GetMyFeesEstimateResult model module.
 * @module productfees_v0/model/GetMyFeesEstimateResult
 * @version v0
 */
export class GetMyFeesEstimateResult {
    /**
     * Constructs a <code>GetMyFeesEstimateResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetMyFeesEstimateResult} obj Optional instance to populate.
     * @return {GetMyFeesEstimateResult} The populated <code>GetMyFeesEstimateResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetMyFeesEstimateResult): GetMyFeesEstimateResult;
    /**
     * @member {FeesEstimateResult} feesEstimateResult
     * @type {FeesEstimateResult}
     */
    feesEstimateResult: FeesEstimateResult;
}
import { FeesEstimateResult } from './FeesEstimateResult.js';
//# sourceMappingURL=GetMyFeesEstimateResult.d.ts.map