/**
 * The StandardImageSidebarModule model module.
 * @module apluscontent_v2020_11_01/model/StandardImageSidebarModule
 * @version 2020-11-01
 */
export class StandardImageSidebarModule {
    /**
     * Constructs a <code>StandardImageSidebarModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardImageSidebarModule} obj Optional instance to populate.
     * @return {StandardImageSidebarModule} The populated <code>StandardImageSidebarModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardImageSidebarModule): StandardImageSidebarModule;
    /**
     * @member {TextComponent} headline
     * @type {TextComponent}
     */
    headline: TextComponent;
    /**
     * @member {StandardImageCaptionBlock} imageCaptionBlock
     * @type {StandardImageCaptionBlock}
     */
    imageCaptionBlock: StandardImageCaptionBlock;
    /**
     * @member {StandardTextBlock} descriptionTextBlock
     * @type {StandardTextBlock}
     */
    descriptionTextBlock: StandardTextBlock;
    /**
     * @member {StandardTextListBlock} descriptionListBlock
     * @type {StandardTextListBlock}
     */
    descriptionListBlock: StandardTextListBlock;
    /**
     * @member {StandardImageTextBlock} sidebarImageTextBlock
     * @type {StandardImageTextBlock}
     */
    sidebarImageTextBlock: StandardImageTextBlock;
    /**
     * @member {StandardTextListBlock} sidebarListBlock
     * @type {StandardTextListBlock}
     */
    sidebarListBlock: StandardTextListBlock;
}
import { TextComponent } from './TextComponent.js';
import { StandardImageCaptionBlock } from './StandardImageCaptionBlock.js';
import { StandardTextBlock } from './StandardTextBlock.js';
import { StandardTextListBlock } from './StandardTextListBlock.js';
import { StandardImageTextBlock } from './StandardImageTextBlock.js';
//# sourceMappingURL=StandardImageSidebarModule.d.ts.map