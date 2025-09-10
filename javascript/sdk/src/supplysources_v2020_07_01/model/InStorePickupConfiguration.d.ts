/**
 * The InStorePickupConfiguration model module.
 * @module supplysources_v2020_07_01/model/InStorePickupConfiguration
 * @version 2020-07-01
 */
export class InStorePickupConfiguration {
    /**
     * Constructs a <code>InStorePickupConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InStorePickupConfiguration} obj Optional instance to populate.
     * @return {InStorePickupConfiguration} The populated <code>InStorePickupConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: InStorePickupConfiguration): InStorePickupConfiguration;
    /**
     * When true, in-store pickup is supported by the supply source (default: `isSupported` value in `PickupChannel`).
     * @member {Boolean} isSupported
     * @type {Boolean}
     */
    isSupported: boolean;
    /**
     * @member {ParkingConfiguration} parkingConfiguration
     * @type {ParkingConfiguration}
     */
    parkingConfiguration: ParkingConfiguration;
}
import { ParkingConfiguration } from './ParkingConfiguration.js';
//# sourceMappingURL=InStorePickupConfiguration.d.ts.map