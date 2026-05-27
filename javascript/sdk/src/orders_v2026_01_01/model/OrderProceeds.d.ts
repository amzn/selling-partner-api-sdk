/**
 * The OrderProceeds model module.
 * @module orders_v2026_01_01/model/OrderProceeds
 * @version 2026-01-01
 */
export class OrderProceeds {
    /**
     * Constructs a <code>OrderProceeds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderProceeds} obj Optional instance to populate.
     * @return {OrderProceeds} The populated <code>OrderProceeds</code> instance.
     */
    static constructFromObject(data: Object, obj: OrderProceeds): OrderProceeds;
    /**
     * @member {Money} grandTotal
     * @type {Money}
     */
    grandTotal: Money;
    /**
     * Categorized proceeds for the order. Proceed categories are either aggregated across all order items (such as `ITEM`, `SHIPPING`, and `TAX`) or applied at the order level (such as `DELIVERY_TIP`).
     * @member {OrderProceedsBreakdown[]} breakdowns
     * @type {OrderProceedsBreakdown[]}
     */
    breakdowns: OrderProceedsBreakdown[];
}
import { Money } from './Money.js';
import { OrderProceedsBreakdown } from './OrderProceedsBreakdown.js';
//# sourceMappingURL=OrderProceeds.d.ts.map