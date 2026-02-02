/**
 * The ItemInternationalShipping model module.
 * @module orders_v2026_01_01/model/ItemInternationalShipping
 * @version 2026-01-01
 */
export class ItemInternationalShipping {
    /**
     * Constructs a <code>ItemInternationalShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemInternationalShipping} obj Optional instance to populate.
     * @return {ItemInternationalShipping} The populated <code>ItemInternationalShipping</code> instance.
     */
    static constructFromObject(data: any, obj: ItemInternationalShipping): ItemInternationalShipping;
    /**
     * Import One-Stop Shop registration number required for EU VAT compliance when shipping from outside the European Union. Sellers shipping to the EU from outside the EU must provide this IOSS number to their carrier when Amazon has collected the VAT on the sale.
     * @member {String} iossNumber
     * @type {String}
     */
    iossNumber: string;
}
//# sourceMappingURL=ItemInternationalShipping.d.ts.map