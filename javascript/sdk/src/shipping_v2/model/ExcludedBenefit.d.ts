/**
 * The ExcludedBenefit model module.
 * @module shipping_v2/model/ExcludedBenefit
 * @version v2
 */
export class ExcludedBenefit {
    /**
     * Constructs a <code>ExcludedBenefit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ExcludedBenefit} obj Optional instance to populate.
     * @return {ExcludedBenefit} The populated <code>ExcludedBenefit</code> instance.
     */
    static constructFromObject(data: any, obj: ExcludedBenefit): ExcludedBenefit;
    /**
     * Constructs a new <code>ExcludedBenefit</code>.
     * Object representing a benefit that is excluded for a shipping offer or rate.
     * @alias module:shipping_v2/model/ExcludedBenefit
     * @class
     * @param benefit {String} benefit
     */
    constructor(benefit: string);
    benefit: string;
    /**
     * List of reasons (eg. LATE_DELIVERY_RISK, etc.) indicating why a benefit is excluded for a shipping offer.
     * @member {String[]} reasonCodes
     * @type {String[]}
     */
    reasonCodes: string[];
}
//# sourceMappingURL=ExcludedBenefit.d.ts.map