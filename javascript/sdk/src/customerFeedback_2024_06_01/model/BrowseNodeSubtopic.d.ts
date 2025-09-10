/**
 * The BrowseNodeSubtopic model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeSubtopic
 * @version 2024-06-01
 */
export class BrowseNodeSubtopic {
    /**
     * Constructs a <code>BrowseNodeSubtopic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeSubtopic} obj Optional instance to populate.
     * @return {BrowseNodeSubtopic} The populated <code>BrowseNodeSubtopic</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeSubtopic): BrowseNodeSubtopic;
    /**
     * Constructs a new <code>BrowseNodeSubtopic</code>.
     * The browse node review subtopic.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeSubtopic
     * @class
     * @param subtopic {String} The name of the browse node review subtopic.
     * @param metrics {BrowseNodeReviewSubtopicMetrics}
     */
    constructor(subtopic: string, metrics: BrowseNodeReviewSubtopicMetrics);
    subtopic: string;
    metrics: BrowseNodeReviewSubtopicMetrics;
    /**
     * A list of up to three snippets from reviews that contain the topic. This value is `null` if there aren't enough review snippets for the subtopic.
     * @member {[String]} reviewSnippets
     * @type {[String]}
     */
    reviewSnippets: [string];
}
import { BrowseNodeReviewSubtopicMetrics } from './BrowseNodeReviewSubtopicMetrics.js';
//# sourceMappingURL=BrowseNodeSubtopic.d.ts.map