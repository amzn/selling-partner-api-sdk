/**
 * The BrowseNodeReviewTrends model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReviewTrends
 * @version 2024-06-01
 */
export class BrowseNodeReviewTrends {
    /**
     * Constructs a <code>BrowseNodeReviewTrends</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReviewTrends} obj Optional instance to populate.
     * @return {BrowseNodeReviewTrends} The populated <code>BrowseNodeReviewTrends</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReviewTrends): BrowseNodeReviewTrends;
    /**
     * The trends of the most positive review topics. The percentage of reviews that contain the topic across all products in the requested browse node determine the topic's placement in the list. This value is `null` if there aren't enough positive reviews for the requested browse node.  **Max length:** 10
     * @member {BrowseNodeReviewTrend[]} positiveTopics
     * @type {BrowseNodeReviewTrend[]}
     */
    positiveTopics: BrowseNodeReviewTrend[];
    /**
     * The trends of the most negative review topics. The percentage of reviews that contain the topic across all products in the requested browse node determine the topic's placement in the list. This value is `null` if there aren't enough positive reviews for the requested browse node.  **Max length:** 10
     * @member {BrowseNodeReviewTrend[]} negativeTopics
     * @type {BrowseNodeReviewTrend[]}
     */
    negativeTopics: BrowseNodeReviewTrend[];
}
import { BrowseNodeReviewTrend } from './BrowseNodeReviewTrend.js';
//# sourceMappingURL=BrowseNodeReviewTrends.d.ts.map