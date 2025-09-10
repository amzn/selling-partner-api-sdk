/**
 * The FulfillmentShipmentPackage model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FulfillmentShipmentPackage
 * @version 2020-07-01
 */
export class FulfillmentShipmentPackage {
    /**
     * Constructs a <code>FulfillmentShipmentPackage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentShipmentPackage} obj Optional instance to populate.
     * @return {FulfillmentShipmentPackage} The populated <code>FulfillmentShipmentPackage</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentShipmentPackage): FulfillmentShipmentPackage;
    /**
     * Constructs a new <code>FulfillmentShipmentPackage</code>.
     * Package information for a shipment in a fulfillment order.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/FulfillmentShipmentPackage
     * @class
     * @param packageNumber {Number} Identifies a package in a shipment.
     * @param carrierCode {String} Identifies the carrier who will deliver the shipment to the recipient.
     */
    constructor(packageNumber: number, carrierCode: string);
    packageNumber: number;
    carrierCode: string;
    /**
     * The tracking number, if provided, can be used to obtain tracking and delivery information.
     * @member {String} trackingNumber
     * @type {String}
     */
    trackingNumber: string;
    /**
     * The Amazon fulfillment tracking number, if provided, can be used to obtain tracking and delivery information.
     * @member {String} amazonFulfillmentTrackingNumber
     * @type {String}
     */
    amazonFulfillmentTrackingNumber: string;
    /**
     * Date timestamp
     * @member {Date} estimatedArrivalDate
     * @type {Date}
     */
    estimatedArrivalDate: Date;
    /**
     * @member {LockerDetails} lockerDetails
     * @type {LockerDetails}
     */
    lockerDetails: LockerDetails;
    /**
     * @member {DeliveryInformation} deliveryInformation
     * @type {DeliveryInformation}
     */
    deliveryInformation: DeliveryInformation;
}
import { LockerDetails } from './LockerDetails.js';
import { DeliveryInformation } from './DeliveryInformation.js';
//# sourceMappingURL=FulfillmentShipmentPackage.d.ts.map