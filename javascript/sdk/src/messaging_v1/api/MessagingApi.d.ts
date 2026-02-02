/**
* Messaging service.
* @module messaging_v1/api/MessagingApi
* @version v1
*/
export class MessagingApi {
    /**
      * Constructs a new MessagingApi.
      * @alias module:messaging_v1/api/MessagingApi
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
       * Sends a message asking a buyer to provide or verify customization details such as name spelling, images, initials, etc.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateConfirmCustomizationDetailsRequest} body This contains the message body for a message.
       * @return {Promise<CreateConfirmCustomizationDetailsResponse>}
       */
    confirmCustomizationDetailsWithHttpInfo(amazonOrderId: string, marketplaceIds: [string], body: CreateConfirmCustomizationDetailsRequest): Promise<CreateConfirmCustomizationDetailsResponse>;
    /**
       * Sends a message asking a buyer to provide or verify customization details such as name spelling, images, initials, etc.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateConfirmCustomizationDetailsRequest} body This contains the message body for a message.
       * @return {Promise<CreateConfirmCustomizationDetailsResponse>}
       */
    confirmCustomizationDetails(amazonOrderId: string, marketplaceIds: [string], body: CreateConfirmCustomizationDetailsRequest): Promise<CreateConfirmCustomizationDetailsResponse>;
    /**
       * Sends a message to a buyer to arrange a delivery or to confirm contact information for making a delivery.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateConfirmDeliveryDetailsRequest} body This contains the message body for a message.
       * @return {Promise<CreateConfirmDeliveryDetailsResponse>}
       */
    createConfirmDeliveryDetailsWithHttpInfo(amazonOrderId: string, marketplaceIds: [string], body: CreateConfirmDeliveryDetailsRequest): Promise<CreateConfirmDeliveryDetailsResponse>;
    /**
       * Sends a message to a buyer to arrange a delivery or to confirm contact information for making a delivery.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateConfirmDeliveryDetailsRequest} body This contains the message body for a message.
       * @return {Promise<CreateConfirmDeliveryDetailsResponse>}
       */
    createConfirmDeliveryDetails(amazonOrderId: string, marketplaceIds: [string], body: CreateConfirmDeliveryDetailsRequest): Promise<CreateConfirmDeliveryDetailsResponse>;
    /**
       * Sends a message to ask a buyer an order-related question prior to shipping their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateConfirmOrderDetailsRequest} body This contains the message body for a message.
       * @return {Promise<CreateConfirmOrderDetailsResponse>}
       */
    createConfirmOrderDetailsWithHttpInfo(amazonOrderId: string, marketplaceIds: [string], body: CreateConfirmOrderDetailsRequest): Promise<CreateConfirmOrderDetailsResponse>;
    /**
       * Sends a message to ask a buyer an order-related question prior to shipping their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateConfirmOrderDetailsRequest} body This contains the message body for a message.
       * @return {Promise<CreateConfirmOrderDetailsResponse>}
       */
    createConfirmOrderDetails(amazonOrderId: string, marketplaceIds: [string], body: CreateConfirmOrderDetailsRequest): Promise<CreateConfirmOrderDetailsResponse>;
    /**
       * Sends a message to contact a Home Service customer to arrange a service call or to gather information prior to a service call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateConfirmServiceDetailsRequest} body This contains the message body for a message.
       * @return {Promise<CreateConfirmServiceDetailsResponse>}
       */
    createConfirmServiceDetailsWithHttpInfo(amazonOrderId: string, marketplaceIds: [string], body: CreateConfirmServiceDetailsRequest): Promise<CreateConfirmServiceDetailsResponse>;
    /**
       * Sends a message to contact a Home Service customer to arrange a service call or to gather information prior to a service call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateConfirmServiceDetailsRequest} body This contains the message body for a message.
       * @return {Promise<CreateConfirmServiceDetailsResponse>}
       */
    createConfirmServiceDetails(amazonOrderId: string, marketplaceIds: [string], body: CreateConfirmServiceDetailsRequest): Promise<CreateConfirmServiceDetailsResponse>;
    /**
       * Sends a buyer a message to share a digital access key that is required to utilize digital content in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateDigitalAccessKeyRequest} body This contains the message body for a message.
       * @return {Promise<CreateDigitalAccessKeyResponse>}
       */
    createDigitalAccessKeyWithHttpInfo(amazonOrderId: string, marketplaceIds: [string], body: CreateDigitalAccessKeyRequest): Promise<CreateDigitalAccessKeyResponse>;
    /**
       * Sends a buyer a message to share a digital access key that is required to utilize digital content in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateDigitalAccessKeyRequest} body This contains the message body for a message.
       * @return {Promise<CreateDigitalAccessKeyResponse>}
       */
    createDigitalAccessKey(amazonOrderId: string, marketplaceIds: [string], body: CreateDigitalAccessKeyRequest): Promise<CreateDigitalAccessKeyResponse>;
    /**
       * Sends a critical message that contains documents that a seller is legally obligated to provide to the buyer. This message should only be used to deliver documents that are required by law.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateLegalDisclosureRequest} body This contains the message body for a message.
       * @return {Promise<CreateLegalDisclosureResponse>}
       */
    createLegalDisclosureWithHttpInfo(amazonOrderId: string, marketplaceIds: [string], body: CreateLegalDisclosureRequest): Promise<CreateLegalDisclosureResponse>;
    /**
       * Sends a critical message that contains documents that a seller is legally obligated to provide to the buyer. This message should only be used to deliver documents that are required by law.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateLegalDisclosureRequest} body This contains the message body for a message.
       * @return {Promise<CreateLegalDisclosureResponse>}
       */
    createLegalDisclosure(amazonOrderId: string, marketplaceIds: [string], body: CreateLegalDisclosureRequest): Promise<CreateLegalDisclosureResponse>;
    /**
       * Sends a critical message to a buyer that an unexpected problem was encountered affecting the completion of the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateUnexpectedProblemRequest} body This contains the message body for a message.
       * @return {Promise<CreateUnexpectedProblemResponse>}
       */
    createUnexpectedProblemWithHttpInfo(amazonOrderId: string, marketplaceIds: [string], body: CreateUnexpectedProblemRequest): Promise<CreateUnexpectedProblemResponse>;
    /**
       * Sends a critical message to a buyer that an unexpected problem was encountered affecting the completion of the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateUnexpectedProblemRequest} body This contains the message body for a message.
       * @return {Promise<CreateUnexpectedProblemResponse>}
       */
    createUnexpectedProblem(amazonOrderId: string, marketplaceIds: [string], body: CreateUnexpectedProblemRequest): Promise<CreateUnexpectedProblemResponse>;
    /**
       * Sends a message to a buyer to provide details about warranty information on a purchase in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateWarrantyRequest} body This contains the message body for a message.
       * @return {Promise<CreateWarrantyResponse>}
       */
    createWarrantyWithHttpInfo(amazonOrderId: string, marketplaceIds: [string], body: CreateWarrantyRequest): Promise<CreateWarrantyResponse>;
    /**
       * Sends a message to a buyer to provide details about warranty information on a purchase in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {CreateWarrantyRequest} body This contains the message body for a message.
       * @return {Promise<CreateWarrantyResponse>}
       */
    createWarranty(amazonOrderId: string, marketplaceIds: [string], body: CreateWarrantyRequest): Promise<CreateWarrantyResponse>;
    /**
       * Returns a response containing attributes related to an order. This includes buyer preferences.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @return {Promise<GetAttributesResponse>}
       */
    getAttributesWithHttpInfo(amazonOrderId: string, marketplaceIds: [string]): Promise<GetAttributesResponse>;
    /**
       * Returns a response containing attributes related to an order. This includes buyer preferences.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @return {Promise<GetAttributesResponse>}
       */
    getAttributes(amazonOrderId: string, marketplaceIds: [string]): Promise<GetAttributesResponse>;
    /**
       * Returns a list of message types that are available for an order that you specify. A message type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a message.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available message types.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @return {Promise<GetMessagingActionsForOrderResponse>}
       */
    getMessagingActionsForOrderWithHttpInfo(amazonOrderId: string, marketplaceIds: [string]): Promise<GetMessagingActionsForOrderResponse>;
    /**
       * Returns a list of message types that are available for an order that you specify. A message type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a message.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available message types.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @return {Promise<GetMessagingActionsForOrderResponse>}
       */
    getMessagingActionsForOrder(amazonOrderId: string, marketplaceIds: [string]): Promise<GetMessagingActionsForOrderResponse>;
    /**
       * Sends a message providing the buyer an invoice
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {InvoiceRequest} body This contains the message body for a message.
       * @return {Promise<InvoiceResponse>}
       */
    sendInvoiceWithHttpInfo(amazonOrderId: string, marketplaceIds: [string], body: InvoiceRequest): Promise<InvoiceResponse>;
    /**
       * Sends a message providing the buyer an invoice
       * @param {String} amazonOrderId An Amazon order identifier. This identifies the order for which a message is sent.
       * @param {[String]} marketplaceIds A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
       * @param {InvoiceRequest} body This contains the message body for a message.
       * @return {Promise<InvoiceResponse>}
       */
    sendInvoice(amazonOrderId: string, marketplaceIds: [string], body: InvoiceRequest): Promise<InvoiceResponse>;
    #private;
}
import { CreateConfirmCustomizationDetailsRequest } from '../model/CreateConfirmCustomizationDetailsRequest.js';
import { CreateConfirmCustomizationDetailsResponse } from '../model/CreateConfirmCustomizationDetailsResponse.js';
import { CreateConfirmDeliveryDetailsRequest } from '../model/CreateConfirmDeliveryDetailsRequest.js';
import { CreateConfirmDeliveryDetailsResponse } from '../model/CreateConfirmDeliveryDetailsResponse.js';
import { CreateConfirmOrderDetailsRequest } from '../model/CreateConfirmOrderDetailsRequest.js';
import { CreateConfirmOrderDetailsResponse } from '../model/CreateConfirmOrderDetailsResponse.js';
import { CreateConfirmServiceDetailsRequest } from '../model/CreateConfirmServiceDetailsRequest.js';
import { CreateConfirmServiceDetailsResponse } from '../model/CreateConfirmServiceDetailsResponse.js';
import { CreateDigitalAccessKeyRequest } from '../model/CreateDigitalAccessKeyRequest.js';
import { CreateDigitalAccessKeyResponse } from '../model/CreateDigitalAccessKeyResponse.js';
import { CreateLegalDisclosureRequest } from '../model/CreateLegalDisclosureRequest.js';
import { CreateLegalDisclosureResponse } from '../model/CreateLegalDisclosureResponse.js';
import { CreateUnexpectedProblemRequest } from '../model/CreateUnexpectedProblemRequest.js';
import { CreateUnexpectedProblemResponse } from '../model/CreateUnexpectedProblemResponse.js';
import { CreateWarrantyRequest } from '../model/CreateWarrantyRequest.js';
import { CreateWarrantyResponse } from '../model/CreateWarrantyResponse.js';
import { GetAttributesResponse } from '../model/GetAttributesResponse.js';
import { GetMessagingActionsForOrderResponse } from '../model/GetMessagingActionsForOrderResponse.js';
import { InvoiceRequest } from '../model/InvoiceRequest.js';
import { InvoiceResponse } from '../model/InvoiceResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=MessagingApi.d.ts.map