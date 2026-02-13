/**
* GetOrder service.
* @module orders_v2026_01_01/api/GetOrderApi
* @version 2026-01-01
*/
export class GetOrderApi {
    /**
      * Constructs a new GetOrderApi.
      * @alias module:orders_v2026_01_01/api/GetOrderApi
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
       * Returns the order that you specify.
       * @param {String} orderId An Amazon-defined order identifier.
       * @param {Object} [opts] Optional parameters
       * @param {String[]} [opts.includedData] A list of datasets to include in the response.
       * @return {Promise<GetOrderResponse>}
       */
    getOrderWithHttpInfo(orderId: string, opts?: {
        includedData?: string[];
    }): Promise<GetOrderResponse>;
    /**
       * Returns the order that you specify.
       * @param {String} orderId An Amazon-defined order identifier.
       * @param {Object} [opts] Optional parameters
       * @param {String[]} [opts.includedData] A list of datasets to include in the response.
       * @return {Promise<GetOrderResponse>}
       */
    getOrder(orderId: string, opts?: {
        includedData?: string[];
    }): Promise<GetOrderResponse>;
    #private;
}
import { GetOrderResponse } from '../model/GetOrderResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=GetOrderApi.d.ts.map