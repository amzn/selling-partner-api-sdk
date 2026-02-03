/**
 * The ItemReviewTopics model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewTopics
 * @version 2024-06-01
 */
export class ItemReviewTopics {
    /**
     * Constructs a <code>ItemReviewTopics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewTopics} obj Optional instance to populate.
     * @return {ItemReviewTopics} The populated <code>ItemReviewTopics</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewTopics): ItemReviewTopics;
    /**
     * A list of the most positive review topics. When the `sortBy` query parameter is set to `MENTIONS`, the number of reviews that mention the topic determines the topic's placement in the list. When `sortBy` is set to `STAR_RATING_IMPACT`, the effect that the topic has on the star rating of the item determines placement in the list. This value is `null` if there are not enough positive reviews for the specified ASIN.  **Max length:** 10
     * @member {Array[]} positiveTopics
     * @type {Array[]}
     */
    positiveTopics: any[][];
    /**
     * A list of the most negative review topics. When the `sortBy` query parameter is set to `MENTIONS`, the number of reviews that mention the topic determines the topic's placement in the list. When `sortBy` is set to `STAR_RATING_IMPACT`, the effect that the topic has on the star rating of the item determines placement in the list. This value is `null` if there are not enough negative reviews for the specified ASIN.  **Max length:** 10
     * @member {Array[]} negativeTopics
     * @type {Array[]}
     */
    negativeTopics: any[][];
}
//# sourceMappingURL=ItemReviewTopics.d.ts.map