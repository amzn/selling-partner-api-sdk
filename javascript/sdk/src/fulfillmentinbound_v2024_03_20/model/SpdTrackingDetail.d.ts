/**
 * The SpdTrackingDetail model module.
 * @module fulfillmentinbound_v2024_03_20/model/SpdTrackingDetail
 * @version 2024-03-20
 */
export class SpdTrackingDetail {
    /**
     * Constructs a <code>SpdTrackingDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SpdTrackingDetail} obj Optional instance to populate.
     * @return {SpdTrackingDetail} The populated <code>SpdTrackingDetail</code> instance.
     */
    static constructFromObject(data: any, obj: SpdTrackingDetail): SpdTrackingDetail;
    /**
     * List of Small Parcel Delivery (SPD) tracking items.
     * @member {SpdTrackingItem[]} spdTrackingItems
     * @type {SpdTrackingItem[]}
     */
    spdTrackingItems: SpdTrackingItem[];
}
import { SpdTrackingItem } from './SpdTrackingItem.js';
//# sourceMappingURL=SpdTrackingDetail.d.ts.map