/**
 * The StandardImageTextCaptionBlock model module.
 * @module apluscontent_v2020_11_01/model/StandardImageTextCaptionBlock
 * @version 2020-11-01
 */
export class StandardImageTextCaptionBlock {
    /**
     * Constructs a <code>StandardImageTextCaptionBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardImageTextCaptionBlock} obj Optional instance to populate.
     * @return {StandardImageTextCaptionBlock} The populated <code>StandardImageTextCaptionBlock</code> instance.
     */
    static constructFromObject(data: any, obj: StandardImageTextCaptionBlock): StandardImageTextCaptionBlock;
    /**
     * @member {StandardImageTextBlock} block
     * @type {StandardImageTextBlock}
     */
    block: StandardImageTextBlock;
    /**
     * @member {TextComponent} caption
     * @type {TextComponent}
     */
    caption: TextComponent;
}
import { StandardImageTextBlock } from './StandardImageTextBlock.js';
import { TextComponent } from './TextComponent.js';
//# sourceMappingURL=StandardImageTextCaptionBlock.d.ts.map