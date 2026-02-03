/**
 * The CreateContainerLabelRequest model module.
 * @module vendordfshipping_v2021_12_28/model/CreateContainerLabelRequest
 * @version 2021-12-28
 */
export class CreateContainerLabelRequest {
    /**
     * Constructs a <code>CreateContainerLabelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateContainerLabelRequest} obj Optional instance to populate.
     * @return {CreateContainerLabelRequest} The populated <code>CreateContainerLabelRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateContainerLabelRequest): CreateContainerLabelRequest;
    /**
     * Constructs a new <code>CreateContainerLabelRequest</code>.
     * The request body schema for the &#x60;createContainerLabel&#x60; operation.
     * @alias module:vendordfshipping_v2021_12_28/model/CreateContainerLabelRequest
     * @class
     * @param sellingParty {PartyIdentification}
     * @param shipFromParty {PartyIdentification}
     * @param carrierId {CarrierId}
     * @param vendorContainerId {String} The unique, vendor-provided identifier for the container.
     * @param packages {Array[]} An array of package objects in a container.
     */
    constructor(sellingParty: PartyIdentification, shipFromParty: PartyIdentification, carrierId: CarrierId, vendorContainerId: string, packages: any[][]);
    sellingParty: PartyIdentification;
    shipFromParty: PartyIdentification;
    carrierId: CarrierId;
    vendorContainerId: string;
    packages: any[][];
}
import { PartyIdentification } from './PartyIdentification.js';
import { CarrierId } from './CarrierId.js';
//# sourceMappingURL=CreateContainerLabelRequest.d.ts.map