/**
 * The FeaturedOfferExpectedPriceResponseBody model module.
 * @module pricing_v2022_05_01/model/FeaturedOfferExpectedPriceResponseBody
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPriceResponseBody {
    /**
     * Constructs a <code>FeaturedOfferExpectedPriceResponseBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeaturedOfferExpectedPriceResponseBody} obj Optional instance to populate.
     * @return {FeaturedOfferExpectedPriceResponseBody} The populated <code>FeaturedOfferExpectedPriceResponseBody</code> instance.
     */
    static constructFromObject(data: any, obj: FeaturedOfferExpectedPriceResponseBody): FeaturedOfferExpectedPriceResponseBody;
    /**
     * @member {OfferIdentifier} offerIdentifier
     * @type {OfferIdentifier}
     */
    offerIdentifier: OfferIdentifier;
    /**
     * A list of FOEP results for the requested offer.
     * @member {FeaturedOfferExpectedPriceResult[]} featuredOfferExpectedPriceResults
     * @type {FeaturedOfferExpectedPriceResult[]}
     */
    featuredOfferExpectedPriceResults: FeaturedOfferExpectedPriceResult[];
    /**
     * A list of error responses that are returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { OfferIdentifier } from './OfferIdentifier.js';
import { FeaturedOfferExpectedPriceResult } from './FeaturedOfferExpectedPriceResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=FeaturedOfferExpectedPriceResponseBody.d.ts.map