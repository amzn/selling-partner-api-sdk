/**
 * The BrowseNodeReviewTrend model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReviewTrend
 * @version 2024-06-01
 */
export class BrowseNodeReviewTrend {
    /**
     * Constructs a <code>BrowseNodeReviewTrend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReviewTrend} obj Optional instance to populate.
     * @return {BrowseNodeReviewTrend} The populated <code>BrowseNodeReviewTrend</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReviewTrend): BrowseNodeReviewTrend;
    /**
     * Constructs a new <code>BrowseNodeReviewTrend</code>.
     * The trend of review topic metrics for all items in the requested browse node.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReviewTrend
     * @class
     * @param topic {String} The name of the topic.
     * @param trendMetrics {Array[]} The browse node's review trend metrics for the past six months.
     */
    constructor(topic: string, trendMetrics: any[][]);
    topic: string;
    trendMetrics: any[][];
}
//# sourceMappingURL=BrowseNodeReviewTrend.d.ts.map