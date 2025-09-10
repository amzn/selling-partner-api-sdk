/**
 * The ListOfferMetricsRequestPagination model module.
 * @module replenishment_v2022_11_07/model/ListOfferMetricsRequestPagination
 * @version 2022-11-07
 */
export class ListOfferMetricsRequestPagination {
    /**
     * Constructs a <code>ListOfferMetricsRequestPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOfferMetricsRequestPagination} obj Optional instance to populate.
     * @return {ListOfferMetricsRequestPagination} The populated <code>ListOfferMetricsRequestPagination</code> instance.
     */
    static constructFromObject(data: any, obj: ListOfferMetricsRequestPagination): ListOfferMetricsRequestPagination;
    /**
     * Constructs a new <code>ListOfferMetricsRequestPagination</code>.
     * Use these parameters to paginate through the response.
     * @alias module:replenishment_v2022_11_07/model/ListOfferMetricsRequestPagination
     * @class
     * @param limit {Number} The maximum number of results to return in the response.
     * @param offset {Number} The offset from which to retrieve the number of results specified by the `limit` value. The first result is at offset 0.
     */
    constructor(limit: number, offset: number);
    limit: number;
    offset: number;
}
//# sourceMappingURL=ListOfferMetricsRequestPagination.d.ts.map