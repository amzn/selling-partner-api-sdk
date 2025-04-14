/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient.js";
import {CreateScheduledPackageRequest} from '../model/CreateScheduledPackageRequest.js';
import {CreateScheduledPackagesRequest} from '../model/CreateScheduledPackagesRequest.js';
import {CreateScheduledPackagesResponse} from '../model/CreateScheduledPackagesResponse.js';
import {ErrorList} from '../model/ErrorList.js';
import {ListHandoverSlotsRequest} from '../model/ListHandoverSlotsRequest.js';
import {ListHandoverSlotsResponse} from '../model/ListHandoverSlotsResponse.js';
import {Package} from '../model/Package.js';
import {Packages} from '../model/Packages.js';
import {UpdateScheduledPackagesRequest} from '../model/UpdateScheduledPackagesRequest.js';

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
    * @param {module:easyship_v2022_03_23/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:easyship_v2022_03_23/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling &#x60;createScheduledPackage&#x60; also generates a warranty document if you specify a &#x60;SerialNumber&#x60; value. To get these documents, see [How to get invoice, shipping label, and warranty documents](doc:easyship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the &#x60;getOrders&#x60; operation of the Selling Partner API for Orders and examine the &#x60;EasyShipShipmentStatus&#x60; property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:easyship_v2022_03_23/model/CreateScheduledPackageRequest} createScheduledPackageRequest The request schema for the &#x60;createScheduledPackage&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyship_v2022_03_23/model/Package} and HTTP response
     */
    createScheduledPackageWithHttpInfo(createScheduledPackageRequest) {
      let postBody = createScheduledPackageRequest;

      // verify the required parameter 'createScheduledPackageRequest' is set
      if (createScheduledPackageRequest === undefined || createScheduledPackageRequest === null) {
        throw new Error("Missing the required parameter 'createScheduledPackageRequest' when calling createScheduledPackage");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Package;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/package', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling &#x60;createScheduledPackage&#x60; also generates a warranty document if you specify a &#x60;SerialNumber&#x60; value. To get these documents, see [How to get invoice, shipping label, and warranty documents](doc:easyship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the &#x60;getOrders&#x60; operation of the Selling Partner API for Orders and examine the &#x60;EasyShipShipmentStatus&#x60; property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:easyship_v2022_03_23/model/CreateScheduledPackageRequest} createScheduledPackageRequest The request schema for the &#x60;createScheduledPackage&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyship_v2022_03_23/model/Package}
     */
    createScheduledPackage(createScheduledPackageRequest) {
      return this.createScheduledPackageWithHttpInfo(createScheduledPackageRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * This operation automatically schedules a time slot for all the &#x60;amazonOrderId&#x60;s given as input, generating the associated shipping labels, along with other compliance documents according to the marketplace (refer to the [marketplace document support table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table)).  Developers calling this operation may optionally assign a &#x60;packageDetails&#x60; object, allowing them to input a preferred time slot for each order in their request. In this case, Amazon will try to schedule the respective packages using their optional settings. On the other hand, *i.e.*, if the time slot is not provided, Amazon will then pick the earliest time slot possible.   Regarding the shipping label&#39;s file format, external developers are able to choose between PDF or ZPL, and Amazon will create the label accordingly.  This operation returns an array composed of the scheduled packages, and a short-lived URL pointing to a zip file containing the generated shipping labels and the other documents enabled for your marketplace. If at least an order couldn&#39;t be scheduled, then Amazon adds the &#x60;rejectedOrders&#x60; list into the response, which contains an entry for each order we couldn&#39;t process. Each entry is composed of an error message describing the reason of the failure, so that sellers can take action.  The table below displays the supported request and burst maximum rates:  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:easyship_v2022_03_23/model/CreateScheduledPackagesRequest} createScheduledPackagesRequest The request schema for the &#x60;createScheduledPackageBulk&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyship_v2022_03_23/model/CreateScheduledPackagesResponse} and HTTP response
     */
    createScheduledPackageBulkWithHttpInfo(createScheduledPackagesRequest) {
      let postBody = createScheduledPackagesRequest;

      // verify the required parameter 'createScheduledPackagesRequest' is set
      if (createScheduledPackagesRequest === undefined || createScheduledPackagesRequest === null) {
        throw new Error("Missing the required parameter 'createScheduledPackagesRequest' when calling createScheduledPackageBulk");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateScheduledPackagesResponse;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/packages/bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * This operation automatically schedules a time slot for all the &#x60;amazonOrderId&#x60;s given as input, generating the associated shipping labels, along with other compliance documents according to the marketplace (refer to the [marketplace document support table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table)).  Developers calling this operation may optionally assign a &#x60;packageDetails&#x60; object, allowing them to input a preferred time slot for each order in their request. In this case, Amazon will try to schedule the respective packages using their optional settings. On the other hand, *i.e.*, if the time slot is not provided, Amazon will then pick the earliest time slot possible.   Regarding the shipping label&#39;s file format, external developers are able to choose between PDF or ZPL, and Amazon will create the label accordingly.  This operation returns an array composed of the scheduled packages, and a short-lived URL pointing to a zip file containing the generated shipping labels and the other documents enabled for your marketplace. If at least an order couldn&#39;t be scheduled, then Amazon adds the &#x60;rejectedOrders&#x60; list into the response, which contains an entry for each order we couldn&#39;t process. Each entry is composed of an error message describing the reason of the failure, so that sellers can take action.  The table below displays the supported request and burst maximum rates:  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:easyship_v2022_03_23/model/CreateScheduledPackagesRequest} createScheduledPackagesRequest The request schema for the &#x60;createScheduledPackageBulk&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyship_v2022_03_23/model/CreateScheduledPackagesResponse}
     */
    createScheduledPackageBulk(createScheduledPackagesRequest) {
      return this.createScheduledPackageBulkWithHttpInfo(createScheduledPackagesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} amazonOrderId An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     * @param {String} marketplaceId An identifier for the marketplace in which the seller is selling.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyship_v2022_03_23/model/Package} and HTTP response
     */
    getScheduledPackageWithHttpInfo(amazonOrderId, marketplaceId) {
      let postBody = null;

      // verify the required parameter 'amazonOrderId' is set
      if (amazonOrderId === undefined || amazonOrderId === null) {
        throw new Error("Missing the required parameter 'amazonOrderId' when calling getScheduledPackage");
      }

      // verify the required parameter 'marketplaceId' is set
      if (marketplaceId === undefined || marketplaceId === null) {
        throw new Error("Missing the required parameter 'marketplaceId' when calling getScheduledPackage");
      }


      let pathParams = {
      };
      let queryParams = {
        'amazonOrderId': amazonOrderId,
        'marketplaceId': marketplaceId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Package;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/package', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} amazonOrderId An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     * @param {String} marketplaceId An identifier for the marketplace in which the seller is selling.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyship_v2022_03_23/model/Package}
     */
    getScheduledPackage(amazonOrderId, marketplaceId) {
      return this.getScheduledPackageWithHttpInfo(amazonOrderId, marketplaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:easyship_v2022_03_23/model/ListHandoverSlotsRequest} opts.listHandoverSlotsRequest The request schema for the &#x60;listHandoverSlots&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyship_v2022_03_23/model/ListHandoverSlotsResponse} and HTTP response
     */
    listHandoverSlotsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['listHandoverSlotsRequest'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ListHandoverSlotsResponse;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/timeSlot', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:easyship_v2022_03_23/model/ListHandoverSlotsRequest} opts.listHandoverSlotsRequest The request schema for the &#x60;listHandoverSlots&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyship_v2022_03_23/model/ListHandoverSlotsResponse}
     */
    listHandoverSlots(opts) {
      return this.listHandoverSlotsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the time slot for handing over the package indicated by the specified &#x60;scheduledPackageId&#x60;. You can get the new &#x60;slotId&#x60; value for the time slot by calling the &#x60;listHandoverSlots&#x60; operation before making another &#x60;patch&#x60; call.  See the **Update Package** column in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:easyship_v2022_03_23/model/UpdateScheduledPackagesRequest} opts.updateScheduledPackagesRequest The request schema for the &#x60;updateScheduledPackages&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyship_v2022_03_23/model/Packages} and HTTP response
     */
    updateScheduledPackagesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['updateScheduledPackagesRequest'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Packages;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/package', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the time slot for handing over the package indicated by the specified &#x60;scheduledPackageId&#x60;. You can get the new &#x60;slotId&#x60; value for the time slot by calling the &#x60;listHandoverSlots&#x60; operation before making another &#x60;patch&#x60; call.  See the **Update Package** column in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:easyship_v2022_03_23/model/UpdateScheduledPackagesRequest} opts.updateScheduledPackagesRequest The request schema for the &#x60;updateScheduledPackages&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyship_v2022_03_23/model/Packages}
     */
    updateScheduledPackages(opts) {
      return this.updateScheduledPackagesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
