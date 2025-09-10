/**
 * The PackageWeight model module.
 * @module awd_v2024_05_09/model/PackageWeight
 * @version 2024-05-09
 */
export class PackageWeight {
    /**
     * Constructs a <code>PackageWeight</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageWeight} obj Optional instance to populate.
     * @return {PackageWeight} The populated <code>PackageWeight</code> instance.
     */
    static constructFromObject(data: any, obj: PackageWeight): PackageWeight;
    /**
     * Constructs a new <code>PackageWeight</code>.
     * Represents the weight of the package with a unit of measurement.
     * @alias module:awd_v2024_05_09/model/PackageWeight
     * @class
     * @param unitOfMeasurement {WeightUnitOfMeasurement}
     * @param weight {Number} The package weight value.
     */
    constructor(unitOfMeasurement: WeightUnitOfMeasurement, weight: number);
    unitOfMeasurement: WeightUnitOfMeasurement;
    weight: number;
}
import { WeightUnitOfMeasurement } from './WeightUnitOfMeasurement.js';
//# sourceMappingURL=PackageWeight.d.ts.map