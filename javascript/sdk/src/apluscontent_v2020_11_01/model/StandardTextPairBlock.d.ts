/**
 * The StandardTextPairBlock model module.
 * @module apluscontent_v2020_11_01/model/StandardTextPairBlock
 * @version 2020-11-01
 */
export class StandardTextPairBlock {
    /**
     * Constructs a <code>StandardTextPairBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardTextPairBlock} obj Optional instance to populate.
     * @return {StandardTextPairBlock} The populated <code>StandardTextPairBlock</code> instance.
     */
    static constructFromObject(data: any, obj: StandardTextPairBlock): StandardTextPairBlock;
    /**
     * @member {TextComponent} label
     * @type {TextComponent}
     */
    label: TextComponent;
    /**
     * @member {TextComponent} description
     * @type {TextComponent}
     */
    description: TextComponent;
}
import { TextComponent } from './TextComponent.js';
//# sourceMappingURL=StandardTextPairBlock.d.ts.map