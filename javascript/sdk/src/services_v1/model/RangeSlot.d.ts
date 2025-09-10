/**
 * The RangeSlot model module.
 * @module services_v1/model/RangeSlot
 * @version v1
 */
export class RangeSlot {
    /**
     * Constructs a <code>RangeSlot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RangeSlot} obj Optional instance to populate.
     * @return {RangeSlot} The populated <code>RangeSlot</code> instance.
     */
    static constructFromObject(data: any, obj: RangeSlot): RangeSlot;
    /**
     * Start date time of slot in ISO 8601 format with precision of seconds.
     * @member {Date} startDateTime
     * @type {Date}
     */
    startDateTime: Date;
    /**
     * End date time of slot in ISO 8601 format with precision of seconds.
     * @member {Date} endDateTime
     * @type {Date}
     */
    endDateTime: Date;
    /**
     * Capacity of the slot.
     * @member {Number} capacity
     * @type {Number}
     */
    capacity: number;
}
//# sourceMappingURL=RangeSlot.d.ts.map