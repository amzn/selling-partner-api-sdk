/**
 * The ReturnMetadata model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/ReturnMetadata
 * @version 2024-09-11
 */
export class ReturnMetadata {
    /**
     * Constructs a <code>ReturnMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReturnMetadata} obj Optional instance to populate.
     * @return {ReturnMetadata} The populated <code>ReturnMetadata</code> instance.
     */
    static constructFromObject(data: any, obj: ReturnMetadata): ReturnMetadata;
    /**
     * Constructs a new <code>ReturnMetadata</code>.
     * Metadata about the return item.
     * @alias module:externalfulfillmentreturns_v2024_09_11/model/ReturnMetadata
     * @class
     * @param returnReason {String} The reason for the return.
     */
    constructor(returnReason: string);
    returnReason: string;
    /**
     * The RMA ID of the return.
     * @member {String} rmaId
     * @type {String}
     */
    rmaId: string;
    /**
     * The SmartConnect ID of the fulfillment order for which the return was placed.
     * @member {String} fulfillmentOrderId
     * @type {String}
     */
    fulfillmentOrderId: string;
    /**
     * @member {InvoiceInformation} invoiceInformation
     * @type {InvoiceInformation}
     */
    invoiceInformation: InvoiceInformation;
}
import { InvoiceInformation } from './InvoiceInformation.js';
//# sourceMappingURL=ReturnMetadata.d.ts.map