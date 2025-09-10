/**
 * The ConfirmPlacementOptionResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ConfirmPlacementOptionResponse
 * @version 2024-03-20
 */
export class ConfirmPlacementOptionResponse {
    /**
     * Constructs a <code>ConfirmPlacementOptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ConfirmPlacementOptionResponse} obj Optional instance to populate.
     * @return {ConfirmPlacementOptionResponse} The populated <code>ConfirmPlacementOptionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ConfirmPlacementOptionResponse): ConfirmPlacementOptionResponse;
    /**
     * Constructs a new <code>ConfirmPlacementOptionResponse</code>.
     * The &#x60;confirmPlacementOption&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ConfirmPlacementOptionResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=ConfirmPlacementOptionResponse.d.ts.map