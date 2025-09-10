/**
 * The StandardImageCaptionBlock model module.
 * @module apluscontent_v2020_11_01/model/StandardImageCaptionBlock
 * @version 2020-11-01
 */
export class StandardImageCaptionBlock {
    /**
     * Constructs a <code>StandardImageCaptionBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardImageCaptionBlock} obj Optional instance to populate.
     * @return {StandardImageCaptionBlock} The populated <code>StandardImageCaptionBlock</code> instance.
     */
    static constructFromObject(data: any, obj: StandardImageCaptionBlock): StandardImageCaptionBlock;
    /**
     * @member {ImageComponent} image
     * @type {ImageComponent}
     */
    image: ImageComponent;
    /**
     * @member {TextComponent} caption
     * @type {TextComponent}
     */
    caption: TextComponent;
}
import { ImageComponent } from './ImageComponent.js';
import { TextComponent } from './TextComponent.js';
//# sourceMappingURL=StandardImageCaptionBlock.d.ts.map