/**
 * The SpdTrackingDetailInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/SpdTrackingDetailInput
 * @version 2024-03-20
 */
export class SpdTrackingDetailInput {
    /**
     * Constructs a <code>SpdTrackingDetailInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SpdTrackingDetailInput} obj Optional instance to populate.
     * @return {SpdTrackingDetailInput} The populated <code>SpdTrackingDetailInput</code> instance.
     */
    static constructFromObject(data: any, obj: SpdTrackingDetailInput): SpdTrackingDetailInput;
    /**
     * Constructs a new <code>SpdTrackingDetailInput</code>.
     * Contains input information to update Small Parcel Delivery (SPD) tracking information.
     * @alias module:fulfillmentinbound_v2024_03_20/model/SpdTrackingDetailInput
     * @class
     * @param spdTrackingItems {[SpdTrackingItemInput]} List of Small Parcel Delivery (SPD) tracking items input.
     */
    constructor(spdTrackingItems: [SpdTrackingItemInput]);
    spdTrackingItems: [SpdTrackingItemInput];
}
import { SpdTrackingItemInput } from './SpdTrackingItemInput.js';
//# sourceMappingURL=SpdTrackingDetailInput.d.ts.map