/**
 * The SkuEligibility model module.
 * @module awd_v2024_05_09/model/SkuEligibility
 * @version 2024-05-09
 */
export class SkuEligibility {
    /**
     * Constructs a <code>SkuEligibility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SkuEligibility} obj Optional instance to populate.
     * @return {SkuEligibility} The populated <code>SkuEligibility</code> instance.
     */
    static constructFromObject(data: any, obj: SkuEligibility): SkuEligibility;
    /**
     * Constructs a new <code>SkuEligibility</code>.
     * Represents eligibility of one SKU.
     * @alias module:awd_v2024_05_09/model/SkuEligibility
     * @class
     * @param packageQuantity {DistributionPackageQuantity}
     * @param status {InboundEligibilityStatus}
     */
    constructor(packageQuantity: DistributionPackageQuantity, status: InboundEligibilityStatus);
    packageQuantity: DistributionPackageQuantity;
    status: InboundEligibilityStatus;
    /**
     * If not eligible, these are list of error codes and descriptions.
     * @member {[SkuIneligibilityReason]} ineligibilityReasons
     * @type {[SkuIneligibilityReason]}
     */
    ineligibilityReasons: [SkuIneligibilityReason];
}
import { DistributionPackageQuantity } from './DistributionPackageQuantity.js';
import { InboundEligibilityStatus } from './InboundEligibilityStatus.js';
import { SkuIneligibilityReason } from './SkuIneligibilityReason.js';
//# sourceMappingURL=SkuEligibility.d.ts.map