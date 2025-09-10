/**
 * The ExcludedBenefit model module.
 * @module merchantfulfillment_v0/model/ExcludedBenefit
 * @version v0
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
     * A benefit that is being excluded from a shipment.
     * @member {String} benefit
     * @type {String}
     */
    benefit: string;
    /**
     * List of reasons why a benefit is excluded for a shipping offer (for example, `LATE_DELIVERY_RISK`).
     * @member {[String]} reasonCodes
     * @type {[String]}
     */
    reasonCodes: [string];
}
//# sourceMappingURL=ExcludedBenefit.d.ts.map