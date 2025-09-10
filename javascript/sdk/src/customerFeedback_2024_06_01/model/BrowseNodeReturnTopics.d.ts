/**
 * The BrowseNodeReturnTopics model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReturnTopics
 * @version 2024-06-01
 */
export class BrowseNodeReturnTopics {
    /**
     * Constructs a <code>BrowseNodeReturnTopics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReturnTopics} obj Optional instance to populate.
     * @return {BrowseNodeReturnTopics} The populated <code>BrowseNodeReturnTopics</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReturnTopics): BrowseNodeReturnTopics;
    /**
     * Constructs a new <code>BrowseNodeReturnTopics</code>.
     * Topics from returns for all items in a browse node.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReturnTopics
     * @class
     * @param topic {String} The name of the return feedback topic .
     * @param browseNodeMetrics {BrowseNodeTrendMetrics}
     */
    constructor(topic: string, browseNodeMetrics: BrowseNodeTrendMetrics);
    topic: string;
    browseNodeMetrics: BrowseNodeTrendMetrics;
}
import { BrowseNodeTrendMetrics } from './BrowseNodeTrendMetrics.js';
//# sourceMappingURL=BrowseNodeReturnTopics.d.ts.map