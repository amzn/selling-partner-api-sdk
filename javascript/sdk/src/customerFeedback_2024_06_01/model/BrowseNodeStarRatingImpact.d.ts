/**
 * The BrowseNodeStarRatingImpact model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeStarRatingImpact
 * @version 2024-06-01
 */
export class BrowseNodeStarRatingImpact {
    /**
     * Constructs a <code>BrowseNodeStarRatingImpact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeStarRatingImpact} obj Optional instance to populate.
     * @return {BrowseNodeStarRatingImpact} The populated <code>BrowseNodeStarRatingImpact</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeStarRatingImpact): BrowseNodeStarRatingImpact;
    /**
     * Constructs a new <code>BrowseNodeStarRatingImpact</code>.
     * The effects of a topic on a browse node&#39;s star rating.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeStarRatingImpact
     * @class
     * @param allProducts {Number} The effect of the topic on the star rating for all products in this browse node. This value can be positive or negative.
     */
    constructor(allProducts: number);
    allProducts: number;
}
//# sourceMappingURL=BrowseNodeStarRatingImpact.d.ts.map