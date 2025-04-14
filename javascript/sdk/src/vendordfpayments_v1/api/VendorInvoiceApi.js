/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient.js";
import {SubmitInvoiceRequest} from '../model/SubmitInvoiceRequest.js';
import {SubmitInvoiceResponse} from '../model/SubmitInvoiceResponse.js';

/**
* VendorInvoice service.
* @module vendordfpayments_v1/api/VendorInvoiceApi
* @version v1
*/
export class VendorInvoiceApi {

    /**
    * Constructs a new VendorInvoiceApi. 
    * @alias module:vendordfpayments_v1/api/VendorInvoiceApi
    * @class
    * @param {module:vendordfpayments_v1/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:vendordfpayments_v1/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Submits one or more invoices for a vendor&#39;s direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:vendordfpayments_v1/model/SubmitInvoiceRequest} body The request body containing one or more invoices for vendor orders.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendordfpayments_v1/model/SubmitInvoiceResponse} and HTTP response
     */
    submitInvoiceWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling submitInvoice");
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
      let returnType = SubmitInvoiceResponse;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/payments/v1/invoices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Submits one or more invoices for a vendor&#39;s direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:vendordfpayments_v1/model/SubmitInvoiceRequest} body The request body containing one or more invoices for vendor orders.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendordfpayments_v1/model/SubmitInvoiceResponse}
     */
    submitInvoice(body) {
      return this.submitInvoiceWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
