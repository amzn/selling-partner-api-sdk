/**
 * The GetListingOffersBatchResponse model module.
 * @module pricing_v0/model/GetListingOffersBatchResponse
 * @version v0
 */
export class GetListingOffersBatchResponse {
    /**
     * Constructs a <code>GetListingOffersBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetListingOffersBatchResponse} obj Optional instance to populate.
     * @return {GetListingOffersBatchResponse} The populated <code>GetListingOffersBatchResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetListingOffersBatchResponse): GetListingOffersBatchResponse;
    /**
     * A list of `getListingOffers` batched responses.
     * @member {[ListingOffersResponse]} responses
     * @type {[ListingOffersResponse]}
     */
    responses: [ListingOffersResponse];
}
import { ListingOffersResponse } from './ListingOffersResponse.js';
//# sourceMappingURL=GetListingOffersBatchResponse.d.ts.map