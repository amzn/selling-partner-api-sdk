/**
 * The SpdTrackingItemInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/SpdTrackingItemInput
 * @version 2024-03-20
 */
export class SpdTrackingItemInput {
    /**
     * Constructs a <code>SpdTrackingItemInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SpdTrackingItemInput} obj Optional instance to populate.
     * @return {SpdTrackingItemInput} The populated <code>SpdTrackingItemInput</code> instance.
     */
    static constructFromObject(data: any, obj: SpdTrackingItemInput): SpdTrackingItemInput;
    /**
     * Constructs a new <code>SpdTrackingItemInput</code>.
     * Small Parcel Delivery (SPD) tracking items input information.
     * @alias module:fulfillmentinbound_v2024_03_20/model/SpdTrackingItemInput
     * @class
     * @param boxId {String} The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box.
     * @param trackingId {String} The tracking Id associated with each box in a non-Amazon partnered Small Parcel Delivery (SPD) shipment. The seller must provide this information.
     */
    constructor(boxId: string, trackingId: string);
    boxId: string;
    trackingId: string;
}
//# sourceMappingURL=SpdTrackingItemInput.d.ts.map