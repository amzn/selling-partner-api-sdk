/**
* MerchantFulfillment service.
* @module merchantfulfillment_v0/api/MerchantFulfillmentApi
* @version v0
*/
export class MerchantFulfillmentApi {
    /**
      * Constructs a new MerchantFulfillmentApi.
      * @alias module:merchantfulfillment_v0/api/MerchantFulfillmentApi
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
       * Cancel the shipment indicated by the specified shipment identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The Amazon-defined shipment identifier for the shipment to cancel.
       * @return {Promise<CancelShipmentResponse>}
       */
    cancelShipmentWithHttpInfo(shipmentId: string): Promise<CancelShipmentResponse>;
    /**
       * Cancel the shipment indicated by the specified shipment identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The Amazon-defined shipment identifier for the shipment to cancel.
       * @return {Promise<CancelShipmentResponse>}
       */
    cancelShipment(shipmentId: string): Promise<CancelShipmentResponse>;
    /**
       * Create a shipment with the information provided.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateShipmentRequest} body The request schema for the &#x60;CreateShipment&#x60; operation.
       * @return {Promise<CreateShipmentResponse>}
       */
    createShipmentWithHttpInfo(body: CreateShipmentRequest): Promise<CreateShipmentResponse>;
    /**
       * Create a shipment with the information provided.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateShipmentRequest} body The request schema for the &#x60;CreateShipment&#x60; operation.
       * @return {Promise<CreateShipmentResponse>}
       */
    createShipment(body: CreateShipmentRequest): Promise<CreateShipmentResponse>;
    /**
       * Gets a list of additional seller inputs required for a ship method. This is generally used for international shipping.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetAdditionalSellerInputsRequest} body The request schema for the &#x60;GetAdditionalSellerInputs&#x60; operation.
       * @return {Promise<GetAdditionalSellerInputsResponse>}
       */
    getAdditionalSellerInputsWithHttpInfo(body: GetAdditionalSellerInputsRequest): Promise<GetAdditionalSellerInputsResponse>;
    /**
       * Gets a list of additional seller inputs required for a ship method. This is generally used for international shipping.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetAdditionalSellerInputsRequest} body The request schema for the &#x60;GetAdditionalSellerInputs&#x60; operation.
       * @return {Promise<GetAdditionalSellerInputsResponse>}
       */
    getAdditionalSellerInputs(body: GetAdditionalSellerInputsRequest): Promise<GetAdditionalSellerInputsResponse>;
    /**
       * Returns a list of shipping service offers that satisfy the specified shipment request details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 6 | 12 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetEligibleShipmentServicesRequest} body The request schema for the &#x60;GetEligibleShipmentServices&#x60; operation.
       * @return {Promise<GetEligibleShipmentServicesResponse>}
       */
    getEligibleShipmentServicesWithHttpInfo(body: GetEligibleShipmentServicesRequest): Promise<GetEligibleShipmentServicesResponse>;
    /**
       * Returns a list of shipping service offers that satisfy the specified shipment request details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 6 | 12 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetEligibleShipmentServicesRequest} body The request schema for the &#x60;GetEligibleShipmentServices&#x60; operation.
       * @return {Promise<GetEligibleShipmentServicesResponse>}
       */
    getEligibleShipmentServices(body: GetEligibleShipmentServicesRequest): Promise<GetEligibleShipmentServicesResponse>;
    /**
       * Returns the shipment information for an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The Amazon-defined shipment identifier for the shipment.
       * @return {Promise<GetShipmentResponse>}
       */
    getShipmentWithHttpInfo(shipmentId: string): Promise<GetShipmentResponse>;
    /**
       * Returns the shipment information for an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The Amazon-defined shipment identifier for the shipment.
       * @return {Promise<GetShipmentResponse>}
       */
    getShipment(shipmentId: string): Promise<GetShipmentResponse>;
    #private;
}
import { CancelShipmentResponse } from '../model/CancelShipmentResponse.js';
import { CreateShipmentRequest } from '../model/CreateShipmentRequest.js';
import { CreateShipmentResponse } from '../model/CreateShipmentResponse.js';
import { GetAdditionalSellerInputsRequest } from '../model/GetAdditionalSellerInputsRequest.js';
import { GetAdditionalSellerInputsResponse } from '../model/GetAdditionalSellerInputsResponse.js';
import { GetEligibleShipmentServicesRequest } from '../model/GetEligibleShipmentServicesRequest.js';
import { GetEligibleShipmentServicesResponse } from '../model/GetEligibleShipmentServicesResponse.js';
import { GetShipmentResponse } from '../model/GetShipmentResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=MerchantFulfillmentApi.d.ts.map