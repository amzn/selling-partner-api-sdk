/**
 * The SendTestNotificationResponse model module.
 * @module notifications_v1/model/SendTestNotificationResponse
 * @version v1
 */
export class SendTestNotificationResponse {
    /**
     * Constructs a <code>SendTestNotificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SendTestNotificationResponse} obj Optional instance to populate.
     * @return {SendTestNotificationResponse} The populated <code>SendTestNotificationResponse</code> instance.
     */
    static constructFromObject(data: Object, obj: SendTestNotificationResponse): SendTestNotificationResponse;
    /**
     * The payload for the `sendTestNotification` operation.
     * @member {Object} payload
     * @type {Object}
     */
    payload: Object;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=SendTestNotificationResponse.d.ts.map