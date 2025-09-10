/**
 * The TrackingDetails model module.
 * @module fulfillmentinbound_v2024_03_20/model/TrackingDetails
 * @version 2024-03-20
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
     * @member {LtlTrackingDetail} ltlTrackingDetail
     * @type {LtlTrackingDetail}
     */
    ltlTrackingDetail: LtlTrackingDetail;
    /**
     * @member {SpdTrackingDetail} spdTrackingDetail
     * @type {SpdTrackingDetail}
     */
    spdTrackingDetail: SpdTrackingDetail;
}
import { LtlTrackingDetail } from './LtlTrackingDetail.js';
import { SpdTrackingDetail } from './SpdTrackingDetail.js';
//# sourceMappingURL=TrackingDetails.d.ts.map