/**
 * The ItemProceedsDetailedBreakdown model module.
 * @module orders_v2026_01_01/model/ItemProceedsDetailedBreakdown
 * @version 2026-01-01
 */
export class ItemProceedsDetailedBreakdown {
    /**
     * Constructs a <code>ItemProceedsDetailedBreakdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemProceedsDetailedBreakdown} obj Optional instance to populate.
     * @return {ItemProceedsDetailedBreakdown} The populated <code>ItemProceedsDetailedBreakdown</code> instance.
     */
    static constructFromObject(data: any, obj: ItemProceedsDetailedBreakdown): ItemProceedsDetailedBreakdown;
    /**
     * Specific classification of the further granular breakdown.   **Possible values**: `ITEM`, `SHIPPING`, `GIFT_WRAP`, `COD_FEE`, `OTHER`, `DISCOUNT`
     * @member {String} subtype
     * @type {String}
     */
    subtype: string;
    /**
     * @member {Money} value
     * @type {Money}
     */
    value: Money;
}
import { Money } from './Money.js';
//# sourceMappingURL=ItemProceedsDetailedBreakdown.d.ts.map