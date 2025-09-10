/**
 * The PackageDimensions model module.
 * @module merchantfulfillment_v0/model/PackageDimensions
 * @version v0
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
     * A number that represents the given package dimension.
     * @member {Number} length
     * @type {Number}
     */
    length: number;
    /**
     * A number that represents the given package dimension.
     * @member {Number} width
     * @type {Number}
     */
    width: number;
    /**
     * A number that represents the given package dimension.
     * @member {Number} height
     * @type {Number}
     */
    height: number;
    /**
     * @member {UnitOfLength} unit
     * @type {UnitOfLength}
     */
    unit: UnitOfLength;
    /**
     * @member {PredefinedPackageDimensions} predefinedPackageDimensions
     * @type {PredefinedPackageDimensions}
     */
    predefinedPackageDimensions: PredefinedPackageDimensions;
}
import { UnitOfLength } from './UnitOfLength.js';
import { PredefinedPackageDimensions } from './PredefinedPackageDimensions.js';
//# sourceMappingURL=PackageDimensions.d.ts.map