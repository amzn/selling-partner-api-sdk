/**
 * The ItemVendorDetailsCategory model module.
 * @module catalogitems_v2022_04_01/model/ItemVendorDetailsCategory
 * @version 2022-04-01
 */
export class ItemVendorDetailsCategory {
    /**
     * Constructs a <code>ItemVendorDetailsCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemVendorDetailsCategory} obj Optional instance to populate.
     * @return {ItemVendorDetailsCategory} The populated <code>ItemVendorDetailsCategory</code> instance.
     */
    static constructFromObject(data: any, obj: ItemVendorDetailsCategory): ItemVendorDetailsCategory;
    /**
     * The display name of the product category or subcategory.
     * @member {String} displayName
     * @type {String}
     */
    displayName: string;
    /**
     * The code that identifies the product category or subcategory.
     * @member {String} value
     * @type {String}
     */
    value: string;
}
//# sourceMappingURL=ItemVendorDetailsCategory.d.ts.map