/**
 * The HandoverLocation model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/HandoverLocation
 * @version 2024-09-11
 */
export class HandoverLocation {
    /**
     * Constructs a <code>HandoverLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {HandoverLocation} obj Optional instance to populate.
     * @return {HandoverLocation} The populated <code>HandoverLocation</code> instance.
     */
    static constructFromObject(data: Object, obj: HandoverLocation): HandoverLocation;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
    /**
     * @member {Distance} distance
     * @type {Distance}
     */
    distance: Distance;
    /**
     * URL to the map that shows the drop-off location.
     * @member {String} mapUrl
     * @type {String}
     */
    mapUrl: string;
}
import { Address } from './Address.js';
import { Distance } from './Distance.js';
//# sourceMappingURL=HandoverLocation.d.ts.map