/**
 * The ItemReviewTopicMetrics model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewTopicMetrics
 * @version 2024-06-01
 */
export class ItemReviewTopicMetrics {
    /**
     * Constructs a <code>ItemReviewTopicMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewTopicMetrics} obj Optional instance to populate.
     * @return {ItemReviewTopicMetrics} The populated <code>ItemReviewTopicMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewTopicMetrics): ItemReviewTopicMetrics;
    /**
     * The number of times that reviews mention the topic. This value is `null` if reviews do not mention the topic frequently enough.
     * @member {Number} numberOfMentions
     * @type {Number}
     */
    numberOfMentions: number;
    /**
     * The percentage of customer reviews that mention the topic. This value is `null` if reviews do not mention the topic frequently enough.
     * @member {Number} occurrencePercentage
     * @type {Number}
     */
    occurrencePercentage: number;
    /**
     * The effect of the topic on the star rating of the ASIN. This value can be positive or negative. This value is `null` if the topic does't affect the star rating of the ASIN.
     * @member {Number} starRatingImpact
     * @type {Number}
     */
    starRatingImpact: number;
}
//# sourceMappingURL=ItemReviewTopicMetrics.d.ts.map