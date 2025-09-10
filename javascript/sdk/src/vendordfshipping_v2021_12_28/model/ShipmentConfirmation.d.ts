/**
 * The ShipmentConfirmation model module.
 * @module vendordfshipping_v2021_12_28/model/ShipmentConfirmation
 * @version 2021-12-28
 */
export class ShipmentConfirmation {
    /**
     * Constructs a <code>ShipmentConfirmation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentConfirmation} obj Optional instance to populate.
     * @return {ShipmentConfirmation} The populated <code>ShipmentConfirmation</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentConfirmation): ShipmentConfirmation;
    /**
     * Constructs a new <code>ShipmentConfirmation</code>.
     * Represents the confirmation details of a shipment, including the purchase order number and other shipment details.
     * @alias module:vendordfshipping_v2021_12_28/model/ShipmentConfirmation
     * @class
     * @param purchaseOrderNumber {String} Purchase order number corresponding to the shipment.
     * @param shipmentDetails {ShipmentDetails}
     * @param sellingParty {PartyIdentification}
     * @param shipFromParty {PartyIdentification}
     * @param items {[Item]} Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package.
     */
    constructor(purchaseOrderNumber: string, shipmentDetails: ShipmentDetails, sellingParty: PartyIdentification, shipFromParty: PartyIdentification, items: [Item]);
    purchaseOrderNumber: string;
    shipmentDetails: ShipmentDetails;
    sellingParty: PartyIdentification;
    shipFromParty: PartyIdentification;
    items: [Item];
    /**
     * Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package.
     * @member {[Container]} containers
     * @type {[Container]}
     */
    containers: [Container];
}
import { ShipmentDetails } from './ShipmentDetails.js';
import { PartyIdentification } from './PartyIdentification.js';
import { Item } from './Item.js';
import { Container } from './Container.js';
//# sourceMappingURL=ShipmentConfirmation.d.ts.map