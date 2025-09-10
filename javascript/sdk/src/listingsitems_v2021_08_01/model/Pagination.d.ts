/**
 * The Pagination model module.
 * @module listingsitems_v2021_08_01/model/Pagination
 * @version 2021-08-01
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
     * A token that can be used to fetch the next page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * A token that can be used to fetch the previous page.
     * @member {String} previousToken
     * @type {String}
     */
    previousToken: string;
}
//# sourceMappingURL=Pagination.d.ts.map