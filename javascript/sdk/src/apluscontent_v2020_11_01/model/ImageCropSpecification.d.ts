/**
 * The ImageCropSpecification model module.
 * @module apluscontent_v2020_11_01/model/ImageCropSpecification
 * @version 2020-11-01
 */
export class ImageCropSpecification {
    /**
     * Constructs a <code>ImageCropSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ImageCropSpecification} obj Optional instance to populate.
     * @return {ImageCropSpecification} The populated <code>ImageCropSpecification</code> instance.
     */
    static constructFromObject(data: any, obj: ImageCropSpecification): ImageCropSpecification;
    /**
     * Constructs a new <code>ImageCropSpecification</code>.
     * The instructions for optionally cropping an image. If you don&#39;t want to crop the image, set the dimensions to the original image size. If the image is cropped and you don&#39;t include offset values, the coordinates of the top left corner of the cropped image are set to (0,0) by default.
     * @alias module:apluscontent_v2020_11_01/model/ImageCropSpecification
     * @class
     * @param size {ImageDimensions}
     */
    constructor(size: ImageDimensions);
    size: ImageDimensions;
    /**
     * @member {ImageOffsets} offset
     * @type {ImageOffsets}
     */
    offset: ImageOffsets;
}
import { ImageDimensions } from './ImageDimensions.js';
import { ImageOffsets } from './ImageOffsets.js';
//# sourceMappingURL=ImageCropSpecification.d.ts.map