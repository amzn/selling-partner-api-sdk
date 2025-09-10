/**
 * The ChildAsinMentionMetrics model module.
 * @module customerFeedback_2024_06_01/model/ChildAsinMentionMetrics
 * @version 2024-06-01
 */
export class ChildAsinMentionMetrics {
    /**
     * Constructs a <code>ChildAsinMentionMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ChildAsinMentionMetrics} obj Optional instance to populate.
     * @return {ChildAsinMentionMetrics} The populated <code>ChildAsinMentionMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: ChildAsinMentionMetrics): ChildAsinMentionMetrics;
    /**
     * Constructs a new <code>ChildAsinMentionMetrics</code>.
     * The child ASIN review topic mention metrics.
     * @alias module:customerFeedback_2024_06_01/model/ChildAsinMentionMetrics
     * @class
     * @param asin {String} The child ASIN of the requested item.
     * @param numberOfMentions {Number} The number of times reviews of the child ASIN mention the topic.
     */
    constructor(asin: string, numberOfMentions: number);
    asin: string;
    numberOfMentions: number;
}
//# sourceMappingURL=ChildAsinMentionMetrics.d.ts.map