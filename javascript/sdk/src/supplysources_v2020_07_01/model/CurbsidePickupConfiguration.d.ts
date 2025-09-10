/**
 * The CurbsidePickupConfiguration model module.
 * @module supplysources_v2020_07_01/model/CurbsidePickupConfiguration
 * @version 2020-07-01
 */
export class CurbsidePickupConfiguration {
    /**
     * Constructs a <code>CurbsidePickupConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CurbsidePickupConfiguration} obj Optional instance to populate.
     * @return {CurbsidePickupConfiguration} The populated <code>CurbsidePickupConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: CurbsidePickupConfiguration): CurbsidePickupConfiguration;
    /**
     * When true, curbside pickup is supported by the supply source.
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
     * @member {ParkingWithAddressConfiguration} parkingWithAddressConfiguration
     * @type {ParkingWithAddressConfiguration}
     */
    parkingWithAddressConfiguration: ParkingWithAddressConfiguration;
}
import { OperationalConfiguration } from './OperationalConfiguration.js';
import { ParkingWithAddressConfiguration } from './ParkingWithAddressConfiguration.js';
//# sourceMappingURL=CurbsidePickupConfiguration.d.ts.map