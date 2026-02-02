/**
 * The ItemPacking model module.
 * @module orders_v2026_01_01/model/ItemPacking
 * @version 2026-01-01
 */
export class ItemPacking {
    /**
     * Constructs a <code>ItemPacking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemPacking} obj Optional instance to populate.
     * @return {ItemPacking} The populated <code>ItemPacking</code> instance.
     */
    static constructFromObject(data: any, obj: ItemPacking): ItemPacking;
    /**
     * @member {GiftOption} giftOption
     * @type {GiftOption}
     */
    giftOption: GiftOption;
}
import { GiftOption } from './GiftOption.js';
//# sourceMappingURL=ItemPacking.d.ts.map