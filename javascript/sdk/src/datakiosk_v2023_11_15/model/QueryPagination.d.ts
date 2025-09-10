/**
 * The QueryPagination model module.
 * @module datakiosk_v2023_11_15/model/QueryPagination
 * @version 2023-11-15
 */
export class QueryPagination {
    /**
     * Constructs a <code>QueryPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {QueryPagination} obj Optional instance to populate.
     * @return {QueryPagination} The populated <code>QueryPagination</code> instance.
     */
    static constructFromObject(data: any, obj: QueryPagination): QueryPagination;
    /**
     * A token that can be used to fetch the next page of results.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
//# sourceMappingURL=QueryPagination.d.ts.map