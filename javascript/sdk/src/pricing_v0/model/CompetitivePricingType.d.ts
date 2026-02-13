/**
 * The CompetitivePricingType model module.
 * @module pricing_v0/model/CompetitivePricingType
 * @version v0
 */
export class CompetitivePricingType {
    /**
     * Constructs a <code>CompetitivePricingType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CompetitivePricingType} obj Optional instance to populate.
     * @return {CompetitivePricingType} The populated <code>CompetitivePricingType</code> instance.
     */
    static constructFromObject(data: any, obj: CompetitivePricingType): CompetitivePricingType;
    /**
     * Constructs a new <code>CompetitivePricingType</code>.
     * Competitive pricing information for the item.
     * @alias module:pricing_v0/model/CompetitivePricingType
     * @class
     * @param competitivePrices {[CompetitivePriceType]} A list of competitive pricing information.
     * @param numberOfOfferListings {[OfferListingCountType]} The number of active offer listings for the item that was submitted. The listing count is returned by condition, one for each listing condition value that is returned.
     */
    constructor(competitivePrices: [CompetitivePriceType], numberOfOfferListings: [OfferListingCountType]);
    competitivePrices: CompetitivePriceType[];
    numberOfOfferListings: OfferListingCountType[];
    /**
     * @member {MoneyType} tradeInValue
     * @type {MoneyType}
     */
    tradeInValue: MoneyType;
}
import { CompetitivePriceType } from './CompetitivePriceType.js';
import { OfferListingCountType } from './OfferListingCountType.js';
import { MoneyType } from './MoneyType.js';
//# sourceMappingURL=CompetitivePricingType.d.ts.map