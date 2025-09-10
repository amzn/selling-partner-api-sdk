/**
* AppIntegrations service.
* @module appintegrations_v2024_04_01/api/AppIntegrationsApi
* @version 2024-04-01
*/
export class AppIntegrationsApi {
    /**
      * Constructs a new AppIntegrationsApi.
      * @alias module:appintegrations_v2024_04_01/api/AppIntegrationsApi
      * @class
      * @param {ApiClient} [apiClient] Optional API client implementation to use,
      * default to {@link ApiClient#instance} if unspecified.
      */
    constructor(apiClient?: ApiClient);
    apiClient: any;
    /**
       * Initialize rate limiters for API operations
       */
    initializeDefaultRateLimiterMap(): void;
    /**
       * Get rate limiter for a specific operation
       * @param {String} operation name
       */
    getRateLimiter(operation: string): any;
    /**
       * Create a notification for sellers in Seller Central.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateNotificationRequest} body The request body for the &#x60;createNotification&#x60; operation.
       * @return {Promise<CreateNotificationResponse>}
       */
    createNotificationWithHttpInfo(body: CreateNotificationRequest): Promise<CreateNotificationResponse>;
    /**
       * Create a notification for sellers in Seller Central.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateNotificationRequest} body The request body for the &#x60;createNotification&#x60; operation.
       * @return {Promise<CreateNotificationResponse>}
       */
    createNotification(body: CreateNotificationRequest): Promise<CreateNotificationResponse>;
    /**
       * Remove your application&#39;s notifications from the Appstore notifications dashboard.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {DeleteNotificationsRequest} body The request body for the &#x60;deleteNotifications&#x60; operation.
       * @return {Promise<void>}
       */
    deleteNotificationsWithHttpInfo(body: DeleteNotificationsRequest): Promise<void>;
    /**
       * Remove your application&#39;s notifications from the Appstore notifications dashboard.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {DeleteNotificationsRequest} body The request body for the &#x60;deleteNotifications&#x60; operation.
       * @return {Promise<void>}
       */
    deleteNotifications(body: DeleteNotificationsRequest): Promise<void>;
    /**
       * Records the seller&#39;s response to a notification.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} notificationId A &#x60;notificationId&#x60; uniquely identifies a notification.
       * @param {RecordActionFeedbackRequest} body The request body for the &#x60;recordActionFeedback&#x60; operation.
       * @return {Promise<void>}
       */
    recordActionFeedbackWithHttpInfo(notificationId: string, body: RecordActionFeedbackRequest): Promise<void>;
    /**
       * Records the seller&#39;s response to a notification.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} notificationId A &#x60;notificationId&#x60; uniquely identifies a notification.
       * @param {RecordActionFeedbackRequest} body The request body for the &#x60;recordActionFeedback&#x60; operation.
       * @return {Promise<void>}
       */
    recordActionFeedback(notificationId: string, body: RecordActionFeedbackRequest): Promise<void>;
    #private;
}
import { CreateNotificationRequest } from '../model/CreateNotificationRequest.js';
import { CreateNotificationResponse } from '../model/CreateNotificationResponse.js';
import { DeleteNotificationsRequest } from '../model/DeleteNotificationsRequest.js';
import { RecordActionFeedbackRequest } from '../model/RecordActionFeedbackRequest.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=AppIntegrationsApi.d.ts.map