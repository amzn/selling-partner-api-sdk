/**
 * The ImageOffsets model module.
 * @module apluscontent_v2020_11_01/model/ImageOffsets
 * @version 2020-11-01
 */
export class ImageOffsets {
    /**
     * Constructs a <code>ImageOffsets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ImageOffsets} obj Optional instance to populate.
     * @return {ImageOffsets} The populated <code>ImageOffsets</code> instance.
     */
    static constructFromObject(data: any, obj: ImageOffsets): ImageOffsets;
    /**
     * Constructs a new <code>ImageOffsets</code>.
     * The top left corner of the cropped image, specified in the original image&#39;s coordinate space.
     * @alias module:apluscontent_v2020_11_01/model/ImageOffsets
     * @class
     * @param x {IntegerWithUnits}
     * @param y {IntegerWithUnits}
     */
    constructor(x: IntegerWithUnits, y: IntegerWithUnits);
    x: IntegerWithUnits;
    y: IntegerWithUnits;
}
import { IntegerWithUnits } from './IntegerWithUnits.js';
//# sourceMappingURL=ImageOffsets.d.ts.map