/**
 * The StandardTextBlock model module.
 * @module apluscontent_v2020_11_01/model/StandardTextBlock
 * @version 2020-11-01
 */
export class StandardTextBlock {
    /**
     * Constructs a <code>StandardTextBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardTextBlock} obj Optional instance to populate.
     * @return {StandardTextBlock} The populated <code>StandardTextBlock</code> instance.
     */
    static constructFromObject(data: any, obj: StandardTextBlock): StandardTextBlock;
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
import { TextComponent } from './TextComponent.js';
import { ParagraphComponent } from './ParagraphComponent.js';
//# sourceMappingURL=StandardTextBlock.d.ts.map