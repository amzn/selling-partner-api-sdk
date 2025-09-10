/**
 * The TrackingEvent model module.
 * @module fulfillmentoutbound_v2020_07_01/model/TrackingEvent
 * @version 2020-07-01
 */
export class TrackingEvent {
    /**
     * Constructs a <code>TrackingEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TrackingEvent} obj Optional instance to populate.
     * @return {TrackingEvent} The populated <code>TrackingEvent</code> instance.
     */
    static constructFromObject(data: any, obj: TrackingEvent): TrackingEvent;
    /**
     * Constructs a new <code>TrackingEvent</code>.
     * Information for tracking package deliveries.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/TrackingEvent
     * @class
     * @param eventDate {Date} Date timestamp
     * @param eventAddress {TrackingAddress}
     * @param eventCode {EventCode}
     * @param eventDescription {String} A description for the corresponding event code.
     */
    constructor(eventDate: Date, eventAddress: TrackingAddress, eventCode: EventCode, eventDescription: string);
    eventDate: Date;
    eventAddress: TrackingAddress;
    eventCode: EventCode;
    eventDescription: string;
}
import { TrackingAddress } from './TrackingAddress.js';
import { EventCode } from './EventCode.js';
//# sourceMappingURL=TrackingEvent.d.ts.map