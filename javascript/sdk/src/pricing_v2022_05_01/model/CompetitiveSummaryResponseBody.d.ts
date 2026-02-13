/**
 * The CompetitiveSummaryResponseBody model module.
 * @module pricing_v2022_05_01/model/CompetitiveSummaryResponseBody
 * @version 2022-05-01
 */
export class CompetitiveSummaryResponseBody {
    /**
     * Constructs a <code>CompetitiveSummaryResponseBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CompetitiveSummaryResponseBody} obj Optional instance to populate.
     * @return {CompetitiveSummaryResponseBody} The populated <code>CompetitiveSummaryResponseBody</code> instance.
     */
    static constructFromObject(data: any, obj: CompetitiveSummaryResponseBody): CompetitiveSummaryResponseBody;
    /**
     * Constructs a new <code>CompetitiveSummaryResponseBody</code>.
     * The &#x60;competitiveSummaryResponse&#x60; body for a requested ASIN and &#x60;marketplaceId&#x60;.
     * @alias module:pricing_v2022_05_01/model/CompetitiveSummaryResponseBody
     * @class
     * @param asin {String} The ASIN of the item.
     * @param marketplaceId {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     */
    constructor(asin: string, marketplaceId: string);
    asin: string;
    marketplaceId: string;
    /**
     * A list of featured buying options for the specified ASIN `marketplaceId` combination.
     * @member {FeaturedBuyingOption[]} featuredBuyingOptions
     * @type {FeaturedBuyingOption[]}
     */
    featuredBuyingOptions: FeaturedBuyingOption[];
    /**
     * A list of lowest priced offers for the specified ASIN `marketplaceId` combination.
     * @member {LowestPricedOffer[]} lowestPricedOffers
     * @type {LowestPricedOffer[]}
     */
    lowestPricedOffers: LowestPricedOffer[];
    /**
     * A list of reference prices for the specified ASIN `marketplaceId` combination.
     * @member {ReferencePrice[]} referencePrices
     * @type {ReferencePrice[]}
     */
    referencePrices: ReferencePrice[];
    /**
     * A list of error responses that are returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { FeaturedBuyingOption } from './FeaturedBuyingOption.js';
import { LowestPricedOffer } from './LowestPricedOffer.js';
import { ReferencePrice } from './ReferencePrice.js';
import { Error } from './Error.js';
//# sourceMappingURL=CompetitiveSummaryResponseBody.d.ts.map