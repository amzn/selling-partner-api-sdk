/**
 * The MeasurementData model module.
 * @module awd_v2024_05_09/model/MeasurementData
 * @version 2024-05-09
 */
export class MeasurementData {
    /**
     * Constructs a <code>MeasurementData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MeasurementData} obj Optional instance to populate.
     * @return {MeasurementData} The populated <code>MeasurementData</code> instance.
     */
    static constructFromObject(data: any, obj: MeasurementData): MeasurementData;
    /**
     * Constructs a new <code>MeasurementData</code>.
     * Package weight and dimension.
     * @alias module:awd_v2024_05_09/model/MeasurementData
     * @class
     * @param weight {PackageWeight}
     */
    constructor(weight: PackageWeight);
    weight: PackageWeight;
    /**
     * @member {PackageDimensions} dimensions
     * @type {PackageDimensions}
     */
    dimensions: PackageDimensions;
    /**
     * @member {PackageVolume} volume
     * @type {PackageVolume}
     */
    volume: PackageVolume;
}
import { PackageWeight } from './PackageWeight.js';
import { PackageDimensions } from './PackageDimensions.js';
import { PackageVolume } from './PackageVolume.js';
//# sourceMappingURL=MeasurementData.d.ts.map