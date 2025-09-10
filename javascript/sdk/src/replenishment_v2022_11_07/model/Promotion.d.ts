/**
 * The Promotion model module.
 * @module replenishment_v2022_11_07/model/Promotion
 * @version 2022-11-07
 */
export class Promotion {
    /**
     * Constructs a <code>Promotion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Promotion} obj Optional instance to populate.
     * @return {Promotion} The populated <code>Promotion</code> instance.
     */
    static constructFromObject(data: any, obj: Promotion): Promotion;
    /**
     * @member {DiscountFunding} sellingPartnerFundedBaseDiscount
     * @type {DiscountFunding}
     */
    sellingPartnerFundedBaseDiscount: DiscountFunding;
    /**
     * @member {DiscountFunding} sellingPartnerFundedTieredDiscount
     * @type {DiscountFunding}
     */
    sellingPartnerFundedTieredDiscount: DiscountFunding;
    /**
     * @member {DiscountFunding} amazonFundedBaseDiscount
     * @type {DiscountFunding}
     */
    amazonFundedBaseDiscount: DiscountFunding;
    /**
     * @member {DiscountFunding} amazonFundedTieredDiscount
     * @type {DiscountFunding}
     */
    amazonFundedTieredDiscount: DiscountFunding;
}
import { DiscountFunding } from './DiscountFunding.js';
//# sourceMappingURL=Promotion.d.ts.map