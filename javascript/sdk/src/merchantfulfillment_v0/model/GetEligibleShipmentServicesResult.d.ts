/**
 * The GetEligibleShipmentServicesResult model module.
 * @module merchantfulfillment_v0/model/GetEligibleShipmentServicesResult
 * @version v0
 */
export class GetEligibleShipmentServicesResult {
    /**
     * Constructs a <code>GetEligibleShipmentServicesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetEligibleShipmentServicesResult} obj Optional instance to populate.
     * @return {GetEligibleShipmentServicesResult} The populated <code>GetEligibleShipmentServicesResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetEligibleShipmentServicesResult): GetEligibleShipmentServicesResult;
    /**
     * Constructs a new <code>GetEligibleShipmentServicesResult</code>.
     * The payload for the &#x60;getEligibleShipmentServices&#x60; operation.
     * @alias module:merchantfulfillment_v0/model/GetEligibleShipmentServicesResult
     * @class
     * @param shippingServiceList {ShippingService[]} A list of shipping services offers.
     */
    constructor(shippingServiceList: ShippingService[]);
    shippingServiceList: ShippingService[];
    /**
     * List of services that are for some reason unavailable for this request
     * @member {RejectedShippingService[]} rejectedShippingServiceList
     * @type {RejectedShippingService[]}
     */
    rejectedShippingServiceList: RejectedShippingService[];
    /**
     * A list of temporarily unavailable carriers.
     * @member {TemporarilyUnavailableCarrier[]} temporarilyUnavailableCarrierList
     * @type {TemporarilyUnavailableCarrier[]}
     */
    temporarilyUnavailableCarrierList: TemporarilyUnavailableCarrier[];
    /**
     * List of carriers whose terms and conditions were not accepted by the seller.
     * @member {TermsAndConditionsNotAcceptedCarrier[]} termsAndConditionsNotAcceptedCarrierList
     * @type {TermsAndConditionsNotAcceptedCarrier[]}
     */
    termsAndConditionsNotAcceptedCarrierList: TermsAndConditionsNotAcceptedCarrier[];
}
import { ShippingService } from './ShippingService.js';
import { RejectedShippingService } from './RejectedShippingService.js';
import { TemporarilyUnavailableCarrier } from './TemporarilyUnavailableCarrier.js';
import { TermsAndConditionsNotAcceptedCarrier } from './TermsAndConditionsNotAcceptedCarrier.js';
//# sourceMappingURL=GetEligibleShipmentServicesResult.d.ts.map