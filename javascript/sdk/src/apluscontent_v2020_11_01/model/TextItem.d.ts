/**
 * The TextItem model module.
 * @module apluscontent_v2020_11_01/model/TextItem
 * @version 2020-11-01
 */
export class TextItem {
    /**
     * Constructs a <code>TextItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TextItem} obj Optional instance to populate.
     * @return {TextItem} The populated <code>TextItem</code> instance.
     */
    static constructFromObject(data: any, obj: TextItem): TextItem;
    /**
     * Constructs a new <code>TextItem</code>.
     * Rich positional text that is usually presented as a collection of bullet points.
     * @alias module:apluscontent_v2020_11_01/model/TextItem
     * @class
     * @param position {Number} The rank or index of this text item within the collection. Different items cannot occupy the same position within a single collection.
     * @param text {TextComponent}
     */
    constructor(position: number, text: TextComponent);
    position: number;
    text: TextComponent;
}
import { TextComponent } from './TextComponent.js';
//# sourceMappingURL=TextItem.d.ts.map