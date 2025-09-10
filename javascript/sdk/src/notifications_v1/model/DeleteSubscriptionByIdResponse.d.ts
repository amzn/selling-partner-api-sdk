/**
 * The DeleteSubscriptionByIdResponse model module.
 * @module notifications_v1/model/DeleteSubscriptionByIdResponse
 * @version v1
 */
export class DeleteSubscriptionByIdResponse {
    /**
     * Constructs a <code>DeleteSubscriptionByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeleteSubscriptionByIdResponse} obj Optional instance to populate.
     * @return {DeleteSubscriptionByIdResponse} The populated <code>DeleteSubscriptionByIdResponse</code> instance.
     */
    static constructFromObject(data: any, obj: DeleteSubscriptionByIdResponse): DeleteSubscriptionByIdResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=DeleteSubscriptionByIdResponse.d.ts.map