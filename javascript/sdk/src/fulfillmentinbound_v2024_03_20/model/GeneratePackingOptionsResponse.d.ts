/**
 * The GeneratePackingOptionsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/GeneratePackingOptionsResponse
 * @version 2024-03-20
 */
export class GeneratePackingOptionsResponse {
    /**
     * Constructs a <code>GeneratePackingOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GeneratePackingOptionsResponse} obj Optional instance to populate.
     * @return {GeneratePackingOptionsResponse} The populated <code>GeneratePackingOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GeneratePackingOptionsResponse): GeneratePackingOptionsResponse;
    /**
     * Constructs a new <code>GeneratePackingOptionsResponse</code>.
     * The &#x60;generatePackingOptions&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/GeneratePackingOptionsResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=GeneratePackingOptionsResponse.d.ts.map