/**
 * The GetItemOffersBatchResponse model module.
 * @module pricing_v0/model/GetItemOffersBatchResponse
 * @version v0
 */
export class GetItemOffersBatchResponse {
    /**
     * Constructs a <code>GetItemOffersBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetItemOffersBatchResponse} obj Optional instance to populate.
     * @return {GetItemOffersBatchResponse} The populated <code>GetItemOffersBatchResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetItemOffersBatchResponse): GetItemOffersBatchResponse;
    /**
     * A list of `getItemOffers` batched responses.
     * @member {[ItemOffersResponse]} responses
     * @type {[ItemOffersResponse]}
     */
    responses: [ItemOffersResponse];
}
import { ItemOffersResponse } from './ItemOffersResponse.js';
//# sourceMappingURL=GetItemOffersBatchResponse.d.ts.map