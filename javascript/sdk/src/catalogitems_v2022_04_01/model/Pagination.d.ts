/**
 * The Pagination model module.
 * @module catalogitems_v2022_04_01/model/Pagination
 * @version 2022-04-01
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
     * A token that you can use to retrieve the next page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * A token that you can use to retrieve the previous page.
     * @member {String} previousToken
     * @type {String}
     */
    previousToken: string;
}
//# sourceMappingURL=Pagination.d.ts.map