/**
 * The FeaturedBuyingOption model module.
 * @module pricing_v2022_05_01/model/FeaturedBuyingOption
 * @version 2022-05-01
 */
export class FeaturedBuyingOption {
    /**
     * Constructs a <code>FeaturedBuyingOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeaturedBuyingOption} obj Optional instance to populate.
     * @return {FeaturedBuyingOption} The populated <code>FeaturedBuyingOption</code> instance.
     */
    static constructFromObject(data: any, obj: FeaturedBuyingOption): FeaturedBuyingOption;
    /**
     * Constructs a new <code>FeaturedBuyingOption</code>.
     * Describes a featured buying option, which includes a list of segmented featured offers for a particular item condition.
     * @alias module:pricing_v2022_05_01/model/FeaturedBuyingOption
     * @class
     * @param buyingOptionType {String} The buying option type for the featured offer. `buyingOptionType` represents the buying options that a customer receives on the detail page, such as `B2B`, `Fresh`, and `Subscribe n Save`. `buyingOptionType` currently supports `NEW` as a value.
     * @param segmentedFeaturedOffers {[SegmentedFeaturedOffer]} A list of segmented featured offers for the current buying option type. A segment can be considered as a group of regional contexts that all have the same featured offer. A regional context is a combination of factors such as customer type, region, or postal code and buying option.
     */
    constructor(buyingOptionType: string, segmentedFeaturedOffers: [SegmentedFeaturedOffer]);
    buyingOptionType: string;
    segmentedFeaturedOffers: [SegmentedFeaturedOffer];
}
export namespace FeaturedBuyingOption {
    namespace BuyingOptionTypeEnum {
        let New: string;
    }
    /**
     * *
     */
    type BuyingOptionTypeEnum = string;
}
import { SegmentedFeaturedOffer } from './SegmentedFeaturedOffer.js';
//# sourceMappingURL=FeaturedBuyingOption.d.ts.map