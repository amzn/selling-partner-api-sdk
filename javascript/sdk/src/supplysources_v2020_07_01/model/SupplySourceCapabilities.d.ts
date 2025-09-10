/**
 * The SupplySourceCapabilities model module.
 * @module supplysources_v2020_07_01/model/SupplySourceCapabilities
 * @version 2020-07-01
 */
export class SupplySourceCapabilities {
    /**
     * Constructs a <code>SupplySourceCapabilities</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SupplySourceCapabilities} obj Optional instance to populate.
     * @return {SupplySourceCapabilities} The populated <code>SupplySourceCapabilities</code> instance.
     */
    static constructFromObject(data: any, obj: SupplySourceCapabilities): SupplySourceCapabilities;
    /**
     * @member {OutboundCapability} outbound
     * @type {OutboundCapability}
     */
    outbound: OutboundCapability;
    /**
     * @member {ServicesCapability} services
     * @type {ServicesCapability}
     */
    services: ServicesCapability;
}
import { OutboundCapability } from './OutboundCapability.js';
import { ServicesCapability } from './ServicesCapability.js';
//# sourceMappingURL=SupplySourceCapabilities.d.ts.map