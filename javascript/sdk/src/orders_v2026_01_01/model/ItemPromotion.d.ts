/**
 * The ItemPromotion model module.
 * @module orders_v2026_01_01/model/ItemPromotion
 * @version 2026-01-01
 */
export class ItemPromotion {
    /**
     * Constructs a <code>ItemPromotion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemPromotion} obj Optional instance to populate.
     * @return {ItemPromotion} The populated <code>ItemPromotion</code> instance.
     */
    static constructFromObject(data: any, obj: ItemPromotion): ItemPromotion;
    /**
     * A list of promotions applied to the order item.
     * @member {[ItemPromotionBreakdown]} breakdowns
     * @type {[ItemPromotionBreakdown]}
     */
    breakdowns: [ItemPromotionBreakdown];
}
import { ItemPromotionBreakdown } from './ItemPromotionBreakdown.js';
//# sourceMappingURL=ItemPromotion.d.ts.map