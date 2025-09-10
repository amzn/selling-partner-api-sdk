/**
 * The ItemReviewSubtopicMetrics model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewSubtopicMetrics
 * @version 2024-06-01
 */
export class ItemReviewSubtopicMetrics {
    /**
     * Constructs a <code>ItemReviewSubtopicMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewSubtopicMetrics} obj Optional instance to populate.
     * @return {ItemReviewSubtopicMetrics} The populated <code>ItemReviewSubtopicMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewSubtopicMetrics): ItemReviewSubtopicMetrics;
    /**
     * Constructs a new <code>ItemReviewSubtopicMetrics</code>.
     * The item review subtopic metrics.
     * @alias module:customerFeedback_2024_06_01/model/ItemReviewSubtopicMetrics
     * @class
     * @param numberOfMentions {Number} The number of times that reviews mention the subtopic.
     * @param occurrencePercentage {Number} The percentage of reviews that mention the subtopic.
     */
    constructor(numberOfMentions: number, occurrencePercentage: number);
    numberOfMentions: number;
    occurrencePercentage: number;
}
//# sourceMappingURL=ItemReviewSubtopicMetrics.d.ts.map