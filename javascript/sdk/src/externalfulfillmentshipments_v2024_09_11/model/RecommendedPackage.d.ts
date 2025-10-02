/**
 * The RecommendedPackage model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/RecommendedPackage
 * @version 2024-09-11
 */
export class RecommendedPackage {
    /**
     * Constructs a <code>RecommendedPackage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RecommendedPackage} obj Optional instance to populate.
     * @return {RecommendedPackage} The populated <code>RecommendedPackage</code> instance.
     */
    static constructFromObject(data: any, obj: RecommendedPackage): RecommendedPackage;
    /**
     * Constructs a new <code>RecommendedPackage</code>.
     * Recommendations for a package
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/RecommendedPackage
     * @class
     * @param dimensions {PackageDimensions}
     * @param weight {Weight}
     * @param lineItems {[RecommendedPackageLineItem]} A list of line items to be contained in a recommended package. This attribute is only for orders that come with specific recommendations for line-item distribution.
     */
    constructor(dimensions: PackageDimensions, weight: Weight, lineItems: [RecommendedPackageLineItem]);
    dimensions: PackageDimensions;
    weight: Weight;
    lineItems: [RecommendedPackageLineItem];
}
import { PackageDimensions } from './PackageDimensions.js';
import { Weight } from './Weight.js';
import { RecommendedPackageLineItem } from './RecommendedPackageLineItem.js';
//# sourceMappingURL=RecommendedPackage.d.ts.map