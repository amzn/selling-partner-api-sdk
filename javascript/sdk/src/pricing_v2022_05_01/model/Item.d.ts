/**
 * The Item model module.
 * @module pricing_v2022_05_01/model/Item
 * @version 2022-05-01
 */
export class Item {
    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Item} obj Optional instance to populate.
     * @return {Item} The populated <code>Item</code> instance.
     */
    static constructFromObject(data: Object, obj: Item): Item;
    /**
     * Constructs a new <code>Item</code>.
     * A similar item for the specified ASIN &#x60;marketplaceId&#x60; combination.
     * @alias module:pricing_v2022_05_01/model/Item
     * @class
     * @param asin {String} The ASIN of the item.
     */
    constructor(asin: string);
    asin: string;
}
//# sourceMappingURL=Item.d.ts.map