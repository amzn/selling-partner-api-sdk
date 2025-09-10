/**
 * The BrowseNodeAllStarRatingImpact model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeAllStarRatingImpact
 * @version 2024-06-01
 */
export class BrowseNodeAllStarRatingImpact {
    /**
     * Constructs a <code>BrowseNodeAllStarRatingImpact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeAllStarRatingImpact} obj Optional instance to populate.
     * @return {BrowseNodeAllStarRatingImpact} The populated <code>BrowseNodeAllStarRatingImpact</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeAllStarRatingImpact): BrowseNodeAllStarRatingImpact;
    /**
     * Constructs a new <code>BrowseNodeAllStarRatingImpact</code>.
     * The effects of a topic on the star ratings in a browse node.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeAllStarRatingImpact
     * @class
     * @param topTwentyFivePercentProducts {Number} The effect of the topic on the star rating of the top 25 percent of products in the browse node. This value can be positive or negative.
     * @param allProducts {Number} The effect of the topic on the star rating of all products in the browse node. This value can be positive or negative.
     */
    constructor(topTwentyFivePercentProducts: number, allProducts: number);
    topTwentyFivePercentProducts: number;
    allProducts: number;
}
//# sourceMappingURL=BrowseNodeAllStarRatingImpact.d.ts.map