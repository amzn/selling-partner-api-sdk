/**
 * The GetEligibleShipmentServicesRequest model module.
 * @module merchantfulfillment_v0/model/GetEligibleShipmentServicesRequest
 * @version v0
 */
export class GetEligibleShipmentServicesRequest {
    /**
     * Constructs a <code>GetEligibleShipmentServicesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetEligibleShipmentServicesRequest} obj Optional instance to populate.
     * @return {GetEligibleShipmentServicesRequest} The populated <code>GetEligibleShipmentServicesRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetEligibleShipmentServicesRequest): GetEligibleShipmentServicesRequest;
    /**
     * Constructs a new <code>GetEligibleShipmentServicesRequest</code>.
     * Request schema.
     * @alias module:merchantfulfillment_v0/model/GetEligibleShipmentServicesRequest
     * @class
     * @param shipmentRequestDetails {ShipmentRequestDetails}
     */
    constructor(shipmentRequestDetails: ShipmentRequestDetails);
    shipmentRequestDetails: ShipmentRequestDetails;
    /**
     * @member {ShippingOfferingFilter} shippingOfferingFilter
     * @type {ShippingOfferingFilter}
     */
    shippingOfferingFilter: ShippingOfferingFilter;
}
import { ShipmentRequestDetails } from './ShipmentRequestDetails.js';
import { ShippingOfferingFilter } from './ShippingOfferingFilter.js';
//# sourceMappingURL=GetEligibleShipmentServicesRequest.d.ts.map