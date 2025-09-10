/**
 * The StandardImageTextBlock model module.
 * @module apluscontent_v2020_11_01/model/StandardImageTextBlock
 * @version 2020-11-01
 */
export class StandardImageTextBlock {
    /**
     * Constructs a <code>StandardImageTextBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardImageTextBlock} obj Optional instance to populate.
     * @return {StandardImageTextBlock} The populated <code>StandardImageTextBlock</code> instance.
     */
    static constructFromObject(data: any, obj: StandardImageTextBlock): StandardImageTextBlock;
    /**
     * @member {ImageComponent} image
     * @type {ImageComponent}
     */
    image: ImageComponent;
    /**
     * @member {TextComponent} headline
     * @type {TextComponent}
     */
    headline: TextComponent;
    /**
     * @member {ParagraphComponent} body
     * @type {ParagraphComponent}
     */
    body: ParagraphComponent;
}
import { ImageComponent } from './ImageComponent.js';
import { TextComponent } from './TextComponent.js';
import { ParagraphComponent } from './ParagraphComponent.js';
//# sourceMappingURL=StandardImageTextBlock.d.ts.map