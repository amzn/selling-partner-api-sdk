/**
 * The DirectPurchaseRequest model module.
 * @module shipping_v2/model/DirectPurchaseRequest
 * @version v2
 */
export class DirectPurchaseRequest {
    /**
     * Constructs a <code>DirectPurchaseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DirectPurchaseRequest} obj Optional instance to populate.
     * @return {DirectPurchaseRequest} The populated <code>DirectPurchaseRequest</code> instance.
     */
    static constructFromObject(data: any, obj: DirectPurchaseRequest): DirectPurchaseRequest;
    /**
     * Constructs a new <code>DirectPurchaseRequest</code>.
     * The request schema for the directPurchaseShipment operation. When the channel type is Amazon, the shipTo address is not required and will be ignored.
     * @alias module:shipping_v2/model/DirectPurchaseRequest
     * @class
     * @param channelDetails {ChannelDetails}
     */
    constructor(channelDetails: ChannelDetails);
    channelDetails: ChannelDetails;
    /**
     * @member {Address} shipTo
     * @type {Address}
     */
    shipTo: Address;
    /**
     * @member {Address} shipFrom
     * @type {Address}
     */
    shipFrom: Address;
    /**
     * @member {Address} returnTo
     * @type {Address}
     */
    returnTo: Address;
    /**
     * A list of packages to be shipped through a shipping service offering.
     * @member {[Package]} packages
     * @type {[Package]}
     */
    packages: [Package];
    /**
     * @member {RequestedDocumentSpecification} labelSpecifications
     * @type {RequestedDocumentSpecification}
     */
    labelSpecifications: RequestedDocumentSpecification;
}
import { ChannelDetails } from './ChannelDetails.js';
import { Address } from './Address.js';
import { Package } from './Package.js';
import { RequestedDocumentSpecification } from './RequestedDocumentSpecification.js';
//# sourceMappingURL=DirectPurchaseRequest.d.ts.map