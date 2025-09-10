/**
 * The ReviewTrendMetrics model module.
 * @module customerFeedback_2024_06_01/model/ReviewTrendMetrics
 * @version 2024-06-01
 */
export class ReviewTrendMetrics {
    /**
     * Constructs a <code>ReviewTrendMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReviewTrendMetrics} obj Optional instance to populate.
     * @return {ReviewTrendMetrics} The populated <code>ReviewTrendMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: ReviewTrendMetrics): ReviewTrendMetrics;
    /**
     * Constructs a new <code>ReviewTrendMetrics</code>.
     * The item review trend metrics.
     * @alias module:customerFeedback_2024_06_01/model/ReviewTrendMetrics
     * @class
     * @param occurrencePercentage {Number} The percentage of reviews that mention the topic.
     */
    constructor(occurrencePercentage: number);
    occurrencePercentage: number;
}
//# sourceMappingURL=ReviewTrendMetrics.d.ts.map