/**
 * The InboundOrder model module.
 * @module awd_v2024_05_09/model/InboundOrder
 * @version 2024-05-09
 */
export class InboundOrder {
    /**
     * Constructs a <code>InboundOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundOrder} obj Optional instance to populate.
     * @return {InboundOrder} The populated <code>InboundOrder</code> instance.
     */
    static constructFromObject(data: any, obj: InboundOrder): InboundOrder;
    /**
     * Constructs a new <code>InboundOrder</code>.
     * Represents an AWD inbound order.
     * @alias module:awd_v2024_05_09/model/InboundOrder
     * @class
     * @param createdAt {Date} Date when this order was created.
     * @param orderId {String} Inbound order ID.
     * @param orderStatus {InboundStatus}
     * @param originAddress {Address}
     * @param packagesToInbound {[DistributionPackageQuantity]} List of packages to be inbounded.
     */
    constructor(createdAt: Date, orderId: string, orderStatus: InboundStatus, originAddress: Address, packagesToInbound: [DistributionPackageQuantity]);
    createdAt: Date;
    orderId: string;
    orderStatus: InboundStatus;
    originAddress: Address;
    packagesToInbound: DistributionPackageQuantity[];
    /**
     * @member {DestinationDetails} destinationDetails
     * @type {DestinationDetails}
     */
    destinationDetails: DestinationDetails;
    /**
     * Reference ID that can be used to correlate the order with partner resources.
     * @member {String} externalReferenceId
     * @type {String}
     */
    externalReferenceId: string;
    /**
     * @member {InboundPreferences} preferences
     * @type {InboundPreferences}
     */
    preferences: InboundPreferences;
    /**
     * Date when this order was last updated.
     * @member {Date} updatedAt
     * @type {Date}
     */
    updatedAt: Date;
}
import { InboundStatus } from './InboundStatus.js';
import { Address } from './Address.js';
import { DistributionPackageQuantity } from './DistributionPackageQuantity.js';
import { DestinationDetails } from './DestinationDetails.js';
import { InboundPreferences } from './InboundPreferences.js';
//# sourceMappingURL=InboundOrder.d.ts.map