/**
 * The RecommendedPackageLineItem model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/RecommendedPackageLineItem
 * @version 2024-09-11
 */
export class RecommendedPackageLineItem {
    /**
     * Constructs a <code>RecommendedPackageLineItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RecommendedPackageLineItem} obj Optional instance to populate.
     * @return {RecommendedPackageLineItem} The populated <code>RecommendedPackageLineItem</code> instance.
     */
    static constructFromObject(data: any, obj: RecommendedPackageLineItem): RecommendedPackageLineItem;
    /**
     * Constructs a new <code>RecommendedPackageLineItem</code>.
     * A line item to be contained in a recommended package. This attribute is provided only for orders that come with a specific recommendation of line-item distribution within the package recommendations.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/RecommendedPackageLineItem
     * @class
     * @param lineItemId {String} An ID for a line item in an order. The line item should be present in the recommended package. This identifier has the same value as the ID of the line item present in the order.
     */
    constructor(lineItemId: string);
    lineItemId: string;
}
//# sourceMappingURL=RecommendedPackageLineItem.d.ts.map