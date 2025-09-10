/**
 * The ShippingLabelRequest model module.
 * @module vendordfshipping_v2021_12_28/model/ShippingLabelRequest
 * @version 2021-12-28
 */
export class ShippingLabelRequest {
    /**
     * Constructs a <code>ShippingLabelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingLabelRequest} obj Optional instance to populate.
     * @return {ShippingLabelRequest} The populated <code>ShippingLabelRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingLabelRequest): ShippingLabelRequest;
    /**
     * Constructs a new <code>ShippingLabelRequest</code>.
     * Represents the request payload for creating a shipping label, containing the purchase order number, selling party, ship from party, and a list of containers or packages in the shipment.
     * @alias module:vendordfshipping_v2021_12_28/model/ShippingLabelRequest
     * @class
     * @param purchaseOrderNumber {String} The purchase order number of the order for which to create a shipping label.
     * @param sellingParty {PartyIdentification}
     * @param shipFromParty {PartyIdentification}
     */
    constructor(purchaseOrderNumber: string, sellingParty: PartyIdentification, shipFromParty: PartyIdentification);
    purchaseOrderNumber: string;
    sellingParty: PartyIdentification;
    shipFromParty: PartyIdentification;
    /**
     * A list of the packages in this shipment.
     * @member {[Container]} containers
     * @type {[Container]}
     */
    containers: [Container];
}
import { PartyIdentification } from './PartyIdentification.js';
import { Container } from './Container.js';
//# sourceMappingURL=ShippingLabelRequest.d.ts.map