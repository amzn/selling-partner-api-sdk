/**
 * The ItemReviewTopic model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewTopic
 * @version 2024-06-01
 */
export class ItemReviewTopic {
    /**
     * Constructs a <code>ItemReviewTopic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewTopic} obj Optional instance to populate.
     * @return {ItemReviewTopic} The populated <code>ItemReviewTopic</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewTopic): ItemReviewTopic;
    /**
     * Constructs a new <code>ItemReviewTopic</code>.
     * Details of item review topic.
     * @alias module:customerFeedback_2024_06_01/model/ItemReviewTopic
     * @class
     * @param topic {String} The name of the item review topic.
     * @param asinMetrics {ItemReviewTopicMetrics}
     */
    constructor(topic: string, asinMetrics: ItemReviewTopicMetrics);
    topic: string;
    asinMetrics: ItemReviewTopicMetrics;
    /**
     * @member {ItemReviewTopicMetrics} parentAsinMetrics
     * @type {ItemReviewTopicMetrics}
     */
    parentAsinMetrics: ItemReviewTopicMetrics;
    /**
     * @member {ItemReviewBrowseNodeMetrics} browseNodeMetrics
     * @type {ItemReviewBrowseNodeMetrics}
     */
    browseNodeMetrics: ItemReviewBrowseNodeMetrics;
    /**
     * @member {ChildAsinMetrics} childAsinMetrics
     * @type {ChildAsinMetrics}
     */
    childAsinMetrics: ChildAsinMetrics;
    /**
     * A list of up to three snippets from reviews that contain the topic. This value is `null` if there aren't enough review snippets for the topic.
     * @member {Array[]} reviewSnippets
     * @type {Array[]}
     */
    reviewSnippets: any[][];
    /**
     * A list of up to five top subtopics for the topic. The percentage of customer reviews that mention the subtopic determine the topic's placement in the list. This value is `null` if there are no subtopics.
     * @member {Array[]} subtopics
     * @type {Array[]}
     */
    subtopics: any[][];
}
import { ItemReviewTopicMetrics } from './ItemReviewTopicMetrics.js';
import { ItemReviewBrowseNodeMetrics } from './ItemReviewBrowseNodeMetrics.js';
import { ChildAsinMetrics } from './ChildAsinMetrics.js';
//# sourceMappingURL=ItemReviewTopic.d.ts.map