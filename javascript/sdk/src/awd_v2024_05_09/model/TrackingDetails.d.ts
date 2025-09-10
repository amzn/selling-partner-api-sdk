/**
 * The TrackingDetails model module.
 * @module awd_v2024_05_09/model/TrackingDetails
 * @version 2024-05-09
 */
export class TrackingDetails {
    /**
     * Constructs a <code>TrackingDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TrackingDetails} obj Optional instance to populate.
     * @return {TrackingDetails} The populated <code>TrackingDetails</code> instance.
     */
    static constructFromObject(data: any, obj: TrackingDetails): TrackingDetails;
    /**
     * Constructs a new <code>TrackingDetails</code>.
     * Tracking details for the shipment. If using SPD transportation, this can be for each case. If not using SPD transportation, this is a single tracking entry for the entire shipment.
     * @alias module:awd_v2024_05_09/model/TrackingDetails
     * @class
     * @param bookingId {String} The identifier that is received from transportation to uniquely identify a booking.
     */
    constructor(bookingId: string);
    bookingId: string;
    /**
     * @member {CarrierCode} carrierCode
     * @type {CarrierCode}
     */
    carrierCode: CarrierCode;
}
import { CarrierCode } from './CarrierCode.js';
//# sourceMappingURL=TrackingDetails.d.ts.map