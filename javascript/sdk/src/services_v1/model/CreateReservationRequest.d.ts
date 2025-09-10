/**
 * The CreateReservationRequest model module.
 * @module services_v1/model/CreateReservationRequest
 * @version v1
 */
export class CreateReservationRequest {
    /**
     * Constructs a <code>CreateReservationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateReservationRequest} obj Optional instance to populate.
     * @return {CreateReservationRequest} The populated <code>CreateReservationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateReservationRequest): CreateReservationRequest;
    /**
     * Constructs a new <code>CreateReservationRequest</code>.
     * Request schema for the &#x60;createReservation&#x60; operation.
     * @alias module:services_v1/model/CreateReservationRequest
     * @class
     * @param resourceId {String} Resource (store) identifier.
     * @param reservation {Reservation}
     */
    constructor(resourceId: string, reservation: Reservation);
    resourceId: string;
    reservation: Reservation;
}
import { Reservation } from './Reservation.js';
//# sourceMappingURL=CreateReservationRequest.d.ts.map