/**
 * The SetAppointmentResponse model module.
 * @module services_v1/model/SetAppointmentResponse
 * @version v1
 */
export class SetAppointmentResponse {
    /**
     * Constructs a <code>SetAppointmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SetAppointmentResponse} obj Optional instance to populate.
     * @return {SetAppointmentResponse} The populated <code>SetAppointmentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SetAppointmentResponse): SetAppointmentResponse;
    /**
     * The appointment identifier.
     * @member {String} appointmentId
     * @type {String}
     */
    appointmentId: string;
    /**
     * A list of warnings returned in the sucessful execution response of an API request.
     * @member {Array[]} warnings
     * @type {Array[]}
     */
    warnings: any[][];
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
//# sourceMappingURL=SetAppointmentResponse.d.ts.map