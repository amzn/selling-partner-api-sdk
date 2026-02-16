/**
 * The ItemReviewSubtopic model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewSubtopic
 * @version 2024-06-01
 */
export class ItemReviewSubtopic {
    /**
     * Constructs a <code>ItemReviewSubtopic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewSubtopic} obj Optional instance to populate.
     * @return {ItemReviewSubtopic} The populated <code>ItemReviewSubtopic</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewSubtopic): ItemReviewSubtopic;
    /**
     * Constructs a new <code>ItemReviewSubtopic</code>.
     * Details of the subtopic for an item review topic.
     * @alias module:customerFeedback_2024_06_01/model/ItemReviewSubtopic
     * @class
     * @param subtopic {String} The name of the subtopic.
     * @param metrics {ItemReviewSubtopicMetrics}
     */
    constructor(subtopic: string, metrics: ItemReviewSubtopicMetrics);
    subtopic: string;
    metrics: ItemReviewSubtopicMetrics;
    /**
     * A list of up to three snippets from reviews that contain the subtopic. This value is `null` if there aren't enough review snippets for the subtopic.
     * @member {String[]} reviewSnippets
     * @type {String[]}
     */
    reviewSnippets: string[];
}
import { ItemReviewSubtopicMetrics } from './ItemReviewSubtopicMetrics.js';
//# sourceMappingURL=ItemReviewSubtopic.d.ts.map