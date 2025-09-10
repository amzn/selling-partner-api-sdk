/**
 * The SupplySourceConfiguration model module.
 * @module supplysources_v2020_07_01/model/SupplySourceConfiguration
 * @version 2020-07-01
 */
export class SupplySourceConfiguration {
    /**
     * Constructs a <code>SupplySourceConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SupplySourceConfiguration} obj Optional instance to populate.
     * @return {SupplySourceConfiguration} The populated <code>SupplySourceConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: SupplySourceConfiguration): SupplySourceConfiguration;
    /**
     * @member {OperationalConfiguration} operationalConfiguration
     * @type {OperationalConfiguration}
     */
    operationalConfiguration: OperationalConfiguration;
    /**
     * Please see RFC 6557, should be a canonical time zone ID as listed here: https://www.joda.org/joda-time/timezones.html.
     * @member {String} timezone
     * @type {String}
     */
    timezone: string;
}
import { OperationalConfiguration } from './OperationalConfiguration.js';
//# sourceMappingURL=SupplySourceConfiguration.d.ts.map