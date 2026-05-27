/**
 * The SendTestNotificationRequest model module.
 * @module notifications_v1/model/SendTestNotificationRequest
 * @version v1
 */
export class SendTestNotificationRequest {
    /**
     * Constructs a <code>SendTestNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SendTestNotificationRequest} obj Optional instance to populate.
     * @return {SendTestNotificationRequest} The populated <code>SendTestNotificationRequest</code> instance.
     */
    static constructFromObject(data: Object, obj: SendTestNotificationRequest): SendTestNotificationRequest;
    /**
     * The identifier for the destination where notifications will be delivered.
     * @member {String} destinationId
     * @type {String}
     */
    destinationId: string;
    /**
     * @member {TestNotification} testNotification
     * @type {TestNotification}
     */
    testNotification: TestNotification;
}
import { TestNotification } from './TestNotification.js';
//# sourceMappingURL=SendTestNotificationRequest.d.ts.map