/**
 * The TrackingDetails model module.
 * @module easyship_v2022_03_23/model/TrackingDetails
 * @version 2022-03-23
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
     * A string of up to 255 characters.
     * @member {String} trackingId
     * @type {String}
     */
    trackingId: string;
}
//# sourceMappingURL=TrackingDetails.d.ts.map