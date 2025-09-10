/**
 * The OfferProgramConfigurationPromotions model module.
 * @module replenishment_v2022_11_07/model/OfferProgramConfigurationPromotions
 * @version 2022-11-07
 */
export class OfferProgramConfigurationPromotions {
    /**
     * Constructs a <code>OfferProgramConfigurationPromotions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OfferProgramConfigurationPromotions} obj Optional instance to populate.
     * @return {OfferProgramConfigurationPromotions} The populated <code>OfferProgramConfigurationPromotions</code> instance.
     */
    static constructFromObject(data: any, obj: OfferProgramConfigurationPromotions): OfferProgramConfigurationPromotions;
    /**
     * @member {OfferProgramConfigurationPromotionsDiscountFunding} sellingPartnerFundedBaseDiscount
     * @type {OfferProgramConfigurationPromotionsDiscountFunding}
     */
    sellingPartnerFundedBaseDiscount: OfferProgramConfigurationPromotionsDiscountFunding;
    /**
     * @member {OfferProgramConfigurationPromotionsDiscountFunding} sellingPartnerFundedTieredDiscount
     * @type {OfferProgramConfigurationPromotionsDiscountFunding}
     */
    sellingPartnerFundedTieredDiscount: OfferProgramConfigurationPromotionsDiscountFunding;
    /**
     * @member {OfferProgramConfigurationPromotionsDiscountFunding} amazonFundedBaseDiscount
     * @type {OfferProgramConfigurationPromotionsDiscountFunding}
     */
    amazonFundedBaseDiscount: OfferProgramConfigurationPromotionsDiscountFunding;
    /**
     * @member {OfferProgramConfigurationPromotionsDiscountFunding} amazonFundedTieredDiscount
     * @type {OfferProgramConfigurationPromotionsDiscountFunding}
     */
    amazonFundedTieredDiscount: OfferProgramConfigurationPromotionsDiscountFunding;
}
import { OfferProgramConfigurationPromotionsDiscountFunding } from './OfferProgramConfigurationPromotionsDiscountFunding.js';
//# sourceMappingURL=OfferProgramConfigurationPromotions.d.ts.map