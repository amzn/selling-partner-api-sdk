/**
 * The StandardSingleImageHighlightsModule model module.
 * @module apluscontent_v2020_11_01/model/StandardSingleImageHighlightsModule
 * @version 2020-11-01
 */
export class StandardSingleImageHighlightsModule {
    /**
     * Constructs a <code>StandardSingleImageHighlightsModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardSingleImageHighlightsModule} obj Optional instance to populate.
     * @return {StandardSingleImageHighlightsModule} The populated <code>StandardSingleImageHighlightsModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardSingleImageHighlightsModule): StandardSingleImageHighlightsModule;
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
     * @member {StandardTextBlock} textBlock1
     * @type {StandardTextBlock}
     */
    textBlock1: StandardTextBlock;
    /**
     * @member {StandardTextBlock} textBlock2
     * @type {StandardTextBlock}
     */
    textBlock2: StandardTextBlock;
    /**
     * @member {StandardTextBlock} textBlock3
     * @type {StandardTextBlock}
     */
    textBlock3: StandardTextBlock;
    /**
     * @member {StandardHeaderTextListBlock} bulletedListBlock
     * @type {StandardHeaderTextListBlock}
     */
    bulletedListBlock: StandardHeaderTextListBlock;
}
import { ImageComponent } from './ImageComponent.js';
import { TextComponent } from './TextComponent.js';
import { StandardTextBlock } from './StandardTextBlock.js';
import { StandardHeaderTextListBlock } from './StandardHeaderTextListBlock.js';
//# sourceMappingURL=StandardSingleImageHighlightsModule.d.ts.map