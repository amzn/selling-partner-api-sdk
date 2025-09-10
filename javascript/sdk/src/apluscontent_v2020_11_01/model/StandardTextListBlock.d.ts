/**
 * The StandardTextListBlock model module.
 * @module apluscontent_v2020_11_01/model/StandardTextListBlock
 * @version 2020-11-01
 */
export class StandardTextListBlock {
    /**
     * Constructs a <code>StandardTextListBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardTextListBlock} obj Optional instance to populate.
     * @return {StandardTextListBlock} The populated <code>StandardTextListBlock</code> instance.
     */
    static constructFromObject(data: any, obj: StandardTextListBlock): StandardTextListBlock;
    /**
     * Constructs a new <code>StandardTextListBlock</code>.
     * The A+ Content standard fixed-length list of text, usually presented as bullet points.
     * @alias module:apluscontent_v2020_11_01/model/StandardTextListBlock
     * @class
     * @param textList {[TextItem]}
     */
    constructor(textList: [TextItem]);
    textList: [TextItem];
}
import { TextItem } from './TextItem.js';
//# sourceMappingURL=StandardTextListBlock.d.ts.map