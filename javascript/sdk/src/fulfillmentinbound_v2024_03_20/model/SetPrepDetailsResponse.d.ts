/**
 * The SetPrepDetailsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/SetPrepDetailsResponse
 * @version 2024-03-20
 */
export class SetPrepDetailsResponse {
    /**
     * Constructs a <code>SetPrepDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SetPrepDetailsResponse} obj Optional instance to populate.
     * @return {SetPrepDetailsResponse} The populated <code>SetPrepDetailsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SetPrepDetailsResponse): SetPrepDetailsResponse;
    /**
     * Constructs a new <code>SetPrepDetailsResponse</code>.
     * The &#x60;setPrepDetails&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/SetPrepDetailsResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=SetPrepDetailsResponse.d.ts.map