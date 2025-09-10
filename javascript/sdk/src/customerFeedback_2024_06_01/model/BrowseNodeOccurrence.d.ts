/**
 * The BrowseNodeOccurrence model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeOccurrence
 * @version 2024-06-01
 */
export class BrowseNodeOccurrence {
    /**
     * Constructs a <code>BrowseNodeOccurrence</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeOccurrence} obj Optional instance to populate.
     * @return {BrowseNodeOccurrence} The populated <code>BrowseNodeOccurrence</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeOccurrence): BrowseNodeOccurrence;
    /**
     * Constructs a new <code>BrowseNodeOccurrence</code>.
     * The browse node review trend occurrence metrics.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeOccurrence
     * @class
     * @param allProducts {Number} The percentage of reviews of products in the browse node that mention a topic.
     */
    constructor(allProducts: number);
    allProducts: number;
}
//# sourceMappingURL=BrowseNodeOccurrence.d.ts.map