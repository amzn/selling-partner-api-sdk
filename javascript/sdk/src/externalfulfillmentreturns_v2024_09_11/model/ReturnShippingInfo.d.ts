/**
 * The ReturnShippingInfo model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/ReturnShippingInfo
 * @version 2024-09-11
 */
export class ReturnShippingInfo {
    /**
     * Constructs a <code>ReturnShippingInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReturnShippingInfo} obj Optional instance to populate.
     * @return {ReturnShippingInfo} The populated <code>ReturnShippingInfo</code> instance.
     */
    static constructFromObject(data: any, obj: ReturnShippingInfo): ReturnShippingInfo;
    /**
     * A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @member {String} deliveryDateTime
     * @type {String}
     */
    deliveryDateTime: string;
    /**
     * A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @member {String} pickupDateTime
     * @type {String}
     */
    pickupDateTime: string;
    /**
     * @member {TrackingInfo} forwardTrackingInfo
     * @type {TrackingInfo}
     */
    forwardTrackingInfo: TrackingInfo;
    /**
     * @member {TrackingInfo} reverseTrackingInfo
     * @type {TrackingInfo}
     */
    reverseTrackingInfo: TrackingInfo;
}
import { TrackingInfo } from './TrackingInfo.js';
//# sourceMappingURL=ReturnShippingInfo.d.ts.map