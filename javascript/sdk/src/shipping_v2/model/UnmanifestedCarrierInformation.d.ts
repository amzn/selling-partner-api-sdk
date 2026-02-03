/**
 * The UnmanifestedCarrierInformation model module.
 * @module shipping_v2/model/UnmanifestedCarrierInformation
 * @version v2
 */
export class UnmanifestedCarrierInformation {
    /**
     * Constructs a <code>UnmanifestedCarrierInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UnmanifestedCarrierInformation} obj Optional instance to populate.
     * @return {UnmanifestedCarrierInformation} The populated <code>UnmanifestedCarrierInformation</code> instance.
     */
    static constructFromObject(data: any, obj: UnmanifestedCarrierInformation): UnmanifestedCarrierInformation;
    /**
     * The carrier identifier for the offering, provided by the carrier.
     * @member {String} carrierId
     * @type {String}
     */
    carrierId: string;
    /**
     * The carrier name for the offering.
     * @member {String} carrierName
     * @type {String}
     */
    carrierName: string;
    /**
     * A list of UnmanifestedShipmentLocation
     * @member {Array[]} unmanifestedShipmentLocationList
     * @type {Array[]}
     */
    unmanifestedShipmentLocationList: any[][];
}
//# sourceMappingURL=UnmanifestedCarrierInformation.d.ts.map