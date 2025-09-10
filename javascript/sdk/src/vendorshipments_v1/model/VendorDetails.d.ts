/**
 * The VendorDetails model module.
 * @module vendorshipments_v1/model/VendorDetails
 * @version v1
 */
export class VendorDetails {
    /**
     * Constructs a <code>VendorDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {VendorDetails} obj Optional instance to populate.
     * @return {VendorDetails} The populated <code>VendorDetails</code> instance.
     */
    static constructFromObject(data: any, obj: VendorDetails): VendorDetails;
    /**
     * @member {PartyIdentification} sellingParty
     * @type {PartyIdentification}
     */
    sellingParty: PartyIdentification;
    /**
     * Unique vendor shipment id which is not used in last 365 days
     * @member {String} vendorShipmentIdentifier
     * @type {String}
     */
    vendorShipmentIdentifier: string;
}
import { PartyIdentification } from './PartyIdentification.js';
//# sourceMappingURL=VendorDetails.d.ts.map