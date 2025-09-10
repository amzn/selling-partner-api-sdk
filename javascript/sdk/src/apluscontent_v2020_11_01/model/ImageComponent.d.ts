/**
 * The ImageComponent model module.
 * @module apluscontent_v2020_11_01/model/ImageComponent
 * @version 2020-11-01
 */
export class ImageComponent {
    /**
     * Constructs a <code>ImageComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ImageComponent} obj Optional instance to populate.
     * @return {ImageComponent} The populated <code>ImageComponent</code> instance.
     */
    static constructFromObject(data: any, obj: ImageComponent): ImageComponent;
    /**
     * Constructs a new <code>ImageComponent</code>.
     * A reference to an image, hosted in the A+ Content media library.
     * @alias module:apluscontent_v2020_11_01/model/ImageComponent
     * @class
     * @param uploadDestinationId {String} This identifier is provided by the [Uploads API](https://developer-docs.amazon.com/sp-api/reference/welcome-to-api-references).
     * @param imageCropSpecification {ImageCropSpecification}
     * @param altText {String} The alternative text for the image.
     */
    constructor(uploadDestinationId: string, imageCropSpecification: ImageCropSpecification, altText: string);
    uploadDestinationId: string;
    imageCropSpecification: ImageCropSpecification;
    altText: string;
}
import { ImageCropSpecification } from './ImageCropSpecification.js';
//# sourceMappingURL=ImageComponent.d.ts.map