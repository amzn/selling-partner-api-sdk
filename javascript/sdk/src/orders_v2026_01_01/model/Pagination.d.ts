/**
 * The Pagination model module.
 * @module orders_v2026_01_01/model/Pagination
 * @version 2026-01-01
 */
export class Pagination {
    /**
     * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Pagination} obj Optional instance to populate.
     * @return {Pagination} The populated <code>Pagination</code> instance.
     */
    static constructFromObject(data: any, obj: Pagination): Pagination;
    /**
     * A token that can be used to fetch the next page of results.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
//# sourceMappingURL=Pagination.d.ts.map