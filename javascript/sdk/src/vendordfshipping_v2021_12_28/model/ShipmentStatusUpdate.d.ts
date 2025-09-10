/**
 * The ShipmentStatusUpdate model module.
 * @module vendordfshipping_v2021_12_28/model/ShipmentStatusUpdate
 * @version 2021-12-28
 */
export class ShipmentStatusUpdate {
    /**
     * Constructs a <code>ShipmentStatusUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentStatusUpdate} obj Optional instance to populate.
     * @return {ShipmentStatusUpdate} The populated <code>ShipmentStatusUpdate</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentStatusUpdate): ShipmentStatusUpdate;
    /**
     * Constructs a new <code>ShipmentStatusUpdate</code>.
     * Represents an update to the status of a shipment.
     * @alias module:vendordfshipping_v2021_12_28/model/ShipmentStatusUpdate
     * @class
     * @param purchaseOrderNumber {String} Purchase order number of the shipment for which to update the shipment status.
     * @param sellingParty {PartyIdentification}
     * @param shipFromParty {PartyIdentification}
     * @param statusUpdateDetails {StatusUpdateDetails}
     */
    constructor(purchaseOrderNumber: string, sellingParty: PartyIdentification, shipFromParty: PartyIdentification, statusUpdateDetails: StatusUpdateDetails);
    purchaseOrderNumber: string;
    sellingParty: PartyIdentification;
    shipFromParty: PartyIdentification;
    statusUpdateDetails: StatusUpdateDetails;
}
import { PartyIdentification } from './PartyIdentification.js';
import { StatusUpdateDetails } from './StatusUpdateDetails.js';
//# sourceMappingURL=ShipmentStatusUpdate.d.ts.map