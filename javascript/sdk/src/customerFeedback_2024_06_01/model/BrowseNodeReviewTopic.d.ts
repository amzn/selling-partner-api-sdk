/**
 * The BrowseNodeReviewTopic model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReviewTopic
 * @version 2024-06-01
 */
export class BrowseNodeReviewTopic {
    /**
     * Constructs a <code>BrowseNodeReviewTopic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReviewTopic} obj Optional instance to populate.
     * @return {BrowseNodeReviewTopic} The populated <code>BrowseNodeReviewTopic</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReviewTopic): BrowseNodeReviewTopic;
    /**
     * Constructs a new <code>BrowseNodeReviewTopic</code>.
     * The browse node review topic.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReviewTopic
     * @class
     * @param topic {String} The name browse node review topic.
     * @param browseNodeMetrics {BrowseNodeReviewTopicMetrics}
     */
    constructor(topic: string, browseNodeMetrics: BrowseNodeReviewTopicMetrics);
    topic: string;
    browseNodeMetrics: BrowseNodeReviewTopicMetrics;
    /**
     * A list of up to three snippets from reviews that contain the topic. This value is `null` if there aren't enough review snippets for the topic.
     * @member {Array[]} reviewSnippets
     * @type {Array[]}
     */
    reviewSnippets: any[][];
    /**
     * A list of the five subtopics that occur most frequently. This value is `null` if there are no subtopics.
     * @member {Array[]} subtopics
     * @type {Array[]}
     */
    subtopics: any[][];
}
import { BrowseNodeReviewTopicMetrics } from './BrowseNodeReviewTopicMetrics.js';
//# sourceMappingURL=BrowseNodeReviewTopic.d.ts.map