/**
 * The StandardThreeImageTextModule model module.
 * @module apluscontent_v2020_11_01/model/StandardThreeImageTextModule
 * @version 2020-11-01
 */
export class StandardThreeImageTextModule {
    /**
     * Constructs a <code>StandardThreeImageTextModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardThreeImageTextModule} obj Optional instance to populate.
     * @return {StandardThreeImageTextModule} The populated <code>StandardThreeImageTextModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardThreeImageTextModule): StandardThreeImageTextModule;
    /**
     * @member {TextComponent} headline
     * @type {TextComponent}
     */
    headline: TextComponent;
    /**
     * @member {StandardImageTextBlock} block1
     * @type {StandardImageTextBlock}
     */
    block1: StandardImageTextBlock;
    /**
     * @member {StandardImageTextBlock} block2
     * @type {StandardImageTextBlock}
     */
    block2: StandardImageTextBlock;
    /**
     * @member {StandardImageTextBlock} block3
     * @type {StandardImageTextBlock}
     */
    block3: StandardImageTextBlock;
}
import { TextComponent } from './TextComponent.js';
import { StandardImageTextBlock } from './StandardImageTextBlock.js';
//# sourceMappingURL=StandardThreeImageTextModule.d.ts.map