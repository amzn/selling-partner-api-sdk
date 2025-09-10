/**
 * The CompetitiveSummaryRequest model module.
 * @module pricing_v2022_05_01/model/CompetitiveSummaryRequest
 * @version 2022-05-01
 */
export class CompetitiveSummaryRequest {
    /**
     * Constructs a <code>CompetitiveSummaryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CompetitiveSummaryRequest} obj Optional instance to populate.
     * @return {CompetitiveSummaryRequest} The populated <code>CompetitiveSummaryRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CompetitiveSummaryRequest): CompetitiveSummaryRequest;
    /**
     * Constructs a new <code>CompetitiveSummaryRequest</code>.
     * An individual &#x60;competitiveSummary&#x60; request for an ASIN and &#x60;marketplaceId&#x60;.
     * @alias module:pricing_v2022_05_01/model/CompetitiveSummaryRequest
     * @class
     * @param asin {String} The ASIN of the item.
     * @param marketplaceId {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param includedData {[CompetitiveSummaryIncludedData]} The list of requested competitive pricing data for the product.
     * @param method {HttpMethod}
     * @param uri {String} The URI associated with the individual APIs that are called as part of the batch request.
     */
    constructor(asin: string, marketplaceId: string, includedData: [CompetitiveSummaryIncludedData], method: HttpMethod, uri: string);
    asin: string;
    marketplaceId: string;
    includedData: [CompetitiveSummaryIncludedData];
    method: HttpMethod;
    uri: string;
    /**
     * The list of `lowestPricedOffersInput` parameters that are used to build `lowestPricedOffers` in the response. This attribute is only valid if `lowestPricedOffers` is requested in `includedData`
     * @member {[LowestPricedOffersInput]} lowestPricedOffersInputs
     * @type {[LowestPricedOffersInput]}
     */
    lowestPricedOffersInputs: [LowestPricedOffersInput];
}
import { CompetitiveSummaryIncludedData } from './CompetitiveSummaryIncludedData.js';
import { HttpMethod } from './HttpMethod.js';
import { LowestPricedOffersInput } from './LowestPricedOffersInput.js';
//# sourceMappingURL=CompetitiveSummaryRequest.d.ts.map