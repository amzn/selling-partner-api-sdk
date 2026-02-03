/**
* Solicitations service.
* @module solicitations_v1/api/SolicitationsApi
* @version v1
*/
export class SolicitationsApi {
    /**
      * Constructs a new SolicitationsApi.
      * @alias module:solicitations_v1/api/SolicitationsApi
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
       * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This specifies the order for which a solicitation is sent.
       * @param {String[]} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @return {Promise<CreateProductReviewAndSellerFeedbackSolicitationResponse>}
       */
    createProductReviewAndSellerFeedbackSolicitationWithHttpInfo(amazonOrderId: string, marketplaceIds: string[]): Promise<CreateProductReviewAndSellerFeedbackSolicitationResponse>;
    /**
       * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This specifies the order for which a solicitation is sent.
       * @param {String[]} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @return {Promise<CreateProductReviewAndSellerFeedbackSolicitationResponse>}
       */
    createProductReviewAndSellerFeedbackSolicitation(amazonOrderId: string, marketplaceIds: string[]): Promise<CreateProductReviewAndSellerFeedbackSolicitationResponse>;
    /**
       * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
       * @param {String[]} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @return {Promise<GetSolicitationActionsForOrderResponse>}
       */
    getSolicitationActionsForOrderWithHttpInfo(amazonOrderId: string, marketplaceIds: string[]): Promise<GetSolicitationActionsForOrderResponse>;
    /**
       * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
       * @param {String[]} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @return {Promise<GetSolicitationActionsForOrderResponse>}
       */
    getSolicitationActionsForOrder(amazonOrderId: string, marketplaceIds: string[]): Promise<GetSolicitationActionsForOrderResponse>;
    #private;
}
import { CreateProductReviewAndSellerFeedbackSolicitationResponse } from '../model/CreateProductReviewAndSellerFeedbackSolicitationResponse.js';
import { GetSolicitationActionsForOrderResponse } from '../model/GetSolicitationActionsForOrderResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=SolicitationsApi.d.ts.map