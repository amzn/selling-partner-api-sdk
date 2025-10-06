/**
 * The TrackingInfo model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/TrackingInfo
 * @version 2024-09-11
 */
export class TrackingInfo {
    /**
     * Constructs a <code>TrackingInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TrackingInfo} obj Optional instance to populate.
     * @return {TrackingInfo} The populated <code>TrackingInfo</code> instance.
     */
    static constructFromObject(data: any, obj: TrackingInfo): TrackingInfo;
    /**
     * Constructs a new <code>TrackingInfo</code>.
     * Information for tracking a return.
     * @alias module:externalfulfillmentreturns_v2024_09_11/model/TrackingInfo
     * @class
     * @param carrierName {String} The name of the third party courier service used to ship the return package.
     * @param trackingId {String} The tracking ID of the return package.
     */
    constructor(carrierName: string, trackingId: string);
    carrierName: string;
    trackingId: string;
}
//# sourceMappingURL=TrackingInfo.d.ts.map