/**
 * The CreateReservationResponse model module.
 * @module services_v1/model/CreateReservationResponse
 * @version v1
 */
export class CreateReservationResponse {
    /**
     * Constructs a <code>CreateReservationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateReservationResponse} obj Optional instance to populate.
     * @return {CreateReservationResponse} The populated <code>CreateReservationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateReservationResponse): CreateReservationResponse;
    /**
     * @member {CreateReservationRecord} payload
     * @type {CreateReservationRecord}
     */
    payload: CreateReservationRecord;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { CreateReservationRecord } from './CreateReservationRecord.js';
import { Error } from './Error.js';
//# sourceMappingURL=CreateReservationResponse.d.ts.map