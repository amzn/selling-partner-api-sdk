/**
 * The VehicleIdentifiers model module.
 * @module vehicles_v2024_11_01/model/VehicleIdentifiers
 * @version 2024-11-01
 */
export class VehicleIdentifiers {
    /**
     * Constructs a <code>VehicleIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {VehicleIdentifiers} obj Optional instance to populate.
     * @return {VehicleIdentifiers} The populated <code>VehicleIdentifiers</code> instance.
     */
    static constructFromObject(data: any, obj: VehicleIdentifiers): VehicleIdentifiers;
    /**
     * Constructs a new <code>VehicleIdentifiers</code>.
     * Combination of vehicle standard and id that can uniquely identify a vehicle from Amazon&#39;s catalog.
     * @alias module:vehicles_v2024_11_01/model/VehicleIdentifiers
     * @class
     * @param standard {VehicleStandard}
     * @param value {String} Id that can uniquely identify a vehicle based the vehicle identification standard.
     */
    constructor(standard: VehicleStandard, value: string);
    standard: VehicleStandard;
    value: string;
}
import { VehicleStandard } from './VehicleStandard.js';
//# sourceMappingURL=VehicleIdentifiers.d.ts.map