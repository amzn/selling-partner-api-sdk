/**
 * The ItemVariationTheme model module.
 * @module listingsitems_v2021_08_01/model/ItemVariationTheme
 * @version 2021-08-01
 */
export class ItemVariationTheme {
    /**
     * Constructs a <code>ItemVariationTheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemVariationTheme} obj Optional instance to populate.
     * @return {ItemVariationTheme} The populated <code>ItemVariationTheme</code> instance.
     */
    static constructFromObject(data: any, obj: ItemVariationTheme): ItemVariationTheme;
    /**
     * Constructs a new <code>ItemVariationTheme</code>.
     * A variation theme that indicates the combination of listing item attributes that define the variation family.
     * @alias module:listingsitems_v2021_08_01/model/ItemVariationTheme
     * @class
     * @param attributes {Array[]} The names of the listing item attributes that are associated with the variation theme.
     * @param theme {String} The variation theme that indicates the combination of listing item attributes that define the variation family.
     */
    constructor(attributes: any[][], theme: string);
    attributes: any[][];
    theme: string;
}
//# sourceMappingURL=ItemVariationTheme.d.ts.map