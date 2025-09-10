/**
 * The Pagination model module.
 * @module vendordfshipping_v2021_12_28/model/Pagination
 * @version 2021-12-28
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
     * Pagination occurs when a request produces a response that exceeds the `pageSize`. This means that the response is divided into individual pages. To retrieve the next page or the previous page, you must pass the `nextToken` value or the `previousToken` value as the `pageToken` parameter in the next request. There is no `nextToken` in the pagination object on the last page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
//# sourceMappingURL=Pagination.d.ts.map