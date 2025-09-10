/**
* EasyShip service.
* @module easyship_v2022_03_23/api/EasyShipApi
* @version 2022-03-23
*/
export class EasyShipApi {
    /**
      * Constructs a new EasyShipApi.
      * @alias module:easyship_v2022_03_23/api/EasyShipApi
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
       * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling &#x60;createScheduledPackage&#x60; also generates a warranty document if you specify a &#x60;SerialNumber&#x60; value. To get these documents, see [How to get invoice, shipping label, and warranty documents](doc:easyship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the &#x60;getOrders&#x60; operation of the Selling Partner API for Orders and examine the &#x60;EasyShipShipmentStatus&#x60; property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateScheduledPackageRequest} createScheduledPackageRequest The request schema for the &#x60;createScheduledPackage&#x60; operation.
       * @return {Promise<Package>}
       */
    createScheduledPackageWithHttpInfo(createScheduledPackageRequest: CreateScheduledPackageRequest): Promise<Package>;
    /**
       * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling &#x60;createScheduledPackage&#x60; also generates a warranty document if you specify a &#x60;SerialNumber&#x60; value. To get these documents, see [How to get invoice, shipping label, and warranty documents](doc:easyship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the &#x60;getOrders&#x60; operation of the Selling Partner API for Orders and examine the &#x60;EasyShipShipmentStatus&#x60; property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateScheduledPackageRequest} createScheduledPackageRequest The request schema for the &#x60;createScheduledPackage&#x60; operation.
       * @return {Promise<Package>}
       */
    createScheduledPackage(createScheduledPackageRequest: CreateScheduledPackageRequest): Promise<Package>;
    /**
       * This operation automatically schedules a time slot for all the &#x60;amazonOrderId&#x60;s given as input, generating the associated shipping labels, along with other compliance documents according to the marketplace (refer to the [marketplace document support table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table)).  Developers calling this operation may optionally assign a &#x60;packageDetails&#x60; object, allowing them to input a preferred time slot for each order in their request. In this case, Amazon will try to schedule the respective packages using their optional settings. On the other hand, *i.e.*, if the time slot is not provided, Amazon will then pick the earliest time slot possible.   Regarding the shipping label&#39;s file format, external developers are able to choose between PDF or ZPL, and Amazon will create the label accordingly.  This operation returns an array composed of the scheduled packages, and a short-lived URL pointing to a zip file containing the generated shipping labels and the other documents enabled for your marketplace. If at least an order couldn&#39;t be scheduled, then Amazon adds the &#x60;rejectedOrders&#x60; list into the response, which contains an entry for each order we couldn&#39;t process. Each entry is composed of an error message describing the reason of the failure, so that sellers can take action.  The table below displays the supported request and burst maximum rates:  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateScheduledPackagesRequest} createScheduledPackagesRequest The request schema for the &#x60;createScheduledPackageBulk&#x60; operation.
       * @return {Promise<CreateScheduledPackagesResponse>}
       */
    createScheduledPackageBulkWithHttpInfo(createScheduledPackagesRequest: CreateScheduledPackagesRequest): Promise<CreateScheduledPackagesResponse>;
    /**
       * This operation automatically schedules a time slot for all the &#x60;amazonOrderId&#x60;s given as input, generating the associated shipping labels, along with other compliance documents according to the marketplace (refer to the [marketplace document support table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table)).  Developers calling this operation may optionally assign a &#x60;packageDetails&#x60; object, allowing them to input a preferred time slot for each order in their request. In this case, Amazon will try to schedule the respective packages using their optional settings. On the other hand, *i.e.*, if the time slot is not provided, Amazon will then pick the earliest time slot possible.   Regarding the shipping label&#39;s file format, external developers are able to choose between PDF or ZPL, and Amazon will create the label accordingly.  This operation returns an array composed of the scheduled packages, and a short-lived URL pointing to a zip file containing the generated shipping labels and the other documents enabled for your marketplace. If at least an order couldn&#39;t be scheduled, then Amazon adds the &#x60;rejectedOrders&#x60; list into the response, which contains an entry for each order we couldn&#39;t process. Each entry is composed of an error message describing the reason of the failure, so that sellers can take action.  The table below displays the supported request and burst maximum rates:  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateScheduledPackagesRequest} createScheduledPackagesRequest The request schema for the &#x60;createScheduledPackageBulk&#x60; operation.
       * @return {Promise<CreateScheduledPackagesResponse>}
       */
    createScheduledPackageBulk(createScheduledPackagesRequest: CreateScheduledPackagesRequest): Promise<CreateScheduledPackagesResponse>;
    /**
       * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
       * @param {String} marketplaceId An identifier for the marketplace in which the seller is selling.
       * @return {Promise<Package>}
       */
    getScheduledPackageWithHttpInfo(amazonOrderId: string, marketplaceId: string): Promise<Package>;
    /**
       * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} amazonOrderId An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
       * @param {String} marketplaceId An identifier for the marketplace in which the seller is selling.
       * @return {Promise<Package>}
       */
    getScheduledPackage(amazonOrderId: string, marketplaceId: string): Promise<Package>;
    /**
       * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {ListHandoverSlotsRequest} [opts.listHandoverSlotsRequest] The request schema for the &#x60;listHandoverSlots&#x60; operation.
       * @return {Promise<ListHandoverSlotsResponse>}
       */
    listHandoverSlotsWithHttpInfo(opts?: {
        listHandoverSlotsRequest?: ListHandoverSlotsRequest;
    }): Promise<ListHandoverSlotsResponse>;
    /**
       * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {ListHandoverSlotsRequest} [opts.listHandoverSlotsRequest] The request schema for the &#x60;listHandoverSlots&#x60; operation.
       * @return {Promise<ListHandoverSlotsResponse>}
       */
    listHandoverSlots(opts?: {
        listHandoverSlotsRequest?: ListHandoverSlotsRequest;
    }): Promise<ListHandoverSlotsResponse>;
    /**
       * Updates the time slot for handing over the package indicated by the specified &#x60;scheduledPackageId&#x60;. You can get the new &#x60;slotId&#x60; value for the time slot by calling the &#x60;listHandoverSlots&#x60; operation before making another &#x60;patch&#x60; call.  See the **Update Package** column in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {UpdateScheduledPackagesRequest} [opts.updateScheduledPackagesRequest] The request schema for the &#x60;updateScheduledPackages&#x60; operation.
       * @return {Promise<Packages>}
       */
    updateScheduledPackagesWithHttpInfo(opts?: {
        updateScheduledPackagesRequest?: UpdateScheduledPackagesRequest;
    }): Promise<Packages>;
    /**
       * Updates the time slot for handing over the package indicated by the specified &#x60;scheduledPackageId&#x60;. You can get the new &#x60;slotId&#x60; value for the time slot by calling the &#x60;listHandoverSlots&#x60; operation before making another &#x60;patch&#x60; call.  See the **Update Package** column in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {UpdateScheduledPackagesRequest} [opts.updateScheduledPackagesRequest] The request schema for the &#x60;updateScheduledPackages&#x60; operation.
       * @return {Promise<Packages>}
       */
    updateScheduledPackages(opts?: {
        updateScheduledPackagesRequest?: UpdateScheduledPackagesRequest;
    }): Promise<Packages>;
    #private;
}
import { CreateScheduledPackageRequest } from '../model/CreateScheduledPackageRequest.js';
import { Package } from '../model/Package.js';
import { CreateScheduledPackagesRequest } from '../model/CreateScheduledPackagesRequest.js';
import { CreateScheduledPackagesResponse } from '../model/CreateScheduledPackagesResponse.js';
import { ListHandoverSlotsRequest } from '../model/ListHandoverSlotsRequest.js';
import { ListHandoverSlotsResponse } from '../model/ListHandoverSlotsResponse.js';
import { UpdateScheduledPackagesRequest } from '../model/UpdateScheduledPackagesRequest.js';
import { Packages } from '../model/Packages.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=EasyShipApi.d.ts.map