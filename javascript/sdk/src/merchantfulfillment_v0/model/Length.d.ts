/**
 * The Length model module.
 * @module merchantfulfillment_v0/model/Length
 * @version v0
 */
export class Length {
    /**
     * Constructs a <code>Length</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Length} obj Optional instance to populate.
     * @return {Length} The populated <code>Length</code> instance.
     */
    static constructFromObject(data: any, obj: Length): Length;
    /**
     * The value in units.
     * @member {Number} value
     * @type {Number}
     */
    value: number;
    /**
     * @member {UnitOfLength} unit
     * @type {UnitOfLength}
     */
    unit: UnitOfLength;
}
import { UnitOfLength } from './UnitOfLength.js';
//# sourceMappingURL=Length.d.ts.map