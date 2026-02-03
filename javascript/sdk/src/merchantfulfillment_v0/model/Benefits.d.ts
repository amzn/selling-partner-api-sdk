/**
 * The Benefits model module.
 * @module merchantfulfillment_v0/model/Benefits
 * @version v0
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
     * A list of included benefits.
     * @member {Array[]} includedBenefits
     * @type {Array[]}
     */
    includedBenefits: any[][];
    /**
     * A list of excluded benefits. Refer to the `ExcludeBenefit` object for further documentation.
     * @member {Array[]} excludedBenefits
     * @type {Array[]}
     */
    excludedBenefits: any[][];
}
//# sourceMappingURL=Benefits.d.ts.map