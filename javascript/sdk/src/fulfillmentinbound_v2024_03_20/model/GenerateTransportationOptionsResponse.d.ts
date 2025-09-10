/**
 * The GenerateTransportationOptionsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/GenerateTransportationOptionsResponse
 * @version 2024-03-20
 */
export class GenerateTransportationOptionsResponse {
    /**
     * Constructs a <code>GenerateTransportationOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GenerateTransportationOptionsResponse} obj Optional instance to populate.
     * @return {GenerateTransportationOptionsResponse} The populated <code>GenerateTransportationOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GenerateTransportationOptionsResponse): GenerateTransportationOptionsResponse;
    /**
     * Constructs a new <code>GenerateTransportationOptionsResponse</code>.
     * The &#x60;generateTransportationOptions&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/GenerateTransportationOptionsResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=GenerateTransportationOptionsResponse.d.ts.map