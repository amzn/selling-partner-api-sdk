/**
 * The BrowseNodeAllOccurrence model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeAllOccurrence
 * @version 2024-06-01
 */
export class BrowseNodeAllOccurrence {
    /**
     * Constructs a <code>BrowseNodeAllOccurrence</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeAllOccurrence} obj Optional instance to populate.
     * @return {BrowseNodeAllOccurrence} The populated <code>BrowseNodeAllOccurrence</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeAllOccurrence): BrowseNodeAllOccurrence;
    /**
     * Constructs a new <code>BrowseNodeAllOccurrence</code>.
     * The browse node review occurrence metrics.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeAllOccurrence
     * @class
     * @param topTwentyFivePercentProducts {Number} The percentage of reviews of the top 25 percent of products in the browse node that mention the topic.
     * @param allProducts {Number} The percentage of reviews of products in the browse node that mention the topic.
     */
    constructor(topTwentyFivePercentProducts: number, allProducts: number);
    topTwentyFivePercentProducts: number;
    allProducts: number;
}
//# sourceMappingURL=BrowseNodeAllOccurrence.d.ts.map