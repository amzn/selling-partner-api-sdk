/**
 * The StandardSingleImageSpecsDetailModule model module.
 * @module apluscontent_v2020_11_01/model/StandardSingleImageSpecsDetailModule
 * @version 2020-11-01
 */
export class StandardSingleImageSpecsDetailModule {
    /**
     * Constructs a <code>StandardSingleImageSpecsDetailModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardSingleImageSpecsDetailModule} obj Optional instance to populate.
     * @return {StandardSingleImageSpecsDetailModule} The populated <code>StandardSingleImageSpecsDetailModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardSingleImageSpecsDetailModule): StandardSingleImageSpecsDetailModule;
    /**
     * @member {TextComponent} headline
     * @type {TextComponent}
     */
    headline: TextComponent;
    /**
     * @member {ImageComponent} image
     * @type {ImageComponent}
     */
    image: ImageComponent;
    /**
     * @member {TextComponent} descriptionHeadline
     * @type {TextComponent}
     */
    descriptionHeadline: TextComponent;
    /**
     * @member {StandardTextBlock} descriptionBlock1
     * @type {StandardTextBlock}
     */
    descriptionBlock1: StandardTextBlock;
    /**
     * @member {StandardTextBlock} descriptionBlock2
     * @type {StandardTextBlock}
     */
    descriptionBlock2: StandardTextBlock;
    /**
     * @member {TextComponent} specificationHeadline
     * @type {TextComponent}
     */
    specificationHeadline: TextComponent;
    /**
     * @member {StandardHeaderTextListBlock} specificationListBlock
     * @type {StandardHeaderTextListBlock}
     */
    specificationListBlock: StandardHeaderTextListBlock;
    /**
     * @member {StandardTextBlock} specificationTextBlock
     * @type {StandardTextBlock}
     */
    specificationTextBlock: StandardTextBlock;
}
import { TextComponent } from './TextComponent.js';
import { ImageComponent } from './ImageComponent.js';
import { StandardTextBlock } from './StandardTextBlock.js';
import { StandardHeaderTextListBlock } from './StandardHeaderTextListBlock.js';
//# sourceMappingURL=StandardSingleImageSpecsDetailModule.d.ts.map