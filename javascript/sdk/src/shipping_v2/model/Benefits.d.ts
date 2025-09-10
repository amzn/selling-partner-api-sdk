/**
 * The Benefits model module.
 * @module shipping_v2/model/Benefits
 * @version v2
 */
export class Benefits {
    /**
     * Constructs a <code>Benefits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Benefits} obj Optional instance to populate.
     * @return {Benefits} The populated <code>Benefits</code> instance.
     */
    static constructFromObject(data: any, obj: Benefits): Benefits;
    /**
     * Constructs a new <code>Benefits</code>.
     * Benefits that are included and excluded for each shipping offer. Benefits represents services provided by Amazon (eg. CLAIMS_PROTECTED, etc.) when sellers purchase shipping through Amazon. Benefit details will be made available for any shipment placed on or after January 1st 2024 00:00 UTC.
     * @alias module:shipping_v2/model/Benefits
     * @class
     * @param includedBenefits {[String]} A list of included benefits.
     * @param excludedBenefits {[ExcludedBenefit]} A list of excluded benefit. Refer to the ExcludeBenefit object for further documentation
     */
    constructor(includedBenefits: [string], excludedBenefits: [ExcludedBenefit]);
    includedBenefits: [string];
    excludedBenefits: [ExcludedBenefit];
}
import { ExcludedBenefit } from './ExcludedBenefit.js';
//# sourceMappingURL=Benefits.d.ts.map