/**
 * The UpdateSupplySourceRequest model module.
 * @module supplysources_v2020_07_01/model/UpdateSupplySourceRequest
 * @version 2020-07-01
 */
export class UpdateSupplySourceRequest {
    /**
     * Constructs a <code>UpdateSupplySourceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateSupplySourceRequest} obj Optional instance to populate.
     * @return {UpdateSupplySourceRequest} The populated <code>UpdateSupplySourceRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateSupplySourceRequest): UpdateSupplySourceRequest;
    /**
     * The custom alias for this supply source
     * @member {String} alias
     * @type {String}
     */
    alias: string;
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
}
import { SupplySourceConfiguration } from './SupplySourceConfiguration.js';
import { SupplySourceCapabilities } from './SupplySourceCapabilities.js';
//# sourceMappingURL=UpdateSupplySourceRequest.d.ts.map