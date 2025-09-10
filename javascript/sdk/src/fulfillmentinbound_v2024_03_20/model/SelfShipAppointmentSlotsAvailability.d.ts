/**
 * The SelfShipAppointmentSlotsAvailability model module.
 * @module fulfillmentinbound_v2024_03_20/model/SelfShipAppointmentSlotsAvailability
 * @version 2024-03-20
 */
export class SelfShipAppointmentSlotsAvailability {
    /**
     * Constructs a <code>SelfShipAppointmentSlotsAvailability</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SelfShipAppointmentSlotsAvailability} obj Optional instance to populate.
     * @return {SelfShipAppointmentSlotsAvailability} The populated <code>SelfShipAppointmentSlotsAvailability</code> instance.
     */
    static constructFromObject(data: any, obj: SelfShipAppointmentSlotsAvailability): SelfShipAppointmentSlotsAvailability;
    /**
     * The time at which the self ship appointment slot expires. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format.
     * @member {Date} expiresAt
     * @type {Date}
     */
    expiresAt: Date;
    /**
     * A list of appointment slots.
     * @member {[AppointmentSlot]} slots
     * @type {[AppointmentSlot]}
     */
    slots: [AppointmentSlot];
}
import { AppointmentSlot } from './AppointmentSlot.js';
//# sourceMappingURL=SelfShipAppointmentSlotsAvailability.d.ts.map