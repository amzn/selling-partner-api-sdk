/**
 * The ItemCustomization model module.
 * @module orders_v2026_01_01/model/ItemCustomization
 * @version 2026-01-01
 */
export class ItemCustomization {
    /**
     * Constructs a <code>ItemCustomization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemCustomization} obj Optional instance to populate.
     * @return {ItemCustomization} The populated <code>ItemCustomization</code> instance.
     */
    static constructFromObject(data: any, obj: ItemCustomization): ItemCustomization;
    /**
     * The URL of the customized data for custom orders from the Amazon Custom program.
     * @member {String} customizedUrl
     * @type {String}
     */
    customizedUrl: string;
}
//# sourceMappingURL=ItemCustomization.d.ts.map