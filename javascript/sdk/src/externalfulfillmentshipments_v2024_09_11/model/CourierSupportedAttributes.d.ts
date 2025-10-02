/**
 * The CourierSupportedAttributes model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/CourierSupportedAttributes
 * @version 2024-09-11
 */
export class CourierSupportedAttributes {
    /**
     * Constructs a <code>CourierSupportedAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CourierSupportedAttributes} obj Optional instance to populate.
     * @return {CourierSupportedAttributes} The populated <code>CourierSupportedAttributes</code> instance.
     */
    static constructFromObject(data: any, obj: CourierSupportedAttributes): CourierSupportedAttributes;
    /**
     * Constructs a new <code>CourierSupportedAttributes</code>.
     * The tracking details of the package if it is shipped by a third party courier. This attribute should only be provided when the value of &#x60;shipBy&#x60; is &#x60;THIRD_PARTY_CARRIER&#x60;.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/CourierSupportedAttributes
     * @class
     * @param carrierName {String} The name of the courier service used to ship the package
     * @param trackingId {String} The tracking number of the package.
     */
    constructor(carrierName: string, trackingId: string);
    carrierName: string;
    trackingId: string;
}
//# sourceMappingURL=CourierSupportedAttributes.d.ts.map