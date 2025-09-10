/**
 * The Dimensions model module.
 * @module easyship_v2022_03_23/model/Dimensions
 * @version 2022-03-23
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
     * The numerical value of the specified dimension.
     * @member {Number} length
     * @type {Number}
     */
    length: number;
    /**
     * The numerical value of the specified dimension.
     * @member {Number} width
     * @type {Number}
     */
    width: number;
    /**
     * The numerical value of the specified dimension.
     * @member {Number} height
     * @type {Number}
     */
    height: number;
    /**
     * @member {UnitOfLength} unit
     * @type {UnitOfLength}
     */
    unit: UnitOfLength;
    /**
     * A string of up to 255 characters.
     * @member {String} identifier
     * @type {String}
     */
    identifier: string;
}
import { UnitOfLength } from './UnitOfLength.js';
//# sourceMappingURL=Dimensions.d.ts.map