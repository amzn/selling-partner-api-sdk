/**
 * The StandardHeaderTextListBlock model module.
 * @module apluscontent_v2020_11_01/model/StandardHeaderTextListBlock
 * @version 2020-11-01
 */
export class StandardHeaderTextListBlock {
    /**
     * Constructs a <code>StandardHeaderTextListBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardHeaderTextListBlock} obj Optional instance to populate.
     * @return {StandardHeaderTextListBlock} The populated <code>StandardHeaderTextListBlock</code> instance.
     */
    static constructFromObject(data: any, obj: StandardHeaderTextListBlock): StandardHeaderTextListBlock;
    /**
     * @member {TextComponent} headline
     * @type {TextComponent}
     */
    headline: TextComponent;
    /**
     * @member {StandardTextListBlock} block
     * @type {StandardTextListBlock}
     */
    block: StandardTextListBlock;
}
import { TextComponent } from './TextComponent.js';
import { StandardTextListBlock } from './StandardTextListBlock.js';
//# sourceMappingURL=StandardHeaderTextListBlock.d.ts.map