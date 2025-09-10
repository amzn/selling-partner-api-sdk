/**
 * The ReturnAuthorization model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ReturnAuthorization
 * @version 2020-07-01
 */
export class ReturnAuthorization {
    /**
     * Constructs a <code>ReturnAuthorization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReturnAuthorization} obj Optional instance to populate.
     * @return {ReturnAuthorization} The populated <code>ReturnAuthorization</code> instance.
     */
    static constructFromObject(data: any, obj: ReturnAuthorization): ReturnAuthorization;
    /**
     * Constructs a new <code>ReturnAuthorization</code>.
     * Return authorization information for items accepted for return.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/ReturnAuthorization
     * @class
     * @param returnAuthorizationId {String} An identifier for the return authorization. This identifier associates return items with the return authorization used to return them.
     * @param fulfillmentCenterId {String} An identifier for the Amazon fulfillment center to which the return items should be sent.
     * @param returnToAddress {Address}
     * @param amazonRmaId {String} The return merchandise authorization (RMA) that Amazon needs to process the return.
     * @param rmaPageURL {String} A URL for a web page that contains the return authorization barcode and the mailing label. This does not include pre-paid shipping.
     */
    constructor(returnAuthorizationId: string, fulfillmentCenterId: string, returnToAddress: Address, amazonRmaId: string, rmaPageURL: string);
    returnAuthorizationId: string;
    fulfillmentCenterId: string;
    returnToAddress: Address;
    amazonRmaId: string;
    rmaPageURL: string;
}
import { Address } from './Address.js';
//# sourceMappingURL=ReturnAuthorization.d.ts.map