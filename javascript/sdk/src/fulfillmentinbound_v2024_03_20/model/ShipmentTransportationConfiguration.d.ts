/**
 * The ShipmentTransportationConfiguration model module.
 * @module fulfillmentinbound_v2024_03_20/model/ShipmentTransportationConfiguration
 * @version 2024-03-20
 */
export class ShipmentTransportationConfiguration {
    /**
     * Constructs a <code>ShipmentTransportationConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentTransportationConfiguration} obj Optional instance to populate.
     * @return {ShipmentTransportationConfiguration} The populated <code>ShipmentTransportationConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentTransportationConfiguration): ShipmentTransportationConfiguration;
    /**
     * Constructs a new <code>ShipmentTransportationConfiguration</code>.
     * Details needed to generate the transportation options.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ShipmentTransportationConfiguration
     * @class
     * @param readyToShipWindow {WindowInput}
     * @param shipmentId {String} Identifier of a shipment. A shipment contains the boxes and units being inbounded.
     */
    constructor(readyToShipWindow: WindowInput, shipmentId: string);
    readyToShipWindow: WindowInput;
    shipmentId: string;
    /**
     * @member {ContactInformation} contactInformation
     * @type {ContactInformation}
     */
    contactInformation: ContactInformation;
    /**
     * @member {FreightInformation} freightInformation
     * @type {FreightInformation}
     */
    freightInformation: FreightInformation;
    /**
     * List of pallet configuration inputs.
     * @member {[PalletInput]} pallets
     * @type {[PalletInput]}
     */
    pallets: [PalletInput];
}
import { WindowInput } from './WindowInput.js';
import { ContactInformation } from './ContactInformation.js';
import { FreightInformation } from './FreightInformation.js';
import { PalletInput } from './PalletInput.js';
//# sourceMappingURL=ShipmentTransportationConfiguration.d.ts.map