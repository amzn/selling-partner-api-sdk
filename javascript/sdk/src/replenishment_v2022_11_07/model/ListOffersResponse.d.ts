/**
 * The ListOffersResponse model module.
 * @module replenishment_v2022_11_07/model/ListOffersResponse
 * @version 2022-11-07
 */
export class ListOffersResponse {
    /**
     * Constructs a <code>ListOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOffersResponse} obj Optional instance to populate.
     * @return {ListOffersResponse} The populated <code>ListOffersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListOffersResponse): ListOffersResponse;
    /**
     * A list of offers.
     * @member {ListOffersResponseOffer[]} offers
     * @type {ListOffersResponseOffer[]}
     */
    offers: ListOffersResponseOffer[];
    /**
     * @member {PaginationResponse} pagination
     * @type {PaginationResponse}
     */
    pagination: PaginationResponse;
}
import { ListOffersResponseOffer } from './ListOffersResponseOffer.js';
import { PaginationResponse } from './PaginationResponse.js';
//# sourceMappingURL=ListOffersResponse.d.ts.map