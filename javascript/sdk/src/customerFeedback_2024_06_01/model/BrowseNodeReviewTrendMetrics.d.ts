/**
 * The BrowseNodeReviewTrendMetrics model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReviewTrendMetrics
 * @version 2024-06-01
 */
export class BrowseNodeReviewTrendMetrics {
    /**
     * Constructs a <code>BrowseNodeReviewTrendMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReviewTrendMetrics} obj Optional instance to populate.
     * @return {BrowseNodeReviewTrendMetrics} The populated <code>BrowseNodeReviewTrendMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReviewTrendMetrics): BrowseNodeReviewTrendMetrics;
    /**
     * Constructs a new <code>BrowseNodeReviewTrendMetrics</code>.
     * The browse node review topic metrics.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReviewTrendMetrics
     * @class
     * @param occurrencePercentage {BrowseNodeAllOccurrence}
     */
    constructor(occurrencePercentage: BrowseNodeAllOccurrence);
    occurrencePercentage: BrowseNodeAllOccurrence;
}
import { BrowseNodeAllOccurrence } from './BrowseNodeAllOccurrence.js';
//# sourceMappingURL=BrowseNodeReviewTrendMetrics.d.ts.map