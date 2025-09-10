/**
 * The BrowseNodeReturnTrend model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReturnTrend
 * @version 2024-06-01
 */
export class BrowseNodeReturnTrend {
    /**
     * Constructs a <code>BrowseNodeReturnTrend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReturnTrend} obj Optional instance to populate.
     * @return {BrowseNodeReturnTrend} The populated <code>BrowseNodeReturnTrend</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReturnTrend): BrowseNodeReturnTrend;
    /**
     * Constructs a new <code>BrowseNodeReturnTrend</code>.
     * The trend of return topic metrics for all items in the requested browse node.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReturnTrend
     * @class
     * @param topic {String} The name of the topic.
     * @param trendMetrics {[BrowseNodeReturnTrendPoint]} The browse node return trend metrics.
     */
    constructor(topic: string, trendMetrics: [BrowseNodeReturnTrendPoint]);
    topic: string;
    trendMetrics: [BrowseNodeReturnTrendPoint];
}
import { BrowseNodeReturnTrendPoint } from './BrowseNodeReturnTrendPoint.js';
//# sourceMappingURL=BrowseNodeReturnTrend.d.ts.map