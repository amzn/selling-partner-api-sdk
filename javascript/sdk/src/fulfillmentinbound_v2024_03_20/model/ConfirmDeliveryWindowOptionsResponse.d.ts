/**
 * The ConfirmDeliveryWindowOptionsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ConfirmDeliveryWindowOptionsResponse
 * @version 2024-03-20
 */
export class ConfirmDeliveryWindowOptionsResponse {
    /**
     * Constructs a <code>ConfirmDeliveryWindowOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ConfirmDeliveryWindowOptionsResponse} obj Optional instance to populate.
     * @return {ConfirmDeliveryWindowOptionsResponse} The populated <code>ConfirmDeliveryWindowOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ConfirmDeliveryWindowOptionsResponse): ConfirmDeliveryWindowOptionsResponse;
    /**
     * Constructs a new <code>ConfirmDeliveryWindowOptionsResponse</code>.
     * The &#x60;confirmDeliveryWindowOptions&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ConfirmDeliveryWindowOptionsResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=ConfirmDeliveryWindowOptionsResponse.d.ts.map