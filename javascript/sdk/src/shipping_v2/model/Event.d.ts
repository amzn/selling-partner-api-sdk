/**
 * The Event model module.
 * @module shipping_v2/model/Event
 * @version v2
 */
export class Event {
    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Event} obj Optional instance to populate.
     * @return {Event} The populated <code>Event</code> instance.
     */
    static constructFromObject(data: any, obj: Event): Event;
    /**
     * Constructs a new <code>Event</code>.
     * A tracking event.
     * @alias module:shipping_v2/model/Event
     * @class
     * @param eventCode {EventCode}
     * @param eventTime {Date} The ISO 8601 formatted timestamp of the event.
     */
    constructor(eventCode: EventCode, eventTime: Date);
    eventCode: EventCode;
    eventTime: Date;
    /**
     * @member {Location} location
     * @type {Location}
     */
    location: Location;
    /**
     * @member {ShipmentType} shipmentType
     * @type {ShipmentType}
     */
    shipmentType: ShipmentType;
}
import { EventCode } from './EventCode.js';
import { Location } from './Location.js';
import { ShipmentType } from './ShipmentType.js';
//# sourceMappingURL=Event.d.ts.map