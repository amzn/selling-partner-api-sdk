/**
 * The ParagraphComponent model module.
 * @module apluscontent_v2020_11_01/model/ParagraphComponent
 * @version 2020-11-01
 */
export class ParagraphComponent {
    /**
     * Constructs a <code>ParagraphComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ParagraphComponent} obj Optional instance to populate.
     * @return {ParagraphComponent} The populated <code>ParagraphComponent</code> instance.
     */
    static constructFromObject(data: any, obj: ParagraphComponent): ParagraphComponent;
    /**
     * Constructs a new <code>ParagraphComponent</code>.
     * A list of rich text content that is typically presented in a text box.
     * @alias module:apluscontent_v2020_11_01/model/ParagraphComponent
     * @class
     * @param textList {[TextComponent]}
     */
    constructor(textList: [TextComponent]);
    textList: TextComponent[];
}
import { TextComponent } from './TextComponent.js';
//# sourceMappingURL=ParagraphComponent.d.ts.map