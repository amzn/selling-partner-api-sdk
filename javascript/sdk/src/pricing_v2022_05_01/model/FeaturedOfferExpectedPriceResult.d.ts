/**
 * The FeaturedOfferExpectedPriceResult model module.
 * @module pricing_v2022_05_01/model/FeaturedOfferExpectedPriceResult
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPriceResult {
    /**
     * Constructs a <code>FeaturedOfferExpectedPriceResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeaturedOfferExpectedPriceResult} obj Optional instance to populate.
     * @return {FeaturedOfferExpectedPriceResult} The populated <code>FeaturedOfferExpectedPriceResult</code> instance.
     */
    static constructFromObject(data: any, obj: FeaturedOfferExpectedPriceResult): FeaturedOfferExpectedPriceResult;
    /**
     * Constructs a new <code>FeaturedOfferExpectedPriceResult</code>.
     * The FOEP result data for the requested offer.
     * @alias module:pricing_v2022_05_01/model/FeaturedOfferExpectedPriceResult
     * @class
     * @param resultStatus {String} The status of the FOEP computation. Possible values include `VALID_FOEP`, `NO_COMPETING_OFFER`, `OFFER_NOT_ELIGIBLE`, `OFFER_NOT_FOUND`, and `ASIN_NOT_ELIGIBLE`. Additional values might be added in the future.
     */
    constructor(resultStatus: string);
    resultStatus: string;
    /**
     * @member {FeaturedOfferExpectedPrice} featuredOfferExpectedPrice
     * @type {FeaturedOfferExpectedPrice}
     */
    featuredOfferExpectedPrice: FeaturedOfferExpectedPrice;
    /**
     * @member {FeaturedOffer} competingFeaturedOffer
     * @type {FeaturedOffer}
     */
    competingFeaturedOffer: FeaturedOffer;
    /**
     * @member {FeaturedOffer} currentFeaturedOffer
     * @type {FeaturedOffer}
     */
    currentFeaturedOffer: FeaturedOffer;
}
import { FeaturedOfferExpectedPrice } from './FeaturedOfferExpectedPrice.js';
import { FeaturedOffer } from './FeaturedOffer.js';
//# sourceMappingURL=FeaturedOfferExpectedPriceResult.d.ts.map