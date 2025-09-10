/**
 * The TrackingDetailsInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/TrackingDetailsInput
 * @version 2024-03-20
 */
export class TrackingDetailsInput {
    /**
     * Constructs a <code>TrackingDetailsInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TrackingDetailsInput} obj Optional instance to populate.
     * @return {TrackingDetailsInput} The populated <code>TrackingDetailsInput</code> instance.
     */
    static constructFromObject(data: any, obj: TrackingDetailsInput): TrackingDetailsInput;
    /**
     * @member {LtlTrackingDetailInput} ltlTrackingDetail
     * @type {LtlTrackingDetailInput}
     */
    ltlTrackingDetail: LtlTrackingDetailInput;
    /**
     * @member {SpdTrackingDetailInput} spdTrackingDetail
     * @type {SpdTrackingDetailInput}
     */
    spdTrackingDetail: SpdTrackingDetailInput;
}
import { LtlTrackingDetailInput } from './LtlTrackingDetailInput.js';
import { SpdTrackingDetailInput } from './SpdTrackingDetailInput.js';
//# sourceMappingURL=TrackingDetailsInput.d.ts.map