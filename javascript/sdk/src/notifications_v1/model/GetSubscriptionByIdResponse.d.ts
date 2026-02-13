/**
 * The GetSubscriptionByIdResponse model module.
 * @module notifications_v1/model/GetSubscriptionByIdResponse
 * @version v1
 */
export class GetSubscriptionByIdResponse {
    /**
     * Constructs a <code>GetSubscriptionByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSubscriptionByIdResponse} obj Optional instance to populate.
     * @return {GetSubscriptionByIdResponse} The populated <code>GetSubscriptionByIdResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetSubscriptionByIdResponse): GetSubscriptionByIdResponse;
    /**
     * @member {Subscription} payload
     * @type {Subscription}
     */
    payload: Subscription;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Subscription } from './Subscription.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetSubscriptionByIdResponse.d.ts.map