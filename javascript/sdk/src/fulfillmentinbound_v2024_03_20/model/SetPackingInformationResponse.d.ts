/**
 * The SetPackingInformationResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/SetPackingInformationResponse
 * @version 2024-03-20
 */
export class SetPackingInformationResponse {
    /**
     * Constructs a <code>SetPackingInformationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SetPackingInformationResponse} obj Optional instance to populate.
     * @return {SetPackingInformationResponse} The populated <code>SetPackingInformationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SetPackingInformationResponse): SetPackingInformationResponse;
    /**
     * Constructs a new <code>SetPackingInformationResponse</code>.
     * The &#x60;setPackingInformation&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/SetPackingInformationResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=SetPackingInformationResponse.d.ts.map