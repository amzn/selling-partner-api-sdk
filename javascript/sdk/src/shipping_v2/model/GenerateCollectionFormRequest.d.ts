/**
 * The GenerateCollectionFormRequest model module.
 * @module shipping_v2/model/GenerateCollectionFormRequest
 * @version v2
 */
export class GenerateCollectionFormRequest {
    /**
     * Constructs a <code>GenerateCollectionFormRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GenerateCollectionFormRequest} obj Optional instance to populate.
     * @return {GenerateCollectionFormRequest} The populated <code>GenerateCollectionFormRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GenerateCollectionFormRequest): GenerateCollectionFormRequest;
    /**
     * Constructs a new <code>GenerateCollectionFormRequest</code>.
     * The request schema Call to generate the collection form.
     * @alias module:shipping_v2/model/GenerateCollectionFormRequest
     * @class
     * @param carrierId {String} The carrier identifier for the offering, provided by the carrier.
     */
    constructor(carrierId: string);
    carrierId: string;
    /**
     * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
     * @member {Array[]} clientReferenceDetails
     * @type {Array[]}
     */
    clientReferenceDetails: any[][];
    /**
     * @member {Address} shipFromAddress
     * @type {Address}
     */
    shipFromAddress: Address;
}
import { Address } from './Address.js';
//# sourceMappingURL=GenerateCollectionFormRequest.d.ts.map