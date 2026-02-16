/**
 * The GetItemOffersBatchRequest model module.
 * @module pricing_v0/model/GetItemOffersBatchRequest
 * @version v0
 */
export class GetItemOffersBatchRequest {
    /**
     * Constructs a <code>GetItemOffersBatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetItemOffersBatchRequest} obj Optional instance to populate.
     * @return {GetItemOffersBatchRequest} The populated <code>GetItemOffersBatchRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetItemOffersBatchRequest): GetItemOffersBatchRequest;
    /**
     * A list of `getListingOffers` batched requests to run.
     * @member {ItemOffersRequest[]} requests
     * @type {ItemOffersRequest[]}
     */
    requests: ItemOffersRequest[];
}
import { ItemOffersRequest } from './ItemOffersRequest.js';
//# sourceMappingURL=GetItemOffersBatchRequest.d.ts.map