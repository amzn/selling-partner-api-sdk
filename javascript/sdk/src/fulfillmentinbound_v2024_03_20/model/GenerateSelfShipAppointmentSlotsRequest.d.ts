/**
 * The GenerateSelfShipAppointmentSlotsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/GenerateSelfShipAppointmentSlotsRequest
 * @version 2024-03-20
 */
export class GenerateSelfShipAppointmentSlotsRequest {
    /**
     * Constructs a <code>GenerateSelfShipAppointmentSlotsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GenerateSelfShipAppointmentSlotsRequest} obj Optional instance to populate.
     * @return {GenerateSelfShipAppointmentSlotsRequest} The populated <code>GenerateSelfShipAppointmentSlotsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GenerateSelfShipAppointmentSlotsRequest): GenerateSelfShipAppointmentSlotsRequest;
    /**
     * The desired end date. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format.
     * @member {Date} desiredEndDate
     * @type {Date}
     */
    desiredEndDate: Date;
    /**
     * The desired start date. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format.
     * @member {Date} desiredStartDate
     * @type {Date}
     */
    desiredStartDate: Date;
}
//# sourceMappingURL=GenerateSelfShipAppointmentSlotsRequest.d.ts.map