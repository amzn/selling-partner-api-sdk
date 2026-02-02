/**
 * The ItemExpense model module.
 * @module orders_v2026_01_01/model/ItemExpense
 * @version 2026-01-01
 */
export class ItemExpense {
    /**
     * Constructs a <code>ItemExpense</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemExpense} obj Optional instance to populate.
     * @return {ItemExpense} The populated <code>ItemExpense</code> instance.
     */
    static constructFromObject(data: any, obj: ItemExpense): ItemExpense;
    /**
     * @member {ItemPointsCost} pointsCost
     * @type {ItemPointsCost}
     */
    pointsCost: ItemPointsCost;
}
import { ItemPointsCost } from './ItemPointsCost.js';
//# sourceMappingURL=ItemExpense.d.ts.map