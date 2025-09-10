/**
 * The FixedSlot model module.
 * @module services_v1/model/FixedSlot
 * @version v1
 */
export class FixedSlot {
    /**
     * Constructs a <code>FixedSlot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FixedSlot} obj Optional instance to populate.
     * @return {FixedSlot} The populated <code>FixedSlot</code> instance.
     */
    static constructFromObject(data: any, obj: FixedSlot): FixedSlot;
    /**
     * Start date time of slot in ISO 8601 format with precision of seconds.
     * @member {Date} startDateTime
     * @type {Date}
     */
    startDateTime: Date;
    /**
     * Scheduled capacity corresponding to the slot. This capacity represents the originally allocated capacity as per resource schedule.
     * @member {Number} scheduledCapacity
     * @type {Number}
     */
    scheduledCapacity: number;
    /**
     * Available capacity corresponding to the slot. This capacity represents the capacity available for allocation to reservations.
     * @member {Number} availableCapacity
     * @type {Number}
     */
    availableCapacity: number;
    /**
     * Encumbered capacity corresponding to the slot. This capacity represents the capacity allocated for Amazon Jobs/Appointments/Orders.
     * @member {Number} encumberedCapacity
     * @type {Number}
     */
    encumberedCapacity: number;
    /**
     * Reserved capacity corresponding to the slot. This capacity represents the capacity made unavailable due to events like Breaks/Leaves/Lunch.
     * @member {Number} reservedCapacity
     * @type {Number}
     */
    reservedCapacity: number;
}
//# sourceMappingURL=FixedSlot.d.ts.map