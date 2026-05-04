/**
 * The ItemTax model module.
 * @module orders_v2026_01_01/model/ItemTax
 * @version 2026-01-01
 */
export class ItemTax {
    /**
     * Constructs a <code>ItemTax</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemTax} obj Optional instance to populate.
     * @return {ItemTax} The populated <code>ItemTax</code> instance.
     */
    static constructFromObject(data: Object, obj: ItemTax): ItemTax;
    /**
     * A list of tax calculation breakdowns for the order item.
     * @member {ItemTaxCalculationBreakdown[]} taxCalculationBreakdowns
     * @type {ItemTaxCalculationBreakdown[]}
     */
    taxCalculationBreakdowns: ItemTaxCalculationBreakdown[];
    /**
     * A list of tax collections for the order item.
     * @member {ItemTaxCollection[]} taxCollections
     * @type {ItemTaxCollection[]}
     */
    taxCollections: ItemTaxCollection[];
}
import { ItemTaxCalculationBreakdown } from './ItemTaxCalculationBreakdown.js';
import { ItemTaxCollection } from './ItemTaxCollection.js';
//# sourceMappingURL=ItemTax.d.ts.map