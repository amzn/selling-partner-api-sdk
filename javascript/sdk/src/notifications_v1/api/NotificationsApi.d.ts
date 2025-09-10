/**
* Notifications service.
* @module notifications_v1/api/NotificationsApi
* @version v1
*/
export class NotificationsApi {
    /**
      * Constructs a new NotificationsApi.
      * @alias module:notifications_v1/api/NotificationsApi
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
       * Creates a destination resource to receive notifications. The &#x60;createDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateDestinationRequest} body
       * @return {Promise<CreateDestinationResponse>}
       */
    createDestinationWithHttpInfo(body: CreateDestinationRequest): Promise<CreateDestinationResponse>;
    /**
       * Creates a destination resource to receive notifications. The &#x60;createDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateDestinationRequest} body
       * @return {Promise<CreateDestinationResponse>}
       */
    createDestination(body: CreateDestinationRequest): Promise<CreateDestinationResponse>;
    /**
       * Creates a subscription for the specified notification type to be delivered to the specified destination. Before you can subscribe, you must first create the destination by calling the &#x60;createDestination&#x60; operation. In cases where the specified notification type supports multiple payload versions, you can utilize this API to subscribe to a different payload version if you already have an existing subscription for a different payload version.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
       * @param {CreateSubscriptionRequest} body
       * @return {Promise<CreateSubscriptionResponse>}
       */
    createSubscriptionWithHttpInfo(notificationType: string, body: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse>;
    /**
       * Creates a subscription for the specified notification type to be delivered to the specified destination. Before you can subscribe, you must first create the destination by calling the &#x60;createDestination&#x60; operation. In cases where the specified notification type supports multiple payload versions, you can utilize this API to subscribe to a different payload version if you already have an existing subscription for a different payload version.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
       * @param {CreateSubscriptionRequest} body
       * @return {Promise<CreateSubscriptionResponse>}
       */
    createSubscription(notificationType: string, body: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse>;
    /**
       * Deletes the destination that you specify. The &#x60;deleteDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} destinationId The identifier for the destination that you want to delete.
       * @return {Promise<DeleteDestinationResponse>}
       */
    deleteDestinationWithHttpInfo(destinationId: string): Promise<DeleteDestinationResponse>;
    /**
       * Deletes the destination that you specify. The &#x60;deleteDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} destinationId The identifier for the destination that you want to delete.
       * @return {Promise<DeleteDestinationResponse>}
       */
    deleteDestination(destinationId: string): Promise<DeleteDestinationResponse>;
    /**
       * Deletes the subscription indicated by the subscription identifier and notification type that you specify. The subscription identifier can be for any subscription associated with your application. After you successfully call this operation, notifications will stop being sent for the associated subscription. The &#x60;deleteSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} subscriptionId The identifier for the subscription that you want to delete.
       * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
       * @return {Promise<DeleteSubscriptionByIdResponse>}
       */
    deleteSubscriptionByIdWithHttpInfo(subscriptionId: string, notificationType: string): Promise<DeleteSubscriptionByIdResponse>;
    /**
       * Deletes the subscription indicated by the subscription identifier and notification type that you specify. The subscription identifier can be for any subscription associated with your application. After you successfully call this operation, notifications will stop being sent for the associated subscription. The &#x60;deleteSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} subscriptionId The identifier for the subscription that you want to delete.
       * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
       * @return {Promise<DeleteSubscriptionByIdResponse>}
       */
    deleteSubscriptionById(subscriptionId: string, notificationType: string): Promise<DeleteSubscriptionByIdResponse>;
    /**
       * Returns information about the destination that you specify. The &#x60;getDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} destinationId The identifier generated when you created the destination.
       * @return {Promise<GetDestinationResponse>}
       */
    getDestinationWithHttpInfo(destinationId: string): Promise<GetDestinationResponse>;
    /**
       * Returns information about the destination that you specify. The &#x60;getDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} destinationId The identifier generated when you created the destination.
       * @return {Promise<GetDestinationResponse>}
       */
    getDestination(destinationId: string): Promise<GetDestinationResponse>;
    /**
       * Returns information about all destinations. The &#x60;getDestinations&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @return {Promise<GetDestinationsResponse>}
       */
    getDestinationsWithHttpInfo(): Promise<GetDestinationsResponse>;
    /**
       * Returns information about all destinations. The &#x60;getDestinations&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @return {Promise<GetDestinationsResponse>}
       */
    getDestinations(): Promise<GetDestinationsResponse>;
    /**
       * Returns information about subscription of the specified notification type and payload version. &#x60;payloadVersion&#x60; is an optional parameter. When &#x60;payloadVersion&#x60; is not provided, it will return latest payload version subscription&#39;s information. You can use this API to get subscription information when you do not have a subscription identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.payloadVersion] The version of the payload object to be used in the notification.
       * @return {Promise<GetSubscriptionResponse>}
       */
    getSubscriptionWithHttpInfo(notificationType: string, opts?: {
        payloadVersion?: string;
    }): Promise<GetSubscriptionResponse>;
    /**
       * Returns information about subscription of the specified notification type and payload version. &#x60;payloadVersion&#x60; is an optional parameter. When &#x60;payloadVersion&#x60; is not provided, it will return latest payload version subscription&#39;s information. You can use this API to get subscription information when you do not have a subscription identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.payloadVersion] The version of the payload object to be used in the notification.
       * @return {Promise<GetSubscriptionResponse>}
       */
    getSubscription(notificationType: string, opts?: {
        payloadVersion?: string;
    }): Promise<GetSubscriptionResponse>;
    /**
       * Returns information about a subscription for the specified notification type. The &#x60;getSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} subscriptionId The identifier for the subscription that you want to get.
       * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
       * @return {Promise<GetSubscriptionByIdResponse>}
       */
    getSubscriptionByIdWithHttpInfo(subscriptionId: string, notificationType: string): Promise<GetSubscriptionByIdResponse>;
    /**
       * Returns information about a subscription for the specified notification type. The &#x60;getSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} subscriptionId The identifier for the subscription that you want to get.
       * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
       * @return {Promise<GetSubscriptionByIdResponse>}
       */
    getSubscriptionById(subscriptionId: string, notificationType: string): Promise<GetSubscriptionByIdResponse>;
    #private;
}
import { CreateDestinationRequest } from '../model/CreateDestinationRequest.js';
import { CreateDestinationResponse } from '../model/CreateDestinationResponse.js';
import { CreateSubscriptionRequest } from '../model/CreateSubscriptionRequest.js';
import { CreateSubscriptionResponse } from '../model/CreateSubscriptionResponse.js';
import { DeleteDestinationResponse } from '../model/DeleteDestinationResponse.js';
import { DeleteSubscriptionByIdResponse } from '../model/DeleteSubscriptionByIdResponse.js';
import { GetDestinationResponse } from '../model/GetDestinationResponse.js';
import { GetDestinationsResponse } from '../model/GetDestinationsResponse.js';
import { GetSubscriptionResponse } from '../model/GetSubscriptionResponse.js';
import { GetSubscriptionByIdResponse } from '../model/GetSubscriptionByIdResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=NotificationsApi.d.ts.map