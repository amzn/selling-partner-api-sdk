/**
 * The TrackingSummary model module.
 * @module shipping_v2/model/TrackingSummary
 * @version v2
 */
export class TrackingSummary {
    /**
     * Constructs a <code>TrackingSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TrackingSummary} obj Optional instance to populate.
     * @return {TrackingSummary} The populated <code>TrackingSummary</code> instance.
     */
    static constructFromObject(data: any, obj: TrackingSummary): TrackingSummary;
    /**
     * @member {Status} status
     * @type {Status}
     */
    status: Status;
    /**
     * @member {TrackingDetailCodes} trackingDetailCodes
     * @type {TrackingDetailCodes}
     */
    trackingDetailCodes: TrackingDetailCodes;
}
import { Status } from './Status.js';
import { TrackingDetailCodes } from './TrackingDetailCodes.js';
//# sourceMappingURL=TrackingSummary.d.ts.map