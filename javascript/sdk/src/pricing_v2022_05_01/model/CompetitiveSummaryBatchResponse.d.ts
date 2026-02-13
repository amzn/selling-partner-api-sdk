/**
 * The CompetitiveSummaryBatchResponse model module.
 * @module pricing_v2022_05_01/model/CompetitiveSummaryBatchResponse
 * @version 2022-05-01
 */
export class CompetitiveSummaryBatchResponse {
    /**
     * Constructs a <code>CompetitiveSummaryBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CompetitiveSummaryBatchResponse} obj Optional instance to populate.
     * @return {CompetitiveSummaryBatchResponse} The populated <code>CompetitiveSummaryBatchResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CompetitiveSummaryBatchResponse): CompetitiveSummaryBatchResponse;
    /**
     * Constructs a new <code>CompetitiveSummaryBatchResponse</code>.
     * The response schema for the &#x60;competitiveSummaryBatch&#x60; operation.
     * @alias module:pricing_v2022_05_01/model/CompetitiveSummaryBatchResponse
     * @class
     * @param responses {[CompetitiveSummaryResponse]} The response list for the `competitiveSummaryBatch` operation.
     */
    constructor(responses: [CompetitiveSummaryResponse]);
    responses: CompetitiveSummaryResponse[];
}
import { CompetitiveSummaryResponse } from './CompetitiveSummaryResponse.js';
//# sourceMappingURL=CompetitiveSummaryBatchResponse.d.ts.map