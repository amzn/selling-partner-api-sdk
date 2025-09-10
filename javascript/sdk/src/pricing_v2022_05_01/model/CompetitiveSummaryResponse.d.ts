/**
 * The CompetitiveSummaryResponse model module.
 * @module pricing_v2022_05_01/model/CompetitiveSummaryResponse
 * @version 2022-05-01
 */
export class CompetitiveSummaryResponse {
    /**
     * Constructs a <code>CompetitiveSummaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CompetitiveSummaryResponse} obj Optional instance to populate.
     * @return {CompetitiveSummaryResponse} The populated <code>CompetitiveSummaryResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CompetitiveSummaryResponse): CompetitiveSummaryResponse;
    /**
     * Constructs a new <code>CompetitiveSummaryResponse</code>.
     * The response for the individual &#x60;competitiveSummary&#x60; request in the batch operation.
     * @alias module:pricing_v2022_05_01/model/CompetitiveSummaryResponse
     * @class
     * @param status {HttpStatusLine}
     * @param body {CompetitiveSummaryResponseBody}
     */
    constructor(status: HttpStatusLine, body: CompetitiveSummaryResponseBody);
    status: HttpStatusLine;
    body: CompetitiveSummaryResponseBody;
}
import { HttpStatusLine } from './HttpStatusLine.js';
import { CompetitiveSummaryResponseBody } from './CompetitiveSummaryResponseBody.js';
//# sourceMappingURL=CompetitiveSummaryResponse.d.ts.map