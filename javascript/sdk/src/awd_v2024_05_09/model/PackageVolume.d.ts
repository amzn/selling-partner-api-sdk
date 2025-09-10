/**
 * The PackageVolume model module.
 * @module awd_v2024_05_09/model/PackageVolume
 * @version 2024-05-09
 */
export class PackageVolume {
    /**
     * Constructs a <code>PackageVolume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageVolume} obj Optional instance to populate.
     * @return {PackageVolume} The populated <code>PackageVolume</code> instance.
     */
    static constructFromObject(data: any, obj: PackageVolume): PackageVolume;
    /**
     * Constructs a new <code>PackageVolume</code>.
     * Represents the volume of the package with a unit of measurement.
     * @alias module:awd_v2024_05_09/model/PackageVolume
     * @class
     * @param unitOfMeasurement {VolumeUnitOfMeasurement}
     * @param volume {Number} The package volume value.
     */
    constructor(unitOfMeasurement: VolumeUnitOfMeasurement, volume: number);
    unitOfMeasurement: VolumeUnitOfMeasurement;
    volume: number;
}
import { VolumeUnitOfMeasurement } from './VolumeUnitOfMeasurement.js';
//# sourceMappingURL=PackageVolume.d.ts.map