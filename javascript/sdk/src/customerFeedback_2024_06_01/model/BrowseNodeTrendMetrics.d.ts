/**
 * The BrowseNodeTrendMetrics model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeTrendMetrics
 * @version 2024-06-01
 */
export class BrowseNodeTrendMetrics {
    /**
     * Constructs a <code>BrowseNodeTrendMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeTrendMetrics} obj Optional instance to populate.
     * @return {BrowseNodeTrendMetrics} The populated <code>BrowseNodeTrendMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeTrendMetrics): BrowseNodeTrendMetrics;
    /**
     * Constructs a new <code>BrowseNodeTrendMetrics</code>.
     * A single browse node review or return trend metric.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeTrendMetrics
     * @class
     * @param occurrencePercentage {BrowseNodeOccurrence}
     */
    constructor(occurrencePercentage: BrowseNodeOccurrence);
    occurrencePercentage: BrowseNodeOccurrence;
}
import { BrowseNodeOccurrence } from './BrowseNodeOccurrence.js';
//# sourceMappingURL=BrowseNodeTrendMetrics.d.ts.map