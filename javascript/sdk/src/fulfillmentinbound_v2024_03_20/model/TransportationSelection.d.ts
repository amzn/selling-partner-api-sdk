/**
 * The TransportationSelection model module.
 * @module fulfillmentinbound_v2024_03_20/model/TransportationSelection
 * @version 2024-03-20
 */
export class TransportationSelection {
    /**
     * Constructs a <code>TransportationSelection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransportationSelection} obj Optional instance to populate.
     * @return {TransportationSelection} The populated <code>TransportationSelection</code> instance.
     */
    static constructFromObject(data: any, obj: TransportationSelection): TransportationSelection;
    /**
     * Constructs a new <code>TransportationSelection</code>.
     * The transportation option selected to confirm.
     * @alias module:fulfillmentinbound_v2024_03_20/model/TransportationSelection
     * @class
     * @param shipmentId {String} Shipment ID that the transportation Option is for.
     * @param transportationOptionId {String} Transportation option being selected for the provided shipment.
     */
    constructor(shipmentId: string, transportationOptionId: string);
    shipmentId: string;
    transportationOptionId: string;
    /**
     * @member {ContactInformation} contactInformation
     * @type {ContactInformation}
     */
    contactInformation: ContactInformation;
}
import { ContactInformation } from './ContactInformation.js';
//# sourceMappingURL=TransportationSelection.d.ts.map