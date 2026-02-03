/**
 * The BrowseNodeReviewTopics model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReviewTopics
 * @version 2024-06-01
 */
export class BrowseNodeReviewTopics {
    /**
     * Constructs a <code>BrowseNodeReviewTopics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReviewTopics} obj Optional instance to populate.
     * @return {BrowseNodeReviewTopics} The populated <code>BrowseNodeReviewTopics</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReviewTopics): BrowseNodeReviewTopics;
    /**
     * A list of the most positive review topics. When the `sortBy` query parameter is set to `MENTIONS`, the number of reviews of items within the requested browse node that mention the topic determine the topic's placement in the list. When `sortBy` is set to `STAR_RATING_IMPACT`, the effect that the topic has on the star rating of items within the requested browse node determine placement in the list. This value is `null` if there are not enough positive reviews for the requested browse node.  **Max length:** 10
     * @member {Array[]} positiveTopics
     * @type {Array[]}
     */
    positiveTopics: any[][];
    /**
     * A list of the most negative review topics. When the `sortBy` query parameter is set to `MENTIONS`, the number of reviews of items within the requested browse node that mention the topic determine the topic's placement in the list. When `sortBy` is set to `STAR_RATING_IMPACT`, the effect that the topic has on the star rating of items within the requested browse node determine placement in the list. This value is `null` if there are not enough negative reviews for the requested browse node.  **Max length:** 10
     * @member {Array[]} negativeTopics
     * @type {Array[]}
     */
    negativeTopics: any[][];
}
//# sourceMappingURL=BrowseNodeReviewTopics.d.ts.map