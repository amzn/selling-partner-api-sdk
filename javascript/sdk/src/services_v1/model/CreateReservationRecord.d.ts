/**
 * The CreateReservationRecord model module.
 * @module services_v1/model/CreateReservationRecord
 * @version v1
 */
export class CreateReservationRecord {
    /**
     * Constructs a <code>CreateReservationRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateReservationRecord} obj Optional instance to populate.
     * @return {CreateReservationRecord} The populated <code>CreateReservationRecord</code> instance.
     */
    static constructFromObject(data: any, obj: CreateReservationRecord): CreateReservationRecord;
    /**
     * @member {Reservation} reservation
     * @type {Reservation}
     */
    reservation: Reservation;
    /**
     * A list of warnings returned in the sucessful execution response of an API request.
     * @member {[Warning]} warnings
     * @type {[Warning]}
     */
    warnings: [Warning];
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Reservation } from './Reservation.js';
import { Warning } from './Warning.js';
import { Error } from './Error.js';
//# sourceMappingURL=CreateReservationRecord.d.ts.map