/**
 * The UnmanifestedShipmentLocation model module.
 * @module shipping_v2/model/UnmanifestedShipmentLocation
 * @version v2
 */
export class UnmanifestedShipmentLocation {
    /**
     * Constructs a <code>UnmanifestedShipmentLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UnmanifestedShipmentLocation} obj Optional instance to populate.
     * @return {UnmanifestedShipmentLocation} The populated <code>UnmanifestedShipmentLocation</code> instance.
     */
    static constructFromObject(data: any, obj: UnmanifestedShipmentLocation): UnmanifestedShipmentLocation;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
    /**
     * Its Last Manifest Date.
     * @member {String} lastManifestDate
     * @type {String}
     */
    lastManifestDate: string;
}
import { Address } from './Address.js';
//# sourceMappingURL=UnmanifestedShipmentLocation.d.ts.map