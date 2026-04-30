/**
 * The ItemTaxCalculationBreakdown model module.
 * @module orders_v2026_01_01/model/ItemTaxCalculationBreakdown
 * @version 2026-01-01
 */
export class ItemTaxCalculationBreakdown {
    /**
     * Constructs a <code>ItemTaxCalculationBreakdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemTaxCalculationBreakdown} obj Optional instance to populate.
     * @return {ItemTaxCalculationBreakdown} The populated <code>ItemTaxCalculationBreakdown</code> instance.
     */
    static constructFromObject(data: Object, obj: ItemTaxCalculationBreakdown): ItemTaxCalculationBreakdown;
    /**
     * The tax reporting scheme applied to this order item.  **Possible values**: - `UOSS` (Union one stop shop. The item being purchased is held in the EU for shipment) - `IOSS` (Import one stop shop. The item being purchased is not held in the EU for shipment)
     * @member {String} reportingScheme
     * @type {String}
     */
    reportingScheme: string;
}
//# sourceMappingURL=ItemTaxCalculationBreakdown.d.ts.map