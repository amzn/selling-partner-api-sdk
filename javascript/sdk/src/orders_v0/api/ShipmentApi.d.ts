/**
* Shipment service.
* @module orders_v0/api/ShipmentApi
* @version v0
*/
export class ShipmentApi {
    /**
      * Constructs a new ShipmentApi.
      * @alias module:orders_v0/api/ShipmentApi
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
       * Update the shipment status for an order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {UpdateShipmentStatusRequest} payload The request body for the &#x60;updateShipmentStatus&#x60; operation.
       * @return {Promise<void>}
       */
    updateShipmentStatusWithHttpInfo(orderId: string, payload: UpdateShipmentStatusRequest): Promise<void>;
    /**
       * Update the shipment status for an order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {UpdateShipmentStatusRequest} payload The request body for the &#x60;updateShipmentStatus&#x60; operation.
       * @return {Promise<void>}
       */
    updateShipmentStatus(orderId: string, payload: UpdateShipmentStatusRequest): Promise<void>;
    #private;
}
import { UpdateShipmentStatusRequest } from '../model/UpdateShipmentStatusRequest.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ShipmentApi.d.ts.map