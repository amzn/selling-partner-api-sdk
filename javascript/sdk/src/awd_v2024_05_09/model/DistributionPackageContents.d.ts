/**
 * The DistributionPackageContents model module.
 * @module awd_v2024_05_09/model/DistributionPackageContents
 * @version 2024-05-09
 */
export class DistributionPackageContents {
    /**
     * Constructs a <code>DistributionPackageContents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DistributionPackageContents} obj Optional instance to populate.
     * @return {DistributionPackageContents} The populated <code>DistributionPackageContents</code> instance.
     */
    static constructFromObject(data: any, obj: DistributionPackageContents): DistributionPackageContents;
    /**
     * This is required only when `DistributionPackageType=PALLET`.
     * @member {DistributionPackageQuantity[]} packages
     * @type {DistributionPackageQuantity[]}
     */
    packages: DistributionPackageQuantity[];
    /**
     * This is required only when `DistributionPackageType=CASE`.
     * @member {ProductQuantity[]} products
     * @type {ProductQuantity[]}
     */
    products: ProductQuantity[];
}
import { DistributionPackageQuantity } from './DistributionPackageQuantity.js';
import { ProductQuantity } from './ProductQuantity.js';
//# sourceMappingURL=DistributionPackageContents.d.ts.map