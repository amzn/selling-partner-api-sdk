/**
 * The ItemReviewTrend model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewTrend
 * @version 2024-06-01
 */
export class ItemReviewTrend {
    /**
     * Constructs a <code>ItemReviewTrend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewTrend} obj Optional instance to populate.
     * @return {ItemReviewTrend} The populated <code>ItemReviewTrend</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewTrend): ItemReviewTrend;
    /**
     * Constructs a new <code>ItemReviewTrend</code>.
     * The trend of review topic metrics for the requested item.
     * @alias module:customerFeedback_2024_06_01/model/ItemReviewTrend
     * @class
     * @param topic {String} The name of the item review topic.
     * @param trendMetrics {Array[]} The item's review trend metrics for the past six months.
     */
    constructor(topic: string, trendMetrics: any[][]);
    topic: string;
    trendMetrics: any[][];
}
//# sourceMappingURL=ItemReviewTrend.d.ts.map