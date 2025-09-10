/**
 * The ItemReviewBrowseNodeMetrics model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewBrowseNodeMetrics
 * @version 2024-06-01
 */
export class ItemReviewBrowseNodeMetrics {
    /**
     * Constructs a <code>ItemReviewBrowseNodeMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewBrowseNodeMetrics} obj Optional instance to populate.
     * @return {ItemReviewBrowseNodeMetrics} The populated <code>ItemReviewBrowseNodeMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewBrowseNodeMetrics): ItemReviewBrowseNodeMetrics;
    /**
     * @member {BrowseNodeOccurrence} occurrencePercentage
     * @type {BrowseNodeOccurrence}
     */
    occurrencePercentage: BrowseNodeOccurrence;
    /**
     * @member {BrowseNodeStarRatingImpact} starRatingImpact
     * @type {BrowseNodeStarRatingImpact}
     */
    starRatingImpact: BrowseNodeStarRatingImpact;
}
import { BrowseNodeOccurrence } from './BrowseNodeOccurrence.js';
import { BrowseNodeStarRatingImpact } from './BrowseNodeStarRatingImpact.js';
//# sourceMappingURL=ItemReviewBrowseNodeMetrics.d.ts.map