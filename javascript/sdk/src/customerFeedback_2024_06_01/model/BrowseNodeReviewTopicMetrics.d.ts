/**
 * The BrowseNodeReviewTopicMetrics model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReviewTopicMetrics
 * @version 2024-06-01
 */
export class BrowseNodeReviewTopicMetrics {
    /**
     * Constructs a <code>BrowseNodeReviewTopicMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReviewTopicMetrics} obj Optional instance to populate.
     * @return {BrowseNodeReviewTopicMetrics} The populated <code>BrowseNodeReviewTopicMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReviewTopicMetrics): BrowseNodeReviewTopicMetrics;
    /**
     * @member {BrowseNodeAllOccurrence} occurrencePercentage
     * @type {BrowseNodeAllOccurrence}
     */
    occurrencePercentage: BrowseNodeAllOccurrence;
    /**
     * @member {BrowseNodeAllStarRatingImpact} starRatingImpact
     * @type {BrowseNodeAllStarRatingImpact}
     */
    starRatingImpact: BrowseNodeAllStarRatingImpact;
}
import { BrowseNodeAllOccurrence } from './BrowseNodeAllOccurrence.js';
import { BrowseNodeAllStarRatingImpact } from './BrowseNodeAllStarRatingImpact.js';
//# sourceMappingURL=BrowseNodeReviewTopicMetrics.d.ts.map