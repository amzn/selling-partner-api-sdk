/**
 * The InboundEligibility model module.
 * @module awd_v2024_05_09/model/InboundEligibility
 * @version 2024-05-09
 */
export class InboundEligibility {
    /**
     * Constructs a <code>InboundEligibility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundEligibility} obj Optional instance to populate.
     * @return {InboundEligibility} The populated <code>InboundEligibility</code> instance.
     */
    static constructFromObject(data: any, obj: InboundEligibility): InboundEligibility;
    /**
     * Constructs a new <code>InboundEligibility</code>.
     * Represents the eligibility status of the inbound packages.
     * @alias module:awd_v2024_05_09/model/InboundEligibility
     * @class
     * @param packagesToInbound {Array[]} Details on SKU eligibility for each inbound package.
     * @param previewedAt {Date} Timestamp when the eligibility check is performed.
     * @param status {InboundEligibilityStatus}
     */
    constructor(packagesToInbound: any[][], previewedAt: Date, status: InboundEligibilityStatus);
    packagesToInbound: any[][];
    previewedAt: Date;
    status: InboundEligibilityStatus;
    /**
     * If there are order level eligibility issues, then this list will contain those error codes and descriptions.
     * @member {Array[]} ineligibilityReasons
     * @type {Array[]}
     */
    ineligibilityReasons: any[][];
}
import { InboundEligibilityStatus } from './InboundEligibilityStatus.js';
//# sourceMappingURL=InboundEligibility.d.ts.map