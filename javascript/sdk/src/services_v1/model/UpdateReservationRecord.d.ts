/**
 * The UpdateReservationRecord model module.
 * @module services_v1/model/UpdateReservationRecord
 * @version v1
 */
export class UpdateReservationRecord {
    /**
     * Constructs a <code>UpdateReservationRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateReservationRecord} obj Optional instance to populate.
     * @return {UpdateReservationRecord} The populated <code>UpdateReservationRecord</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateReservationRecord): UpdateReservationRecord;
    /**
     * @member {Reservation} reservation
     * @type {Reservation}
     */
    reservation: Reservation;
    /**
     * A list of warnings returned in the sucessful execution response of an API request.
     * @member {Array[]} warnings
     * @type {Array[]}
     */
    warnings: any[][];
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { Reservation } from './Reservation.js';
//# sourceMappingURL=UpdateReservationRecord.d.ts.map