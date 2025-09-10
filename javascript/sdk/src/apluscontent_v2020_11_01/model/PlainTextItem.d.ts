/**
 * The PlainTextItem model module.
 * @module apluscontent_v2020_11_01/model/PlainTextItem
 * @version 2020-11-01
 */
export class PlainTextItem {
    /**
     * Constructs a <code>PlainTextItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PlainTextItem} obj Optional instance to populate.
     * @return {PlainTextItem} The populated <code>PlainTextItem</code> instance.
     */
    static constructFromObject(data: any, obj: PlainTextItem): PlainTextItem;
    /**
     * Constructs a new <code>PlainTextItem</code>.
     * Plain positional text that is used in collections of brief labels and descriptors.
     * @alias module:apluscontent_v2020_11_01/model/PlainTextItem
     * @class
     * @param position {Number} The rank or index of this text item within the collection. Different items cannot occupy the same position within a single collection.
     * @param value {String} The actual plain text.
     */
    constructor(position: number, value: string);
    position: number;
    value: string;
}
//# sourceMappingURL=PlainTextItem.d.ts.map