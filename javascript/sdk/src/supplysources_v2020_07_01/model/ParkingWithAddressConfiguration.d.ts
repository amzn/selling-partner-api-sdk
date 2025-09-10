/**
 * The ParkingWithAddressConfiguration model module.
 * @module supplysources_v2020_07_01/model/ParkingWithAddressConfiguration
 * @version 2020-07-01
 */
export class ParkingWithAddressConfiguration {
    /**
     * Constructs a <code>ParkingWithAddressConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ParkingWithAddressConfiguration} obj Optional instance to populate.
     * @return {ParkingWithAddressConfiguration} The populated <code>ParkingWithAddressConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: ParkingWithAddressConfiguration): ParkingWithAddressConfiguration;
    /**
     * @member {ParkingCostType} parkingCostType
     * @type {ParkingCostType}
     */
    parkingCostType: ParkingCostType;
    /**
     * @member {ParkingSpotIdentificationType} parkingSpotIdentificationType
     * @type {ParkingSpotIdentificationType}
     */
    parkingSpotIdentificationType: ParkingSpotIdentificationType;
    /**
     * An unsigned integer that can be only positive or zero.
     * @member {Number} numberOfParkingSpots
     * @type {Number}
     */
    numberOfParkingSpots: number;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
}
import { ParkingCostType } from './ParkingCostType.js';
import { ParkingSpotIdentificationType } from './ParkingSpotIdentificationType.js';
import { Address } from './Address.js';
//# sourceMappingURL=ParkingWithAddressConfiguration.d.ts.map