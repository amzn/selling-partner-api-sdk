/**
 * The TransportationDetails model module.
 * @module awd_v2024_05_09/model/TransportationDetails
 * @version 2024-05-09
 */
export class TransportationDetails {
    /**
     * Constructs a <code>TransportationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransportationDetails} obj Optional instance to populate.
     * @return {TransportationDetails} The populated <code>TransportationDetails</code> instance.
     */
    static constructFromObject(data: any, obj: TransportationDetails): TransportationDetails;
    /**
     * Constructs a new <code>TransportationDetails</code>.
     * Transportation details for the shipment.
     * @alias module:awd_v2024_05_09/model/TransportationDetails
     * @class
     * @param trackingDetails {[TrackingDetails]} Tracking details for the shipment. If using SPD transportation, this can be for each case. If not using SPD transportation, this is a single tracking entry for the entire shipment.
     */
    constructor(trackingDetails: [TrackingDetails]);
    trackingDetails: [TrackingDetails];
}
import { TrackingDetails } from './TrackingDetails.js';
//# sourceMappingURL=TransportationDetails.d.ts.map