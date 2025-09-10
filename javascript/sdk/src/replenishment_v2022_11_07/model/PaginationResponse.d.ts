/**
 * The PaginationResponse model module.
 * @module replenishment_v2022_11_07/model/PaginationResponse
 * @version 2022-11-07
 */
export class PaginationResponse {
    /**
     * Constructs a <code>PaginationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PaginationResponse} obj Optional instance to populate.
     * @return {PaginationResponse} The populated <code>PaginationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: PaginationResponse): PaginationResponse;
    /**
     * Total number of results matching the given filter criteria.
     * @member {Number} totalResults
     * @type {Number}
     */
    totalResults: number;
}
//# sourceMappingURL=PaginationResponse.d.ts.map