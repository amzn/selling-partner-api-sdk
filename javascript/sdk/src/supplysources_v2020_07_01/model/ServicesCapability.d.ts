/**
 * The ServicesCapability model module.
 * @module supplysources_v2020_07_01/model/ServicesCapability
 * @version 2020-07-01
 */
export class ServicesCapability {
    /**
     * Constructs a <code>ServicesCapability</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ServicesCapability} obj Optional instance to populate.
     * @return {ServicesCapability} The populated <code>ServicesCapability</code> instance.
     */
    static constructFromObject(data: any, obj: ServicesCapability): ServicesCapability;
    /**
     * When true, `SupplySource` supports the Service capability.
     * @member {Boolean} isSupported
     * @type {Boolean}
     */
    isSupported: boolean;
    /**
     * @member {OperationalConfiguration} operationalConfiguration
     * @type {OperationalConfiguration}
     */
    operationalConfiguration: OperationalConfiguration;
}
import { OperationalConfiguration } from './OperationalConfiguration.js';
//# sourceMappingURL=ServicesCapability.d.ts.map