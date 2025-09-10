/**
 * The AppointmentTimeInput model module.
 * @module services_v1/model/AppointmentTimeInput
 * @version v1
 */
export class AppointmentTimeInput {
    /**
     * Constructs a <code>AppointmentTimeInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AppointmentTimeInput} obj Optional instance to populate.
     * @return {AppointmentTimeInput} The populated <code>AppointmentTimeInput</code> instance.
     */
    static constructFromObject(data: any, obj: AppointmentTimeInput): AppointmentTimeInput;
    /**
     * Constructs a new <code>AppointmentTimeInput</code>.
     * The input appointment time details.
     * @alias module:services_v1/model/AppointmentTimeInput
     * @class
     * @param startTime {Date} The date, time in UTC for the start time of an appointment in ISO 8601 format.
     */
    constructor(startTime: Date);
    startTime: Date;
    /**
     * The duration of an appointment in minutes.
     * @member {Number} durationInMinutes
     * @type {Number}
     */
    durationInMinutes: number;
}
//# sourceMappingURL=AppointmentTimeInput.d.ts.map