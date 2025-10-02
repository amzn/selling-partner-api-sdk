/**
 * The PackageDimensions model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/PackageDimensions
 * @version 2024-09-11
 */
export class PackageDimensions {
    /**
     * Constructs a <code>PackageDimensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageDimensions} obj Optional instance to populate.
     * @return {PackageDimensions} The populated <code>PackageDimensions</code> instance.
     */
    static constructFromObject(data: any, obj: PackageDimensions): PackageDimensions;
    /**
     * Constructs a new <code>PackageDimensions</code>.
     * The dimensions of a package.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/PackageDimensions
     * @class
     * @param length {Dimension}
     * @param width {Dimension}
     * @param height {Dimension}
     */
    constructor(length: Dimension, width: Dimension, height: Dimension);
    length: Dimension;
    width: Dimension;
    height: Dimension;
}
import { Dimension } from './Dimension.js';
//# sourceMappingURL=PackageDimensions.d.ts.map