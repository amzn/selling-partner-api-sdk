/**
 * The GetListingOffersBatchRequest model module.
 * @module pricing_v0/model/GetListingOffersBatchRequest
 * @version v0
 */
export class GetListingOffersBatchRequest {
    /**
     * Constructs a <code>GetListingOffersBatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetListingOffersBatchRequest} obj Optional instance to populate.
     * @return {GetListingOffersBatchRequest} The populated <code>GetListingOffersBatchRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetListingOffersBatchRequest): GetListingOffersBatchRequest;
    /**
     * A list of `getListingOffers` batched requests to run.
     * @member {ListingOffersRequest[]} requests
     * @type {ListingOffersRequest[]}
     */
    requests: ListingOffersRequest[];
}
import { ListingOffersRequest } from './ListingOffersRequest.js';
//# sourceMappingURL=GetListingOffersBatchRequest.d.ts.map