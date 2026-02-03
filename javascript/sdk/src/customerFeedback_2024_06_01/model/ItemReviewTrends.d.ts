/**
 * The ItemReviewTrends model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewTrends
 * @version 2024-06-01
 */
export class ItemReviewTrends {
    /**
     * Constructs a <code>ItemReviewTrends</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewTrends} obj Optional instance to populate.
     * @return {ItemReviewTrends} The populated <code>ItemReviewTrends</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewTrends): ItemReviewTrends;
    /**
     * A list of the most positive review topics. The percentage of reviews that contain the topic determines the topic's placement in the list. This value is `null` if there are not enough positive reviews for the specified ASIN.  **Max length:** 10
     * @member {Array[]} positiveTopics
     * @type {Array[]}
     */
    positiveTopics: any[][];
    /**
     * A list of the most negative review topics. The percentage of reviews that contain the topic determines the topic's placement in the list. This value is `null` if there are not enough negative reviews for the specified ASIN.  **Max length:** 10
     * @member {Array[]} negativeTopics
     * @type {Array[]}
     */
    negativeTopics: any[][];
}
//# sourceMappingURL=ItemReviewTrends.d.ts.map