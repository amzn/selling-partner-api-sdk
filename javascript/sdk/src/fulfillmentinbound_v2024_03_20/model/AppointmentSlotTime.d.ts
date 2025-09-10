/**
 * The AppointmentSlotTime model module.
 * @module fulfillmentinbound_v2024_03_20/model/AppointmentSlotTime
 * @version 2024-03-20
 */
export class AppointmentSlotTime {
    /**
     * Constructs a <code>AppointmentSlotTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AppointmentSlotTime} obj Optional instance to populate.
     * @return {AppointmentSlotTime} The populated <code>AppointmentSlotTime</code> instance.
     */
    static constructFromObject(data: any, obj: AppointmentSlotTime): AppointmentSlotTime;
    /**
     * Constructs a new <code>AppointmentSlotTime</code>.
     * An appointment slot time with start and end.
     * @alias module:fulfillmentinbound_v2024_03_20/model/AppointmentSlotTime
     * @class
     * @param endTime {Date} The end timestamp of the appointment in UTC.
     * @param startTime {Date} The start timestamp of the appointment in UTC.
     */
    constructor(endTime: Date, startTime: Date);
    endTime: Date;
    startTime: Date;
}
//# sourceMappingURL=AppointmentSlotTime.d.ts.map