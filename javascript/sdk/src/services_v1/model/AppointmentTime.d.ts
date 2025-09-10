/**
 * The AppointmentTime model module.
 * @module services_v1/model/AppointmentTime
 * @version v1
 */
export class AppointmentTime {
    /**
     * Constructs a <code>AppointmentTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AppointmentTime} obj Optional instance to populate.
     * @return {AppointmentTime} The populated <code>AppointmentTime</code> instance.
     */
    static constructFromObject(data: any, obj: AppointmentTime): AppointmentTime;
    /**
     * Constructs a new <code>AppointmentTime</code>.
     * The time of the appointment window.
     * @alias module:services_v1/model/AppointmentTime
     * @class
     * @param startTime {Date} The date and time of the start of the appointment window in ISO 8601 format.
     * @param durationInMinutes {Number} The duration of the appointment window, in minutes.
     */
    constructor(startTime: Date, durationInMinutes: number);
    startTime: Date;
    durationInMinutes: number;
}
//# sourceMappingURL=AppointmentTime.d.ts.map