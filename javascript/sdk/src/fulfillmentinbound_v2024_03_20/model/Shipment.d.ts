/**
 * The Shipment model module.
 * @module fulfillmentinbound_v2024_03_20/model/Shipment
 * @version 2024-03-20
 */
export class Shipment {
    /**
     * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Shipment} obj Optional instance to populate.
     * @return {Shipment} The populated <code>Shipment</code> instance.
     */
    static constructFromObject(data: any, obj: Shipment): Shipment;
    /**
     * Constructs a new <code>Shipment</code>.
     * Contains information pertaining to a shipment in an inbound plan.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Shipment
     * @class
     * @param destination {ShipmentDestination}
     * @param placementOptionId {String} The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.
     * @param shipmentId {String} Identifier of a shipment. A shipment contains the boxes and units being inbounded.
     * @param source {ShipmentSource}
     */
    constructor(destination: ShipmentDestination, placementOptionId: string, shipmentId: string, source: ShipmentSource);
    destination: ShipmentDestination;
    placementOptionId: string;
    shipmentId: string;
    source: ShipmentSource;
    /**
     * A unique identifier created by Amazon that identifies this Amazon-partnered, Less Than Truckload/Full Truckload (LTL/FTL) shipment.
     * @member {String} amazonReferenceId
     * @type {String}
     */
    amazonReferenceId: string;
    /**
     * @member {ContactInformation} contactInformation
     * @type {ContactInformation}
     */
    contactInformation: ContactInformation;
    /**
     * @member {Dates} dates
     * @type {Dates}
     */
    dates: Dates;
    /**
     * @member {FreightInformation} freightInformation
     * @type {FreightInformation}
     */
    freightInformation: FreightInformation;
    /**
     * The name of the shipment.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * @member {SelectedDeliveryWindow} selectedDeliveryWindow
     * @type {SelectedDeliveryWindow}
     */
    selectedDeliveryWindow: SelectedDeliveryWindow;
    /**
     * Identifier of a transportation option. A transportation option represent one option for how to send a shipment.
     * @member {String} selectedTransportationOptionId
     * @type {String}
     */
    selectedTransportationOptionId: string;
    /**
     * List of self ship appointment details.
     * @member {[SelfShipAppointmentDetails]} selfShipAppointmentDetails
     * @type {[SelfShipAppointmentDetails]}
     */
    selfShipAppointmentDetails: [SelfShipAppointmentDetails];
    /**
     * The confirmed shipment ID which shows up on labels (for example, `FBA1234ABCD`).
     * @member {String} shipmentConfirmationId
     * @type {String}
     */
    shipmentConfirmationId: string;
    /**
     * The status of a shipment. The state of the shipment will typically start as `UNCONFIRMED`, then transition to `WORKING` after a placement option has been confirmed, and then to `READY_TO_SHIP` once labels are generated.  Possible values: `ABANDONED`, `CANCELLED`, `CHECKED_IN`, `CLOSED`, `DELETED`, `DELIVERED`, `IN_TRANSIT`, `MIXED`, `READY_TO_SHIP`, `RECEIVING`, `SHIPPED`, `UNCONFIRMED`, `WORKING`
     * @member {String} status
     * @type {String}
     */
    status: string;
    /**
     * @member {TrackingDetails} trackingDetails
     * @type {TrackingDetails}
     */
    trackingDetails: TrackingDetails;
}
import { ShipmentDestination } from './ShipmentDestination.js';
import { ShipmentSource } from './ShipmentSource.js';
import { ContactInformation } from './ContactInformation.js';
import { Dates } from './Dates.js';
import { FreightInformation } from './FreightInformation.js';
import { SelectedDeliveryWindow } from './SelectedDeliveryWindow.js';
import { SelfShipAppointmentDetails } from './SelfShipAppointmentDetails.js';
import { TrackingDetails } from './TrackingDetails.js';
//# sourceMappingURL=Shipment.d.ts.map