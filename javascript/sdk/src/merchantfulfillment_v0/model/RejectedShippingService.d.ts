/**
 * The RejectedShippingService model module.
 * @module merchantfulfillment_v0/model/RejectedShippingService
 * @version v0
 */
export class RejectedShippingService {
    /**
     * Constructs a <code>RejectedShippingService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RejectedShippingService} obj Optional instance to populate.
     * @return {RejectedShippingService} The populated <code>RejectedShippingService</code> instance.
     */
    static constructFromObject(data: any, obj: RejectedShippingService): RejectedShippingService;
    /**
     * Constructs a new <code>RejectedShippingService</code>.
     * Information about a rejected shipping service
     * @alias module:merchantfulfillment_v0/model/RejectedShippingService
     * @class
     * @param carrierName {String} The rejected shipping carrier name. For example, USPS.
     * @param shippingServiceName {String} The rejected shipping service localized name. For example, FedEx Standard Overnight.
     * @param shippingServiceId {String} An Amazon-defined shipping service identifier.
     * @param rejectionReasonCode {String} A reason code meant to be consumed programatically. For example, `CARRIER_CANNOT_SHIP_TO_POBOX`.
     */
    constructor(carrierName: string, shippingServiceName: string, shippingServiceId: string, rejectionReasonCode: string);
    carrierName: string;
    shippingServiceName: string;
    shippingServiceId: string;
    rejectionReasonCode: string;
    /**
     * A localized human readable description of the rejected reason.
     * @member {String} rejectionReasonMessage
     * @type {String}
     */
    rejectionReasonMessage: string;
}
//# sourceMappingURL=RejectedShippingService.d.ts.map