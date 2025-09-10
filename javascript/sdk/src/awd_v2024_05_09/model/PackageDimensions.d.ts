/**
 * The PackageDimensions model module.
 * @module awd_v2024_05_09/model/PackageDimensions
 * @version 2024-05-09
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
     * Dimensions of the package.
     * @alias module:awd_v2024_05_09/model/PackageDimensions
     * @class
     * @param height {Number} Height of the package.
     * @param length {Number} Length of the package.
     * @param unitOfMeasurement {DimensionUnitOfMeasurement}
     * @param width {Number} Width of the package.
     */
    constructor(height: number, length: number, unitOfMeasurement: DimensionUnitOfMeasurement, width: number);
    height: number;
    length: number;
    unitOfMeasurement: DimensionUnitOfMeasurement;
    width: number;
}
import { DimensionUnitOfMeasurement } from './DimensionUnitOfMeasurement.js';
//# sourceMappingURL=PackageDimensions.d.ts.map