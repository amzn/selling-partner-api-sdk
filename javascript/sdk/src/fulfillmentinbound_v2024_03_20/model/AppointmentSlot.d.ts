/**
 * The AppointmentSlot model module.
 * @module fulfillmentinbound_v2024_03_20/model/AppointmentSlot
 * @version 2024-03-20
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
     * Constructs a new <code>AppointmentSlot</code>.
     * The fulfillment center appointment slot for the transportation option.
     * @alias module:fulfillmentinbound_v2024_03_20/model/AppointmentSlot
     * @class
     * @param slotId {String} An identifier to a self-ship appointment slot.
     * @param slotTime {AppointmentSlotTime}
     */
    constructor(slotId: string, slotTime: AppointmentSlotTime);
    slotId: string;
    slotTime: AppointmentSlotTime;
}
import { AppointmentSlotTime } from './AppointmentSlotTime.js';
//# sourceMappingURL=AppointmentSlot.d.ts.map