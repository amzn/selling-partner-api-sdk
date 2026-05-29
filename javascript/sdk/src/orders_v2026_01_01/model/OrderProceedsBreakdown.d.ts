/**
 * The OrderProceedsBreakdown model module.
 * @module orders_v2026_01_01/model/OrderProceedsBreakdown
 * @version 2026-01-01
 */
export class OrderProceedsBreakdown {
    /**
     * Constructs a <code>OrderProceedsBreakdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderProceedsBreakdown} obj Optional instance to populate.
     * @return {OrderProceedsBreakdown} The populated <code>OrderProceedsBreakdown</code> instance.
     */
    static constructFromObject(data: Object, obj: OrderProceedsBreakdown): OrderProceedsBreakdown;
    /**
     * Constructs a new <code>OrderProceedsBreakdown</code>.
     * An entry detailing proceeds information.
     * @alias module:orders_v2026_01_01/model/OrderProceedsBreakdown
     * @class
     * @param type {String} The proceeds category.   **Possible values**: `ITEM`, `SHIPPING`, `GIFT_WRAP`, `COD_FEE`, `TAX`, `DISCOUNT`, `DELIVERY_TIP`, `OTHER`. **Note:** `DELIVERY_TIP` is charged separately and not attributed to a specific item. The remaining categories are aggregated across all order items.
     * @param subtotal {Money}
     */
    constructor(type: string, subtotal: Money);
    type: string;
    subtotal: Money;
    /**
     * The processing status of the charge. Only present for categories processed separately after checkout, such as `DELIVERY_TIP`.  **Possible values**: `PENDING`, `FINALIZED`.
     * @member {String} status
     * @type {String}
     */
    status: string;
}
import { Money } from './Money.js';
//# sourceMappingURL=OrderProceedsBreakdown.d.ts.map