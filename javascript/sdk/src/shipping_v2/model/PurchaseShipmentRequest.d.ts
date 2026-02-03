/**
 * The PurchaseShipmentRequest model module.
 * @module shipping_v2/model/PurchaseShipmentRequest
 * @version v2
 */
export class PurchaseShipmentRequest {
    /**
     * Constructs a <code>PurchaseShipmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PurchaseShipmentRequest} obj Optional instance to populate.
     * @return {PurchaseShipmentRequest} The populated <code>PurchaseShipmentRequest</code> instance.
     */
    static constructFromObject(data: any, obj: PurchaseShipmentRequest): PurchaseShipmentRequest;
    /**
     * Constructs a new <code>PurchaseShipmentRequest</code>.
     * The request schema for the purchaseShipment operation.
     * @alias module:shipping_v2/model/PurchaseShipmentRequest
     * @class
     * @param requestToken {String} A unique token generated to identify a getRates operation.
     * @param rateId {String} An identifier for the rate (shipment offering) provided by a shipping service provider.
     * @param requestedDocumentSpecification {RequestedDocumentSpecification}
     */
    constructor(requestToken: string, rateId: string, requestedDocumentSpecification: RequestedDocumentSpecification);
    requestToken: string;
    rateId: string;
    requestedDocumentSpecification: RequestedDocumentSpecification;
    /**
     * The value-added services to be added to a shipping service purchase.
     * @member {Array[]} requestedValueAddedServices
     * @type {Array[]}
     */
    requestedValueAddedServices: any[][];
    /**
     * The additional inputs required to purchase a shipping offering, in JSON format. The JSON provided here must adhere to the JSON schema that is returned in the response to the getAdditionalInputs operation.  Additional inputs are only required when indicated by the requiresAdditionalInputs property in the response to the getRates operation.
     * @member {{String: Object}} additionalInputs
     * @type {{String: Object}}
     */
    additionalInputs: {
        String: any;
    };
}
import { RequestedDocumentSpecification } from './RequestedDocumentSpecification.js';
//# sourceMappingURL=PurchaseShipmentRequest.d.ts.map