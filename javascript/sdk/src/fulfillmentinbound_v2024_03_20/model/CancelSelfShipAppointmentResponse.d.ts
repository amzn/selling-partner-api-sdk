/**
 * The CancelSelfShipAppointmentResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/CancelSelfShipAppointmentResponse
 * @version 2024-03-20
 */
export class CancelSelfShipAppointmentResponse {
    /**
     * Constructs a <code>CancelSelfShipAppointmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CancelSelfShipAppointmentResponse} obj Optional instance to populate.
     * @return {CancelSelfShipAppointmentResponse} The populated <code>CancelSelfShipAppointmentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CancelSelfShipAppointmentResponse): CancelSelfShipAppointmentResponse;
    /**
     * Constructs a new <code>CancelSelfShipAppointmentResponse</code>.
     * The &#x60;CancelSelfShipAppointment&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/CancelSelfShipAppointmentResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=CancelSelfShipAppointmentResponse.d.ts.map