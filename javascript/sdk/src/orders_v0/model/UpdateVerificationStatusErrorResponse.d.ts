/**
 * The UpdateVerificationStatusErrorResponse model module.
 * @module orders_v0/model/UpdateVerificationStatusErrorResponse
 * @version v0
 */
export class UpdateVerificationStatusErrorResponse {
    /**
     * Constructs a <code>UpdateVerificationStatusErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateVerificationStatusErrorResponse} obj Optional instance to populate.
     * @return {UpdateVerificationStatusErrorResponse} The populated <code>UpdateVerificationStatusErrorResponse</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateVerificationStatusErrorResponse): UpdateVerificationStatusErrorResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=UpdateVerificationStatusErrorResponse.d.ts.map