/**
 * The Dimensions model module.
 * @module catalogitems_v2022_04_01/model/Dimensions
 * @version 2022-04-01
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
     * @member {Dimension} height
     * @type {Dimension}
     */
    height: Dimension;
    /**
     * @member {Dimension} length
     * @type {Dimension}
     */
    length: Dimension;
    /**
     * @member {Dimension} weight
     * @type {Dimension}
     */
    weight: Dimension;
    /**
     * @member {Dimension} width
     * @type {Dimension}
     */
    width: Dimension;
}
import { Dimension } from './Dimension.js';
//# sourceMappingURL=Dimensions.d.ts.map