/**
 * The ItemProceeds model module.
 * @module orders_v2026_01_01/model/ItemProceeds
 * @version 2026-01-01
 */
export class ItemProceeds {
    /**
     * Constructs a <code>ItemProceeds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemProceeds} obj Optional instance to populate.
     * @return {ItemProceeds} The populated <code>ItemProceeds</code> instance.
     */
    static constructFromObject(data: any, obj: ItemProceeds): ItemProceeds;
    /**
     * @member {Money} proceedsTotal
     * @type {Money}
     */
    proceedsTotal: Money;
    /**
     * The breakdown of proceeds.
     * @member {Array[]} breakdowns
     * @type {Array[]}
     */
    breakdowns: any[][];
}
import { Money } from './Money.js';
//# sourceMappingURL=ItemProceeds.d.ts.map