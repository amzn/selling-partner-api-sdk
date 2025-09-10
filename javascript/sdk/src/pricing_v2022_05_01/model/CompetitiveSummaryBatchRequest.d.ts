/**
 * The CompetitiveSummaryBatchRequest model module.
 * @module pricing_v2022_05_01/model/CompetitiveSummaryBatchRequest
 * @version 2022-05-01
 */
export class CompetitiveSummaryBatchRequest {
    /**
     * Constructs a <code>CompetitiveSummaryBatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CompetitiveSummaryBatchRequest} obj Optional instance to populate.
     * @return {CompetitiveSummaryBatchRequest} The populated <code>CompetitiveSummaryBatchRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CompetitiveSummaryBatchRequest): CompetitiveSummaryBatchRequest;
    /**
     * Constructs a new <code>CompetitiveSummaryBatchRequest</code>.
     * The &#x60;competitiveSummary&#x60; batch request data.
     * @alias module:pricing_v2022_05_01/model/CompetitiveSummaryBatchRequest
     * @class
     * @param requests {[CompetitiveSummaryRequest]} A batched list of `competitiveSummary` requests.
     */
    constructor(requests: [CompetitiveSummaryRequest]);
    requests: [CompetitiveSummaryRequest];
}
import { CompetitiveSummaryRequest } from './CompetitiveSummaryRequest.js';
//# sourceMappingURL=CompetitiveSummaryBatchRequest.d.ts.map