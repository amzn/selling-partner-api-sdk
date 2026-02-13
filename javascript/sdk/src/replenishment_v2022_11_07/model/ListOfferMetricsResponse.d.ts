/**
 * The ListOfferMetricsResponse model module.
 * @module replenishment_v2022_11_07/model/ListOfferMetricsResponse
 * @version 2022-11-07
 */
export class ListOfferMetricsResponse {
    /**
     * Constructs a <code>ListOfferMetricsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOfferMetricsResponse} obj Optional instance to populate.
     * @return {ListOfferMetricsResponse} The populated <code>ListOfferMetricsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListOfferMetricsResponse): ListOfferMetricsResponse;
    /**
     * A list of offers and associated metrics.
     * @member {ListOfferMetricsResponseOffer[]} offers
     * @type {ListOfferMetricsResponseOffer[]}
     */
    offers: ListOfferMetricsResponseOffer[];
    /**
     * @member {PaginationResponse} pagination
     * @type {PaginationResponse}
     */
    pagination: PaginationResponse;
}
import { ListOfferMetricsResponseOffer } from './ListOfferMetricsResponseOffer.js';
import { PaginationResponse } from './PaginationResponse.js';
//# sourceMappingURL=ListOfferMetricsResponse.d.ts.map