/**
 * The DistributionPackage model module.
 * @module awd_v2024_05_09/model/DistributionPackage
 * @version 2024-05-09
 */
export class DistributionPackage {
    /**
     * Constructs a <code>DistributionPackage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DistributionPackage} obj Optional instance to populate.
     * @return {DistributionPackage} The populated <code>DistributionPackage</code> instance.
     */
    static constructFromObject(data: any, obj: DistributionPackage): DistributionPackage;
    /**
     * Constructs a new <code>DistributionPackage</code>.
     * Represents an AWD distribution package.
     * @alias module:awd_v2024_05_09/model/DistributionPackage
     * @class
     * @param contents {DistributionPackageContents}
     * @param measurements {MeasurementData}
     * @param type {DistributionPackageType}
     */
    constructor(contents: DistributionPackageContents, measurements: MeasurementData, type: DistributionPackageType);
    contents: DistributionPackageContents;
    measurements: MeasurementData;
    type: DistributionPackageType;
}
import { DistributionPackageContents } from './DistributionPackageContents.js';
import { MeasurementData } from './MeasurementData.js';
import { DistributionPackageType } from './DistributionPackageType.js';
//# sourceMappingURL=DistributionPackage.d.ts.map