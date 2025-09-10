/**
 * The ImageDimensions model module.
 * @module apluscontent_v2020_11_01/model/ImageDimensions
 * @version 2020-11-01
 */
export class ImageDimensions {
    /**
     * Constructs a <code>ImageDimensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ImageDimensions} obj Optional instance to populate.
     * @return {ImageDimensions} The populated <code>ImageDimensions</code> instance.
     */
    static constructFromObject(data: any, obj: ImageDimensions): ImageDimensions;
    /**
     * Constructs a new <code>ImageDimensions</code>.
     * The dimensions that extend from the top left corner of the image (this applies to cropped and uncropped images). &#x60;ImageDimensions&#x60; units must be in pixels.
     * @alias module:apluscontent_v2020_11_01/model/ImageDimensions
     * @class
     * @param width {IntegerWithUnits}
     * @param height {IntegerWithUnits}
     */
    constructor(width: IntegerWithUnits, height: IntegerWithUnits);
    width: IntegerWithUnits;
    height: IntegerWithUnits;
}
import { IntegerWithUnits } from './IntegerWithUnits.js';
//# sourceMappingURL=ImageDimensions.d.ts.map