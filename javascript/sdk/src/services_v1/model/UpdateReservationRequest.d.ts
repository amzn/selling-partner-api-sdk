/**
 * The UpdateReservationRequest model module.
 * @module services_v1/model/UpdateReservationRequest
 * @version v1
 */
export class UpdateReservationRequest {
    /**
     * Constructs a <code>UpdateReservationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateReservationRequest} obj Optional instance to populate.
     * @return {UpdateReservationRequest} The populated <code>UpdateReservationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateReservationRequest): UpdateReservationRequest;
    /**
     * Constructs a new <code>UpdateReservationRequest</code>.
     * Request schema for the &#x60;updateReservation&#x60; operation.
     * @alias module:services_v1/model/UpdateReservationRequest
     * @class
     * @param resourceId {String} Resource (store) identifier.
     * @param reservation {Reservation}
     */
    constructor(resourceId: string, reservation: Reservation);
    resourceId: string;
    reservation: Reservation;
}
import { Reservation } from './Reservation.js';
//# sourceMappingURL=UpdateReservationRequest.d.ts.map