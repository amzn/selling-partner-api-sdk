/**
 * The ConfirmPackingOptionResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ConfirmPackingOptionResponse
 * @version 2024-03-20
 */
export class ConfirmPackingOptionResponse {
    /**
     * Constructs a <code>ConfirmPackingOptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ConfirmPackingOptionResponse} obj Optional instance to populate.
     * @return {ConfirmPackingOptionResponse} The populated <code>ConfirmPackingOptionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ConfirmPackingOptionResponse): ConfirmPackingOptionResponse;
    /**
     * Constructs a new <code>ConfirmPackingOptionResponse</code>.
     * The &#x60;confirmPackingOption&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ConfirmPackingOptionResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=ConfirmPackingOptionResponse.d.ts.map