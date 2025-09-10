/**
 * The ItemVariationTheme model module.
 * @module catalogitems_v2022_04_01/model/ItemVariationTheme
 * @version 2022-04-01
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
     * Names of the Amazon catalog item attributes that are associated with the variation theme.
     * @member {[String]} attributes
     * @type {[String]}
     */
    attributes: [string];
    /**
     * Variation theme that indicates the combination of Amazon catalog item attributes that define the variation family.
     * @member {String} theme
     * @type {String}
     */
    theme: string;
}
//# sourceMappingURL=ItemVariationTheme.d.ts.map