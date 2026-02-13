/**
 * The InboundOrderCreationData model module.
 * @module awd_v2024_05_09/model/InboundOrderCreationData
 * @version 2024-05-09
 */
export class InboundOrderCreationData {
    /**
     * Constructs a <code>InboundOrderCreationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundOrderCreationData} obj Optional instance to populate.
     * @return {InboundOrderCreationData} The populated <code>InboundOrderCreationData</code> instance.
     */
    static constructFromObject(data: any, obj: InboundOrderCreationData): InboundOrderCreationData;
    /**
     * Constructs a new <code>InboundOrderCreationData</code>.
     * Payload for creating an inbound order.
     * @alias module:awd_v2024_05_09/model/InboundOrderCreationData
     * @class
     * @param originAddress {Address}
     * @param packagesToInbound {[DistributionPackageQuantity]} List of packages to be inbounded.
     */
    constructor(originAddress: Address, packagesToInbound: [DistributionPackageQuantity]);
    originAddress: Address;
    packagesToInbound: DistributionPackageQuantity[];
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
}
import { Address } from './Address.js';
import { DistributionPackageQuantity } from './DistributionPackageQuantity.js';
import { InboundPreferences } from './InboundPreferences.js';
//# sourceMappingURL=InboundOrderCreationData.d.ts.map