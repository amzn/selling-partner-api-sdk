/**
 * The CreateShippingLabelsRequest model module.
 * @module vendordfshipping_v2021_12_28/model/CreateShippingLabelsRequest
 * @version 2021-12-28
 */
export class CreateShippingLabelsRequest {
    /**
     * Constructs a <code>CreateShippingLabelsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateShippingLabelsRequest} obj Optional instance to populate.
     * @return {CreateShippingLabelsRequest} The populated <code>CreateShippingLabelsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateShippingLabelsRequest): CreateShippingLabelsRequest;
    /**
     * Constructs a new <code>CreateShippingLabelsRequest</code>.
     * The request body for the createShippingLabels operation.
     * @alias module:vendordfshipping_v2021_12_28/model/CreateShippingLabelsRequest
     * @class
     * @param sellingParty {PartyIdentification}
     * @param shipFromParty {PartyIdentification}
     */
    constructor(sellingParty: PartyIdentification, shipFromParty: PartyIdentification);
    sellingParty: PartyIdentification;
    shipFromParty: PartyIdentification;
    /**
     * A list of the packages in this shipment.
     * @member {Array[]} containers
     * @type {Array[]}
     */
    containers: any[][];
}
import { PartyIdentification } from './PartyIdentification.js';
//# sourceMappingURL=CreateShippingLabelsRequest.d.ts.map