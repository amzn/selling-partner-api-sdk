/**
 * The CreateQueryResponse model module.
 * @module datakiosk_v2023_11_15/model/CreateQueryResponse
 * @version 2023-11-15
 */
export class CreateQueryResponse {
    /**
     * Constructs a <code>CreateQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateQueryResponse} obj Optional instance to populate.
     * @return {CreateQueryResponse} The populated <code>CreateQueryResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateQueryResponse): CreateQueryResponse;
    /**
     * Constructs a new <code>CreateQueryResponse</code>.
     * The response for the &#x60;createQuery&#x60; operation.
     * @alias module:datakiosk_v2023_11_15/model/CreateQueryResponse
     * @class
     * @param queryId {String} The identifier for the query. This identifier is unique only in combination with a selling partner account ID.
     */
    constructor(queryId: string);
    queryId: string;
}
//# sourceMappingURL=CreateQueryResponse.d.ts.map