/**
 * The IneligibilityReason model module.
 * @module shipping_v2/model/IneligibilityReason
 * @version v2
 */
export class IneligibilityReason {
    /**
     * Constructs a <code>IneligibilityReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {IneligibilityReason} obj Optional instance to populate.
     * @return {IneligibilityReason} The populated <code>IneligibilityReason</code> instance.
     */
    static constructFromObject(data: any, obj: IneligibilityReason): IneligibilityReason;
    /**
     * Constructs a new <code>IneligibilityReason</code>.
     * The reason why a shipping service offering is ineligible.
     * @alias module:shipping_v2/model/IneligibilityReason
     * @class
     * @param code {IneligibilityReasonCode}
     * @param message {String} The ineligibility reason.
     */
    constructor(code: IneligibilityReasonCode, message: string);
    code: IneligibilityReasonCode;
    message: string;
}
import { IneligibilityReasonCode } from './IneligibilityReasonCode.js';
//# sourceMappingURL=IneligibilityReason.d.ts.map