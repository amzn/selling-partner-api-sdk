/**
 * The BrowseNodeReviewSubtopicMetrics model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReviewSubtopicMetrics
 * @version 2024-06-01
 */
export class BrowseNodeReviewSubtopicMetrics {
    /**
     * Constructs a <code>BrowseNodeReviewSubtopicMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReviewSubtopicMetrics} obj Optional instance to populate.
     * @return {BrowseNodeReviewSubtopicMetrics} The populated <code>BrowseNodeReviewSubtopicMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReviewSubtopicMetrics): BrowseNodeReviewSubtopicMetrics;
    /**
     * Constructs a new <code>BrowseNodeReviewSubtopicMetrics</code>.
     * The browse node review subtopic metrics.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReviewSubtopicMetrics
     * @class
     * @param occurrencePercentage {Number} The percentage of reviews that mention the subtopic.
     */
    constructor(occurrencePercentage: number);
    occurrencePercentage: number;
}
//# sourceMappingURL=BrowseNodeReviewSubtopicMetrics.d.ts.map