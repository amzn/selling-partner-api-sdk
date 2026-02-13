/**
 * The LinkCarrierAccountRequest model module.
 * @module shipping_v2/model/LinkCarrierAccountRequest
 * @version v2
 */
export class LinkCarrierAccountRequest {
    /**
     * Constructs a <code>LinkCarrierAccountRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LinkCarrierAccountRequest} obj Optional instance to populate.
     * @return {LinkCarrierAccountRequest} The populated <code>LinkCarrierAccountRequest</code> instance.
     */
    static constructFromObject(data: any, obj: LinkCarrierAccountRequest): LinkCarrierAccountRequest;
    /**
     * Constructs a new <code>LinkCarrierAccountRequest</code>.
     * The request schema for verify and add the merchant&#39;s account with a certain carrier.
     * @alias module:shipping_v2/model/LinkCarrierAccountRequest
     * @class
     * @param carrierAccountType {String} CarrierAccountType  associated with account.
     * @param carrierAccountAttributes {[CarrierAccountAttribute]} A list of all attributes required by the carrier in order to successfully link the merchant's account
     */
    constructor(carrierAccountType: string, carrierAccountAttributes: [CarrierAccountAttribute]);
    carrierAccountType: string;
    carrierAccountAttributes: CarrierAccountAttribute[];
    /**
     * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
     * @member {ClientReferenceDetail[]} clientReferenceDetails
     * @type {ClientReferenceDetail[]}
     */
    clientReferenceDetails: ClientReferenceDetail[];
    /**
     * A list of all attributes required by the carrier in order to successfully link the merchant's account
     * @member {CarrierAccountAttribute[]} encryptedCarrierAccountAttributes
     * @type {CarrierAccountAttribute[]}
     */
    encryptedCarrierAccountAttributes: CarrierAccountAttribute[];
}
import { CarrierAccountAttribute } from './CarrierAccountAttribute.js';
import { ClientReferenceDetail } from './ClientReferenceDetail.js';
//# sourceMappingURL=LinkCarrierAccountRequest.d.ts.map