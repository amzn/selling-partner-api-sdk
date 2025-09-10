/**
 * The ParkingConfiguration model module.
 * @module supplysources_v2020_07_01/model/ParkingConfiguration
 * @version 2020-07-01
 */
export class ParkingConfiguration {
    /**
     * Constructs a <code>ParkingConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ParkingConfiguration} obj Optional instance to populate.
     * @return {ParkingConfiguration} The populated <code>ParkingConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: ParkingConfiguration): ParkingConfiguration;
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
}
import { ParkingCostType } from './ParkingCostType.js';
import { ParkingSpotIdentificationType } from './ParkingSpotIdentificationType.js';
//# sourceMappingURL=ParkingConfiguration.d.ts.map