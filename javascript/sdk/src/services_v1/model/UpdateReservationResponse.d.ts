/**
 * The UpdateReservationResponse model module.
 * @module services_v1/model/UpdateReservationResponse
 * @version v1
 */
export class UpdateReservationResponse {
    /**
     * Constructs a <code>UpdateReservationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateReservationResponse} obj Optional instance to populate.
     * @return {UpdateReservationResponse} The populated <code>UpdateReservationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateReservationResponse): UpdateReservationResponse;
    /**
     * @member {UpdateReservationRecord} payload
     * @type {UpdateReservationRecord}
     */
    payload: UpdateReservationRecord;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { UpdateReservationRecord } from './UpdateReservationRecord.js';
import { Error } from './Error.js';
//# sourceMappingURL=UpdateReservationResponse.d.ts.map