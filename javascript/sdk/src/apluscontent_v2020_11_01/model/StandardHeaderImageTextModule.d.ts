/**
 * The StandardHeaderImageTextModule model module.
 * @module apluscontent_v2020_11_01/model/StandardHeaderImageTextModule
 * @version 2020-11-01
 */
export class StandardHeaderImageTextModule {
    /**
     * Constructs a <code>StandardHeaderImageTextModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardHeaderImageTextModule} obj Optional instance to populate.
     * @return {StandardHeaderImageTextModule} The populated <code>StandardHeaderImageTextModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardHeaderImageTextModule): StandardHeaderImageTextModule;
    /**
     * @member {TextComponent} headline
     * @type {TextComponent}
     */
    headline: TextComponent;
    /**
     * @member {StandardImageTextBlock} block
     * @type {StandardImageTextBlock}
     */
    block: StandardImageTextBlock;
}
import { TextComponent } from './TextComponent.js';
import { StandardImageTextBlock } from './StandardImageTextBlock.js';
//# sourceMappingURL=StandardHeaderImageTextModule.d.ts.map