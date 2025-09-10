/**
 * The SkuIneligibilityReason model module.
 * @module awd_v2024_05_09/model/SkuIneligibilityReason
 * @version 2024-05-09
 */
export class SkuIneligibilityReason {
    /**
     * Constructs a <code>SkuIneligibilityReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SkuIneligibilityReason} obj Optional instance to populate.
     * @return {SkuIneligibilityReason} The populated <code>SkuIneligibilityReason</code> instance.
     */
    static constructFromObject(data: any, obj: SkuIneligibilityReason): SkuIneligibilityReason;
    /**
     * Constructs a new <code>SkuIneligibilityReason</code>.
     * Represents the ineligibility reason for one SKU.
     * @alias module:awd_v2024_05_09/model/SkuIneligibilityReason
     * @class
     * @param code {String} Code for the SKU ineligibility.
     * @param description {String} Detailed description of the SKU ineligibility.
     */
    constructor(code: string, description: string);
    code: string;
    description: string;
}
//# sourceMappingURL=SkuIneligibilityReason.d.ts.map