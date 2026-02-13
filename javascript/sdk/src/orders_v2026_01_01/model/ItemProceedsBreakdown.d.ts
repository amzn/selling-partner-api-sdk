/**
 * The ItemProceedsBreakdown model module.
 * @module orders_v2026_01_01/model/ItemProceedsBreakdown
 * @version 2026-01-01
 */
export class ItemProceedsBreakdown {
    /**
     * Constructs a <code>ItemProceedsBreakdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemProceedsBreakdown} obj Optional instance to populate.
     * @return {ItemProceedsBreakdown} The populated <code>ItemProceedsBreakdown</code> instance.
     */
    static constructFromObject(data: any, obj: ItemProceedsBreakdown): ItemProceedsBreakdown;
    /**
     * Category classification of the proceeds breakdown.   **Possible values**: `ITEM`, `SHIPPING`, `GIFT_WRAP`, `COD_FEE`, `OTHER`, `TAX`, `DISCOUNT`
     * @member {String} type
     * @type {String}
     */
    type: string;
    /**
     * @member {Money} subtotal
     * @type {Money}
     */
    subtotal: Money;
    /**
     * Further granular breakdown of the subtotal.
     * @member {ItemProceedsDetailedBreakdown[]} detailedBreakdowns
     * @type {ItemProceedsDetailedBreakdown[]}
     */
    detailedBreakdowns: ItemProceedsDetailedBreakdown[];
}
import { Money } from './Money.js';
import { ItemProceedsDetailedBreakdown } from './ItemProceedsDetailedBreakdown.js';
//# sourceMappingURL=ItemProceedsBreakdown.d.ts.map