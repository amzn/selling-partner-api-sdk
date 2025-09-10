/**
* ShipmentInvoice service.
* @module invoicing_v0/api/ShipmentInvoiceApi
* @version v0
*/
export class ShipmentInvoiceApi {
    /**
      * Constructs a new ShipmentInvoiceApi.
      * @alias module:invoicing_v0/api/ShipmentInvoiceApi
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
       * Returns the invoice status for the shipment you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The shipment identifier for the shipment.
       * @return {Promise<GetInvoiceStatusResponse>}
       */
    getInvoiceStatusWithHttpInfo(shipmentId: string): Promise<GetInvoiceStatusResponse>;
    /**
       * Returns the invoice status for the shipment you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The shipment identifier for the shipment.
       * @return {Promise<GetInvoiceStatusResponse>}
       */
    getInvoiceStatus(shipmentId: string): Promise<GetInvoiceStatusResponse>;
    /**
       * Returns the shipment details required to issue an invoice for the specified shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](doc:notifications-api-v1-use-case-guide).
       * @return {Promise<GetShipmentDetailsResponse>}
       */
    getShipmentDetailsWithHttpInfo(shipmentId: string): Promise<GetShipmentDetailsResponse>;
    /**
       * Returns the shipment details required to issue an invoice for the specified shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](doc:notifications-api-v1-use-case-guide).
       * @return {Promise<GetShipmentDetailsResponse>}
       */
    getShipmentDetails(shipmentId: string): Promise<GetShipmentDetailsResponse>;
    /**
       * Submits a shipment invoice document for a given shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The identifier for the shipment.
       * @param {SubmitInvoiceRequest} body
       * @return {Promise<SubmitInvoiceResponse>}
       */
    submitInvoiceWithHttpInfo(shipmentId: string, body: SubmitInvoiceRequest): Promise<SubmitInvoiceResponse>;
    /**
       * Submits a shipment invoice document for a given shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The identifier for the shipment.
       * @param {SubmitInvoiceRequest} body
       * @return {Promise<SubmitInvoiceResponse>}
       */
    submitInvoice(shipmentId: string, body: SubmitInvoiceRequest): Promise<SubmitInvoiceResponse>;
    #private;
}
import { GetInvoiceStatusResponse } from '../model/GetInvoiceStatusResponse.js';
import { GetShipmentDetailsResponse } from '../model/GetShipmentDetailsResponse.js';
import { SubmitInvoiceRequest } from '../model/SubmitInvoiceRequest.js';
import { SubmitInvoiceResponse } from '../model/SubmitInvoiceResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ShipmentInvoiceApi.d.ts.map