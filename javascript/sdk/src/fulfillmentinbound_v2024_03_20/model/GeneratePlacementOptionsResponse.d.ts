/**
 * The GeneratePlacementOptionsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/GeneratePlacementOptionsResponse
 * @version 2024-03-20
 */
export class GeneratePlacementOptionsResponse {
    /**
     * Constructs a <code>GeneratePlacementOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GeneratePlacementOptionsResponse} obj Optional instance to populate.
     * @return {GeneratePlacementOptionsResponse} The populated <code>GeneratePlacementOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GeneratePlacementOptionsResponse): GeneratePlacementOptionsResponse;
    /**
     * Constructs a new <code>GeneratePlacementOptionsResponse</code>.
     * The &#x60;generatePlacementOptions&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/GeneratePlacementOptionsResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=GeneratePlacementOptionsResponse.d.ts.map