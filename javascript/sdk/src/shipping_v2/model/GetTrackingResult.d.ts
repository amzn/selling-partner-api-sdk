/**
 * The GetTrackingResult model module.
 * @module shipping_v2/model/GetTrackingResult
 * @version v2
 */
export class GetTrackingResult {
    /**
     * Constructs a <code>GetTrackingResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetTrackingResult} obj Optional instance to populate.
     * @return {GetTrackingResult} The populated <code>GetTrackingResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetTrackingResult): GetTrackingResult;
    /**
     * Constructs a new <code>GetTrackingResult</code>.
     * The payload for the getTracking operation.
     * @alias module:shipping_v2/model/GetTrackingResult
     * @class
     * @param trackingId {String} The carrier generated identifier for a package in a purchased shipment.
     * @param alternateLegTrackingId {String} The carrier generated reverse identifier for a returned package in a purchased shipment.
     * @param eventHistory {Event[]} A list of tracking events.
     * @param promisedDeliveryDate {Date} The date and time by which the shipment is promised to be delivered.
     * @param summary {TrackingSummary}
     */
    constructor(trackingId: string, alternateLegTrackingId: string, eventHistory: Event[], promisedDeliveryDate: Date, summary: TrackingSummary);
    trackingId: string;
    alternateLegTrackingId: string;
    eventHistory: Event[];
    promisedDeliveryDate: Date;
    summary: TrackingSummary;
}
import { Event } from './Event.js';
import { TrackingSummary } from './TrackingSummary.js';
//# sourceMappingURL=GetTrackingResult.d.ts.map