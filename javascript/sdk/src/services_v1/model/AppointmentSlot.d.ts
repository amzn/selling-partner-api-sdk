/**
 * The AppointmentSlot model module.
 * @module services_v1/model/AppointmentSlot
 * @version v1
 */
export class AppointmentSlot {
    /**
     * Constructs a <code>AppointmentSlot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AppointmentSlot} obj Optional instance to populate.
     * @return {AppointmentSlot} The populated <code>AppointmentSlot</code> instance.
     */
    static constructFromObject(data: any, obj: AppointmentSlot): AppointmentSlot;
    /**
     * Time window start time in ISO 8601 format.
     * @member {Date} startTime
     * @type {Date}
     */
    startTime: Date;
    /**
     * Time window end time in ISO 8601 format.
     * @member {Date} endTime
     * @type {Date}
     */
    endTime: Date;
    /**
     * Number of resources for which a slot can be reserved.
     * @member {Number} capacity
     * @type {Number}
     */
    capacity: number;
}
//# sourceMappingURL=AppointmentSlot.d.ts.map