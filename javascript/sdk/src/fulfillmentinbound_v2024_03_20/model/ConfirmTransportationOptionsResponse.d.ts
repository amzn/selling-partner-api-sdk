/**
 * The ConfirmTransportationOptionsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ConfirmTransportationOptionsResponse
 * @version 2024-03-20
 */
export class ConfirmTransportationOptionsResponse {
    /**
     * Constructs a <code>ConfirmTransportationOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ConfirmTransportationOptionsResponse} obj Optional instance to populate.
     * @return {ConfirmTransportationOptionsResponse} The populated <code>ConfirmTransportationOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ConfirmTransportationOptionsResponse): ConfirmTransportationOptionsResponse;
    /**
     * Constructs a new <code>ConfirmTransportationOptionsResponse</code>.
     * The &#x60;confirmTransportationOptions&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ConfirmTransportationOptionsResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=ConfirmTransportationOptionsResponse.d.ts.map