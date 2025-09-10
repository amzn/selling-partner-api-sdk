/**
 * The DeliveryChannel model module.
 * @module supplysources_v2020_07_01/model/DeliveryChannel
 * @version 2020-07-01
 */
export class DeliveryChannel {
    /**
     * Constructs a <code>DeliveryChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryChannel} obj Optional instance to populate.
     * @return {DeliveryChannel} The populated <code>DeliveryChannel</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryChannel): DeliveryChannel;
    /**
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
//# sourceMappingURL=DeliveryChannel.d.ts.map