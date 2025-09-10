/**
 * The UpdateBoxIdentifiersResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateBoxIdentifiersResponse
 * @version 2024-03-20
 */
export class UpdateBoxIdentifiersResponse {
    /**
     * Constructs a <code>UpdateBoxIdentifiersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateBoxIdentifiersResponse} obj Optional instance to populate.
     * @return {UpdateBoxIdentifiersResponse} The populated <code>UpdateBoxIdentifiersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateBoxIdentifiersResponse): UpdateBoxIdentifiersResponse;
    /**
     * Constructs a new <code>UpdateBoxIdentifiersResponse</code>.
     * The &#x60;updateBoxIdentifiers&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateBoxIdentifiersResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=UpdateBoxIdentifiersResponse.d.ts.map