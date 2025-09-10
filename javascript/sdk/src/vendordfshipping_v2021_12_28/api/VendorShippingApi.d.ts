/**
* VendorShipping service.
* @module vendordfshipping_v2021_12_28/api/VendorShippingApi
* @version 2021-12-28
*/
export class VendorShippingApi {
    /**
      * Constructs a new VendorShippingApi.
      * @alias module:vendordfshipping_v2021_12_28/api/VendorShippingApi
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
       * getPackingSlip
       * Returns a packing slip based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} purchaseOrderNumber The &#x60;purchaseOrderNumber&#x60; for the packing slip that you want.
       * @return {Promise<PackingSlip>}
       */
    getPackingSlipWithHttpInfo(purchaseOrderNumber: string): Promise<PackingSlip>;
    /**
       * getPackingSlip
       * Returns a packing slip based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} purchaseOrderNumber The &#x60;purchaseOrderNumber&#x60; for the packing slip that you want.
       * @return {Promise<PackingSlip>}
       */
    getPackingSlip(purchaseOrderNumber: string): Promise<PackingSlip>;
    /**
       * getPackingSlips
       * Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Date} createdAfter Packing slips that become available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} createdBefore Packing slips that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shipFromPartyId] The vendor &#x60;warehouseId&#x60; for order fulfillment. If not specified, the result contains orders for all warehouses.
       * @param {Number} [opts.limit] The maximum number of records to return.
       * @param {String} [opts.sortOrder] The packing slip creation dates, which are sorted by ascending or descending order. (default to &#39;ASC&#39;)
       * @param {String} [opts.nextToken] Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call.
       * @return {Promise<PackingSlipList>}
       */
    getPackingSlipsWithHttpInfo(createdAfter: Date, createdBefore: Date, opts?: {
        shipFromPartyId?: string;
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
    }): Promise<PackingSlipList>;
    /**
       * getPackingSlips
       * Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Date} createdAfter Packing slips that become available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} createdBefore Packing slips that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shipFromPartyId] The vendor &#x60;warehouseId&#x60; for order fulfillment. If not specified, the result contains orders for all warehouses.
       * @param {Number} [opts.limit] The maximum number of records to return.
       * @param {String} [opts.sortOrder] The packing slip creation dates, which are sorted by ascending or descending order. (default to &#39;ASC&#39;)
       * @param {String} [opts.nextToken] Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call.
       * @return {Promise<PackingSlipList>}
       */
    getPackingSlips(createdAfter: Date, createdBefore: Date, opts?: {
        shipFromPartyId?: string;
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
    }): Promise<PackingSlipList>;
    /**
       * submitShipmentConfirmations
       * Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {SubmitShipmentConfirmationsRequest} body Request body containing the shipment confirmations data.
       * @return {Promise<TransactionReference>}
       */
    submitShipmentConfirmationsWithHttpInfo(body: SubmitShipmentConfirmationsRequest): Promise<TransactionReference>;
    /**
       * submitShipmentConfirmations
       * Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {SubmitShipmentConfirmationsRequest} body Request body containing the shipment confirmations data.
       * @return {Promise<TransactionReference>}
       */
    submitShipmentConfirmations(body: SubmitShipmentConfirmationsRequest): Promise<TransactionReference>;
    /**
       * submitShipmentStatusUpdates
       * This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {SubmitShipmentStatusUpdatesRequest} body Request body containing the shipment status update data.
       * @return {Promise<TransactionReference>}
       */
    submitShipmentStatusUpdatesWithHttpInfo(body: SubmitShipmentStatusUpdatesRequest): Promise<TransactionReference>;
    /**
       * submitShipmentStatusUpdates
       * This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {SubmitShipmentStatusUpdatesRequest} body Request body containing the shipment status update data.
       * @return {Promise<TransactionReference>}
       */
    submitShipmentStatusUpdates(body: SubmitShipmentStatusUpdatesRequest): Promise<TransactionReference>;
    #private;
}
import { PackingSlip } from '../model/PackingSlip.js';
import { PackingSlipList } from '../model/PackingSlipList.js';
import { SubmitShipmentConfirmationsRequest } from '../model/SubmitShipmentConfirmationsRequest.js';
import { TransactionReference } from '../model/TransactionReference.js';
import { SubmitShipmentStatusUpdatesRequest } from '../model/SubmitShipmentStatusUpdatesRequest.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=VendorShippingApi.d.ts.map