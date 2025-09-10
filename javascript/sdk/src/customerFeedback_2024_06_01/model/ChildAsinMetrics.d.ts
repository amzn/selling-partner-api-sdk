/**
 * The ChildAsinMetrics model module.
 * @module customerFeedback_2024_06_01/model/ChildAsinMetrics
 * @version 2024-06-01
 */
export class ChildAsinMetrics {
    /**
     * Constructs a <code>ChildAsinMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ChildAsinMetrics} obj Optional instance to populate.
     * @return {ChildAsinMetrics} The populated <code>ChildAsinMetrics</code> instance.
     */
    static constructFromObject(data: any, obj: ChildAsinMetrics): ChildAsinMetrics;
    /**
     * @member {ChildAsinMentionMetrics} mostMentions
     * @type {ChildAsinMentionMetrics}
     */
    mostMentions: ChildAsinMentionMetrics;
    /**
     * @member {ChildAsinMentionMetrics} leastMentions
     * @type {ChildAsinMentionMetrics}
     */
    leastMentions: ChildAsinMentionMetrics;
}
import { ChildAsinMentionMetrics } from './ChildAsinMentionMetrics.js';
//# sourceMappingURL=ChildAsinMetrics.d.ts.map