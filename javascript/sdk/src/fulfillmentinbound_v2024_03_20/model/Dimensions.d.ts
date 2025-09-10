/**
 * The Dimensions model module.
 * @module fulfillmentinbound_v2024_03_20/model/Dimensions
 * @version 2024-03-20
 */
export class Dimensions {
    /**
     * Constructs a <code>Dimensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Dimensions} obj Optional instance to populate.
     * @return {Dimensions} The populated <code>Dimensions</code> instance.
     */
    static constructFromObject(data: any, obj: Dimensions): Dimensions;
    /**
     * Constructs a new <code>Dimensions</code>.
     * Measurement of a package&#39;s dimensions.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Dimensions
     * @class
     * @param height {Number} The height of a package.
     * @param length {Number} The length of a package.
     * @param unitOfMeasurement {UnitOfMeasurement}
     * @param width {Number} The width of a package.
     */
    constructor(height: number, length: number, unitOfMeasurement: UnitOfMeasurement, width: number);
    height: number;
    length: number;
    unitOfMeasurement: UnitOfMeasurement;
    width: number;
}
import { UnitOfMeasurement } from './UnitOfMeasurement.js';
//# sourceMappingURL=Dimensions.d.ts.map