/**
 * The CancelReservationResponse model module.
 * @module services_v1/model/CancelReservationResponse
 * @version v1
 */
export class CancelReservationResponse {
    /**
     * Constructs a <code>CancelReservationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CancelReservationResponse} obj Optional instance to populate.
     * @return {CancelReservationResponse} The populated <code>CancelReservationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CancelReservationResponse): CancelReservationResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=CancelReservationResponse.d.ts.map