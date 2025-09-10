/**
 * The SupplySource model module.
 * @module supplysources_v2020_07_01/model/SupplySource
 * @version 2020-07-01
 */
export class SupplySource {
    /**
     * Constructs a <code>SupplySource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SupplySource} obj Optional instance to populate.
     * @return {SupplySource} The populated <code>SupplySource</code> instance.
     */
    static constructFromObject(data: any, obj: SupplySource): SupplySource;
    /**
     * An Amazon generated unique supply source ID.
     * @member {String} supplySourceId
     * @type {String}
     */
    supplySourceId: string;
    /**
     * The seller-provided unique supply source code.
     * @member {String} supplySourceCode
     * @type {String}
     */
    supplySourceCode: string;
    /**
     * The custom alias for this supply source
     * @member {String} alias
     * @type {String}
     */
    alias: string;
    /**
     * @member {SupplySourceStatusReadOnly} status
     * @type {SupplySourceStatusReadOnly}
     */
    status: SupplySourceStatusReadOnly;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
    /**
     * @member {SupplySourceConfiguration} configuration
     * @type {SupplySourceConfiguration}
     */
    configuration: SupplySourceConfiguration;
    /**
     * @member {SupplySourceCapabilities} capabilities
     * @type {SupplySourceCapabilities}
     */
    capabilities: SupplySourceCapabilities;
    /**
     * A date and time in the rfc3339 format.
     * @member {String} createdAt
     * @type {String}
     */
    createdAt: string;
    /**
     * A date and time in the rfc3339 format.
     * @member {String} updatedAt
     * @type {String}
     */
    updatedAt: string;
}
import { SupplySourceStatusReadOnly } from './SupplySourceStatusReadOnly.js';
import { Address } from './Address.js';
import { SupplySourceConfiguration } from './SupplySourceConfiguration.js';
import { SupplySourceCapabilities } from './SupplySourceCapabilities.js';
//# sourceMappingURL=SupplySource.d.ts.map