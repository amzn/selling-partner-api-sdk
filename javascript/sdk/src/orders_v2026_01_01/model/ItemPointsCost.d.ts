/**
 * The ItemPointsCost model module.
 * @module orders_v2026_01_01/model/ItemPointsCost
 * @version 2026-01-01
 */
export class ItemPointsCost {
    /**
     * Constructs a <code>ItemPointsCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemPointsCost} obj Optional instance to populate.
     * @return {ItemPointsCost} The populated <code>ItemPointsCost</code> instance.
     */
    static constructFromObject(data: any, obj: ItemPointsCost): ItemPointsCost;
    /**
     * @member {PointsGranted} pointsGranted
     * @type {PointsGranted}
     */
    pointsGranted: PointsGranted;
}
import { PointsGranted } from './PointsGranted.js';
//# sourceMappingURL=ItemPointsCost.d.ts.map