/**
 * The TimeSlot model module.
 * @module easyship_v2022_03_23/model/TimeSlot
 * @version 2022-03-23
 */
export class TimeSlot {
    /**
     * Constructs a <code>TimeSlot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TimeSlot} obj Optional instance to populate.
     * @return {TimeSlot} The populated <code>TimeSlot</code> instance.
     */
    static constructFromObject(data: any, obj: TimeSlot): TimeSlot;
    /**
     * Constructs a new <code>TimeSlot</code>.
     * A time window to hand over an Easy Ship package to Amazon Logistics.
     * @alias module:easyship_v2022_03_23/model/TimeSlot
     * @class
     * @param slotId {String} A string of up to 255 characters.
     */
    constructor(slotId: string);
    slotId: string;
    /**
     * A datetime value in ISO 8601 format.
     * @member {Date} startTime
     * @type {Date}
     */
    startTime: Date;
    /**
     * A datetime value in ISO 8601 format.
     * @member {Date} endTime
     * @type {Date}
     */
    endTime: Date;
    /**
     * @member {HandoverMethod} handoverMethod
     * @type {HandoverMethod}
     */
    handoverMethod: HandoverMethod;
}
import { HandoverMethod } from './HandoverMethod.js';
//# sourceMappingURL=TimeSlot.d.ts.map