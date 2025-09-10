/**
 * The CreateQuerySpecification model module.
 * @module datakiosk_v2023_11_15/model/CreateQuerySpecification
 * @version 2023-11-15
 */
export class CreateQuerySpecification {
    /**
     * Constructs a <code>CreateQuerySpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateQuerySpecification} obj Optional instance to populate.
     * @return {CreateQuerySpecification} The populated <code>CreateQuerySpecification</code> instance.
     */
    static constructFromObject(data: any, obj: CreateQuerySpecification): CreateQuerySpecification;
    /**
     * Constructs a new <code>CreateQuerySpecification</code>.
     * Information required to create the query.
     * @alias module:datakiosk_v2023_11_15/model/CreateQuerySpecification
     * @class
     * @param query {String} The GraphQL query to submit. A query must be at most 8000 characters after unnecessary whitespace is removed.
     */
    constructor(query: string);
    query: string;
    /**
     * A token to fetch a certain page of query results when there are multiple pages of query results available. The value of this token must be fetched from the `pagination.nextToken` field of the `Query` object, and the `query` field for this object must also be set to the `query` field of the same `Query` object. A `Query` object can be retrieved from either the `getQueries` or `getQuery` operation. In the absence of this token value, the first page of query results will be requested.
     * @member {String} paginationToken
     * @type {String}
     */
    paginationToken: string;
}
//# sourceMappingURL=CreateQuerySpecification.d.ts.map