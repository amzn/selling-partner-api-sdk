/**
 * The PickupChannel model module.
 * @module supplysources_v2020_07_01/model/PickupChannel
 * @version 2020-07-01
 */
export class PickupChannel {
    /**
     * Constructs a <code>PickupChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PickupChannel} obj Optional instance to populate.
     * @return {PickupChannel} The populated <code>PickupChannel</code> instance.
     */
    static constructFromObject(data: any, obj: PickupChannel): PickupChannel;
    /**
     * @member {Duration} inventoryHoldPeriod
     * @type {Duration}
     */
    inventoryHoldPeriod: Duration;
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
    /**
     * @member {InStorePickupConfiguration} inStorePickupConfiguration
     * @type {InStorePickupConfiguration}
     */
    inStorePickupConfiguration: InStorePickupConfiguration;
    /**
     * @member {CurbsidePickupConfiguration} curbsidePickupConfiguration
     * @type {CurbsidePickupConfiguration}
     */
    curbsidePickupConfiguration: CurbsidePickupConfiguration;
}
import { Duration } from './Duration.js';
import { OperationalConfiguration } from './OperationalConfiguration.js';
import { InStorePickupConfiguration } from './InStorePickupConfiguration.js';
import { CurbsidePickupConfiguration } from './CurbsidePickupConfiguration.js';
//# sourceMappingURL=PickupChannel.d.ts.map