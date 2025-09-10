/**
 * The LabelDimensions model module.
 * @module merchantfulfillment_v0/model/LabelDimensions
 * @version v0
 */
export class LabelDimensions {
    /**
     * Constructs a <code>LabelDimensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LabelDimensions} obj Optional instance to populate.
     * @return {LabelDimensions} The populated <code>LabelDimensions</code> instance.
     */
    static constructFromObject(data: any, obj: LabelDimensions): LabelDimensions;
    /**
     * Constructs a new <code>LabelDimensions</code>.
     * Dimensions for printing a shipping label.
     * @alias module:merchantfulfillment_v0/model/LabelDimensions
     * @class
     * @param length {Number} A label dimension.
     * @param width {Number} A label dimension.
     * @param unit {UnitOfLength}
     */
    constructor(length: number, width: number, unit: UnitOfLength);
    length: number;
    width: number;
    unit: UnitOfLength;
}
import { UnitOfLength } from './UnitOfLength.js';
//# sourceMappingURL=LabelDimensions.d.ts.map