/**
 * The ShipmentDetails model module.
 * @module vendordforders_v2021_12_28/model/ShipmentDetails
 * @version 2021-12-28
 */
export class ShipmentDetails {
    /**
     * Constructs a <code>ShipmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentDetails} obj Optional instance to populate.
     * @return {ShipmentDetails} The populated <code>ShipmentDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentDetails): ShipmentDetails;
    /**
     * Constructs a new <code>ShipmentDetails</code>.
     * Shipment details required for the shipment.
     * @alias module:vendordforders_v2021_12_28/model/ShipmentDetails
     * @class
     * @param isPriorityShipment {Boolean} When true, this is a priority shipment.
     * @param isPslipRequired {Boolean} When true, a packing slip is required to be sent to the customer.
     * @param shipMethod {String} Ship method to be used for shipping the order. Amazon defines ship method codes indicating the shipping carrier and shipment service level. To see the full list of ship methods in use, including both the code and the friendly name, search the 'Help' section on Vendor Central for 'ship methods'.
     * @param shipmentDates {ShipmentDates}
     * @param messageToCustomer {String} Message to customer for order status.
     */
    constructor(isPriorityShipment: boolean, isPslipRequired: boolean, shipMethod: string, shipmentDates: ShipmentDates, messageToCustomer: string);
    isPriorityShipment: boolean;
    isPslipRequired: boolean;
    shipMethod: string;
    shipmentDates: ShipmentDates;
    messageToCustomer: string;
    /**
     * When true, this order is part of a scheduled delivery program.
     * @member {Boolean} isScheduledDeliveryShipment
     * @type {Boolean}
     */
    isScheduledDeliveryShipment: boolean;
    /**
     * When true, the order contain a gift. Include the gift message and gift wrap information.
     * @member {Boolean} isGift
     * @type {Boolean}
     */
    isGift: boolean;
}
import { ShipmentDates } from './ShipmentDates.js';
//# sourceMappingURL=ShipmentDetails.d.ts.map