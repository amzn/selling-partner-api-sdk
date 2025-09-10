/**
 * The DestinationDetails model module.
 * @module awd_v2024_05_09/model/DestinationDetails
 * @version 2024-05-09
 */
export class DestinationDetails {
    /**
     * Constructs a <code>DestinationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DestinationDetails} obj Optional instance to populate.
     * @return {DestinationDetails} The populated <code>DestinationDetails</code> instance.
     */
    static constructFromObject(data: any, obj: DestinationDetails): DestinationDetails;
    /**
     * @member {Address} destinationAddress
     * @type {Address}
     */
    destinationAddress: Address;
    /**
     * Assigned region where the order will be shipped. This can differ from what was passed as preference. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast]
     * @member {String} destinationRegion
     * @type {String}
     */
    destinationRegion: string;
    /**
     * Unique ID of the confirmed shipment being shipped to the assigned destination. This will be available only after an inbound order is confirmed and can be used to track the shipment.
     * @member {String} shipmentId
     * @type {String}
     */
    shipmentId: string;
}
import { Address } from './Address.js';
//# sourceMappingURL=DestinationDetails.d.ts.map