/**
 * The IneligibleRate model module.
 * @module shipping_v2/model/IneligibleRate
 * @version v2
 */
export class IneligibleRate {
    /**
     * Constructs a <code>IneligibleRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {IneligibleRate} obj Optional instance to populate.
     * @return {IneligibleRate} The populated <code>IneligibleRate</code> instance.
     */
    static constructFromObject(data: any, obj: IneligibleRate): IneligibleRate;
    /**
     * Constructs a new <code>IneligibleRate</code>.
     * Detailed information for an ineligible shipping service offering.
     * @alias module:shipping_v2/model/IneligibleRate
     * @class
     * @param serviceId {String} An identifier for the shipping service.
     * @param serviceName {String} The name of the shipping service.
     * @param carrierName {String} The carrier name for the offering.
     * @param carrierId {String} The carrier identifier for the offering, provided by the carrier.
     * @param ineligibilityReasons {[IneligibilityReason]} A list of reasons why a shipping service offering is ineligible.
     */
    constructor(serviceId: string, serviceName: string, carrierName: string, carrierId: string, ineligibilityReasons: [IneligibilityReason]);
    serviceId: string;
    serviceName: string;
    carrierName: string;
    carrierId: string;
    ineligibilityReasons: [IneligibilityReason];
}
import { IneligibilityReason } from './IneligibilityReason.js';
//# sourceMappingURL=IneligibleRate.d.ts.map