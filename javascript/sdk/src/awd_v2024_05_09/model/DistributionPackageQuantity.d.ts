/**
 * The DistributionPackageQuantity model module.
 * @module awd_v2024_05_09/model/DistributionPackageQuantity
 * @version 2024-05-09
 */
export class DistributionPackageQuantity {
    /**
     * Constructs a <code>DistributionPackageQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DistributionPackageQuantity} obj Optional instance to populate.
     * @return {DistributionPackageQuantity} The populated <code>DistributionPackageQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: DistributionPackageQuantity): DistributionPackageQuantity;
    /**
     * Constructs a new <code>DistributionPackageQuantity</code>.
     * Represents a distribution package with its respective quantity.
     * @alias module:awd_v2024_05_09/model/DistributionPackageQuantity
     * @class
     * @param count {Number} Number of cases or pallets with the same package configuration.
     * @param distributionPackage {DistributionPackage}
     */
    constructor(count: number, distributionPackage: DistributionPackage);
    count: number;
    distributionPackage: DistributionPackage;
}
import { DistributionPackage } from './DistributionPackage.js';
//# sourceMappingURL=DistributionPackageQuantity.d.ts.map