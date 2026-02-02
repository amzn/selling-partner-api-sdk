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
    static constructFromObject(data: any, obj: OrderProceeds): OrderProceeds;
    /**
     * @member {Money} grandTotal
     * @type {Money}
     */
    grandTotal: Money;
}
import { Money } from './Money.js';
//# sourceMappingURL=OrderProceeds.d.ts.map