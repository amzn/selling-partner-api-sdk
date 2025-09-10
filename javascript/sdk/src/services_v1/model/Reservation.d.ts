/**
 * The Reservation model module.
 * @module services_v1/model/Reservation
 * @version v1
 */
export class Reservation {
    /**
     * Constructs a <code>Reservation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Reservation} obj Optional instance to populate.
     * @return {Reservation} The populated <code>Reservation</code> instance.
     */
    static constructFromObject(data: any, obj: Reservation): Reservation;
    /**
     * Constructs a new <code>Reservation</code>.
     * Reservation object reduces the capacity of a resource.
     * @alias module:services_v1/model/Reservation
     * @class
     * @param type {String} Type of reservation.
     * @param availability {AvailabilityRecord}
     */
    constructor(type: string, availability: AvailabilityRecord);
    type: string;
    availability: AvailabilityRecord;
    /**
     * Unique identifier for a reservation. If present, it is treated as an update reservation request and will update the corresponding reservation. Otherwise, it is treated as a new create reservation request.
     * @member {String} reservationId
     * @type {String}
     */
    reservationId: string;
}
export namespace Reservation {
    namespace TypeEnum {
        let APPOINTMENT: string;
        let TRAVEL: string;
        let VACATION: string;
        let BREAK: string;
        let TRAINING: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
import { AvailabilityRecord } from './AvailabilityRecord.js';
//# sourceMappingURL=Reservation.d.ts.map