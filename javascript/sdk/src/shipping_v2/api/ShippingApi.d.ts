/**
* Shipping service.
* @module shipping_v2/api/ShippingApi
* @version v2
*/
export class ShippingApi {
    /**
      * Constructs a new ShippingApi.
      * @alias module:shipping_v2/api/ShippingApi
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
       * Cancels a purchased shipment. Returns an empty object if the shipment is successfully cancelled.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The shipment identifier originally returned by the purchaseShipment operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<CancelShipmentResponse>}
       */
    cancelShipmentWithHttpInfo(shipmentId: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<CancelShipmentResponse>;
    /**
       * Cancels a purchased shipment. Returns an empty object if the shipment is successfully cancelled.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The shipment identifier originally returned by the purchaseShipment operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<CancelShipmentResponse>}
       */
    cancelShipment(shipmentId: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<CancelShipmentResponse>;
    /**
       * This API will be used to create claim for single eligible shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateClaimRequest} body Request body for the createClaim operation
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<CreateClaimResponse>}
       */
    createClaimWithHttpInfo(body: CreateClaimRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<CreateClaimResponse>;
    /**
       * This API will be used to create claim for single eligible shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateClaimRequest} body Request body for the createClaim operation
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<CreateClaimResponse>}
       */
    createClaim(body: CreateClaimRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<CreateClaimResponse>;
    /**
       * Purchases the shipping service for a shipment using the best fit service offering. Returns purchase related details and documents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {DirectPurchaseRequest} body DirectPurchaseRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznIdempotencyKey] A unique value which the server uses to recognize subsequent retries of the same request.
       * @param {String} [opts.locale] The IETF Language Tag. Note that this only supports the primary language subtag with one secondary language subtag (i.e. en-US, fr-CA). The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary language subtags.
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<DirectPurchaseResponse>}
       */
    directPurchaseShipmentWithHttpInfo(body: DirectPurchaseRequest, opts?: {
        xAmznIdempotencyKey?: string;
        locale?: string;
        xAmznShippingBusinessId?: string;
    }): Promise<DirectPurchaseResponse>;
    /**
       * Purchases the shipping service for a shipment using the best fit service offering. Returns purchase related details and documents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {DirectPurchaseRequest} body DirectPurchaseRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznIdempotencyKey] A unique value which the server uses to recognize subsequent retries of the same request.
       * @param {String} [opts.locale] The IETF Language Tag. Note that this only supports the primary language subtag with one secondary language subtag (i.e. en-US, fr-CA). The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary language subtags.
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<DirectPurchaseResponse>}
       */
    directPurchaseShipment(body: DirectPurchaseRequest, opts?: {
        xAmznIdempotencyKey?: string;
        locale?: string;
        xAmznShippingBusinessId?: string;
    }): Promise<DirectPurchaseResponse>;
    /**
       * This API  Call to generate the collection form.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GenerateCollectionFormRequest} body GenerateCollectionFormRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznIdempotencyKey] A unique value which the server uses to recognize subsequent retries of the same request.
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GenerateCollectionFormResponse>}
       */
    generateCollectionFormWithHttpInfo(body: GenerateCollectionFormRequest, opts?: {
        xAmznIdempotencyKey?: string;
        xAmznShippingBusinessId?: string;
    }): Promise<GenerateCollectionFormResponse>;
    /**
       * This API  Call to generate the collection form.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GenerateCollectionFormRequest} body GenerateCollectionFormRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznIdempotencyKey] A unique value which the server uses to recognize subsequent retries of the same request.
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GenerateCollectionFormResponse>}
       */
    generateCollectionForm(body: GenerateCollectionFormRequest, opts?: {
        xAmznIdempotencyKey?: string;
        xAmznShippingBusinessId?: string;
    }): Promise<GenerateCollectionFormResponse>;
    /**
       * Returns a list of access points in proximity of input postal code.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} accessPointTypes Access point types
       * @param {String} countryCode Country code for access point
       * @param {String} postalCode postal code for access point
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetAccessPointsResponse>}
       */
    getAccessPointsWithHttpInfo(accessPointTypes: [string], countryCode: string, postalCode: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetAccessPointsResponse>;
    /**
       * Returns a list of access points in proximity of input postal code.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} accessPointTypes Access point types
       * @param {String} countryCode Country code for access point
       * @param {String} postalCode postal code for access point
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetAccessPointsResponse>}
       */
    getAccessPoints(accessPointTypes: [string], countryCode: string, postalCode: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetAccessPointsResponse>;
    /**
       * Returns the JSON schema to use for providing additional inputs when needed to purchase a shipping offering. Call the getAdditionalInputs operation when the response to a previous call to the getRates operation indicates that additional inputs are required for the rate (shipping offering) that you want to purchase.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} requestToken The request token returned in the response to the getRates operation.
       * @param {String} rateId The rate identifier for the shipping offering (rate) returned in the response to the getRates operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetAdditionalInputsResponse>}
       */
    getAdditionalInputsWithHttpInfo(requestToken: string, rateId: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetAdditionalInputsResponse>;
    /**
       * Returns the JSON schema to use for providing additional inputs when needed to purchase a shipping offering. Call the getAdditionalInputs operation when the response to a previous call to the getRates operation indicates that additional inputs are required for the rate (shipping offering) that you want to purchase.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} requestToken The request token returned in the response to the getRates operation.
       * @param {String} rateId The rate identifier for the shipping offering (rate) returned in the response to the getRates operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetAdditionalInputsResponse>}
       */
    getAdditionalInputs(requestToken: string, rateId: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetAdditionalInputsResponse>;
    /**
       * This API will return a list of input schema required to register a shipper account with the carrier.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetCarrierAccountFormInputsResponse>}
       */
    getCarrierAccountFormInputsWithHttpInfo(opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetCarrierAccountFormInputsResponse>;
    /**
       * This API will return a list of input schema required to register a shipper account with the carrier.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetCarrierAccountFormInputsResponse>}
       */
    getCarrierAccountFormInputs(opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetCarrierAccountFormInputsResponse>;
    /**
       * This API will return Get all carrier accounts for a merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetCarrierAccountsRequest} body GetCarrierAccountsRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetCarrierAccountsResponse>}
       */
    getCarrierAccountsWithHttpInfo(body: GetCarrierAccountsRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetCarrierAccountsResponse>;
    /**
       * This API will return Get all carrier accounts for a merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetCarrierAccountsRequest} body GetCarrierAccountsRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetCarrierAccountsResponse>}
       */
    getCarrierAccounts(body: GetCarrierAccountsRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetCarrierAccountsResponse>;
    /**
       * This API reprint a collection form.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} collectionFormId collection form Id to reprint a collection.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetCollectionFormResponse>}
       */
    getCollectionFormWithHttpInfo(collectionFormId: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetCollectionFormResponse>;
    /**
       * This API reprint a collection form.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} collectionFormId collection form Id to reprint a collection.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetCollectionFormResponse>}
       */
    getCollectionForm(collectionFormId: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetCollectionFormResponse>;
    /**
       * This API Call to get the history of the previously generated collection forms.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetCollectionFormHistoryRequest} body GetCollectionFormHistoryRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetCollectionFormHistoryResponse>}
       */
    getCollectionFormHistoryWithHttpInfo(body: GetCollectionFormHistoryRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetCollectionFormHistoryResponse>;
    /**
       * This API Call to get the history of the previously generated collection forms.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetCollectionFormHistoryRequest} body GetCollectionFormHistoryRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetCollectionFormHistoryResponse>}
       */
    getCollectionFormHistory(body: GetCollectionFormHistoryRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetCollectionFormHistoryResponse>;
    /**
       * Returns the available shipping service offerings.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetRatesRequest} body GetRatesRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetRatesResponse>}
       */
    getRatesWithHttpInfo(body: GetRatesRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetRatesResponse>;
    /**
       * Returns the available shipping service offerings.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetRatesRequest} body GetRatesRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetRatesResponse>}
       */
    getRates(body: GetRatesRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetRatesResponse>;
    /**
       * Returns the shipping documents associated with a package in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The shipment identifier originally returned by the purchaseShipment operation.
       * @param {String} packageClientReferenceId The package client reference identifier originally provided in the request body parameter for the getRates operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.format] The file format of the document. Must be one of the supported formats returned by the getRates operation.
       * @param {Number} [opts.dpi] The resolution of the document (for example, 300 means 300 dots per inch). Must be one of the supported resolutions returned in the response to the getRates operation.
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetShipmentDocumentsResponse>}
       */
    getShipmentDocumentsWithHttpInfo(shipmentId: string, packageClientReferenceId: string, opts?: {
        format?: string;
        dpi?: number;
        xAmznShippingBusinessId?: string;
    }): Promise<GetShipmentDocumentsResponse>;
    /**
       * Returns the shipping documents associated with a package in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The shipment identifier originally returned by the purchaseShipment operation.
       * @param {String} packageClientReferenceId The package client reference identifier originally provided in the request body parameter for the getRates operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.format] The file format of the document. Must be one of the supported formats returned by the getRates operation.
       * @param {Number} [opts.dpi] The resolution of the document (for example, 300 means 300 dots per inch). Must be one of the supported resolutions returned in the response to the getRates operation.
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetShipmentDocumentsResponse>}
       */
    getShipmentDocuments(shipmentId: string, packageClientReferenceId: string, opts?: {
        format?: string;
        dpi?: number;
        xAmznShippingBusinessId?: string;
    }): Promise<GetShipmentDocumentsResponse>;
    /**
       * Returns tracking information for a purchased shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} trackingId A carrier-generated tracking identifier originally returned by the purchaseShipment operation.
       * @param {String} carrierId A carrier identifier originally returned by the getRates operation for the selected rate.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetTrackingResponse>}
       */
    getTrackingWithHttpInfo(trackingId: string, carrierId: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetTrackingResponse>;
    /**
       * Returns tracking information for a purchased shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} trackingId A carrier-generated tracking identifier originally returned by the purchaseShipment operation.
       * @param {String} carrierId A carrier identifier originally returned by the getRates operation for the selected rate.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetTrackingResponse>}
       */
    getTracking(trackingId: string, carrierId: string, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetTrackingResponse>;
    /**
       * This API Get all unmanifested carriers with shipment locations. Any locations which has unmanifested shipments         with an eligible carrier for manifesting shall be returned.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetUnmanifestedShipmentsRequest} body GetUmanifestedShipmentsRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetUnmanifestedShipmentsResponse>}
       */
    getUnmanifestedShipmentsWithHttpInfo(body: GetUnmanifestedShipmentsRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetUnmanifestedShipmentsResponse>;
    /**
       * This API Get all unmanifested carriers with shipment locations. Any locations which has unmanifested shipments         with an eligible carrier for manifesting shall be returned.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetUnmanifestedShipmentsRequest} body GetUmanifestedShipmentsRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<GetUnmanifestedShipmentsResponse>}
       */
    getUnmanifestedShipments(body: GetUnmanifestedShipmentsRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<GetUnmanifestedShipmentsResponse>;
    /**
       * This API associates/links the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} carrierId An identifier for the carrier with which the seller&#39;s account is being linked.
       * @param {LinkCarrierAccountRequest} body LinkCarrierAccountRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<LinkCarrierAccountResponse>}
       */
    linkCarrierAccountWithHttpInfo(carrierId: string, body: LinkCarrierAccountRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<LinkCarrierAccountResponse>;
    /**
       * This API associates/links the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} carrierId An identifier for the carrier with which the seller&#39;s account is being linked.
       * @param {LinkCarrierAccountRequest} body LinkCarrierAccountRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<LinkCarrierAccountResponse>}
       */
    linkCarrierAccount(carrierId: string, body: LinkCarrierAccountRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<LinkCarrierAccountResponse>;
    /**
       * This API associates/links the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} carrierId An identifier for the carrier with which the seller&#39;s account is being linked.
       * @param {LinkCarrierAccountRequest} body LinkCarrierAccountRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<LinkCarrierAccountResponse>}
       */
    linkCarrierAccount_0WithHttpInfo(carrierId: string, body: LinkCarrierAccountRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<LinkCarrierAccountResponse>;
    /**
       * This API associates/links the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} carrierId An identifier for the carrier with which the seller&#39;s account is being linked.
       * @param {LinkCarrierAccountRequest} body LinkCarrierAccountRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<LinkCarrierAccountResponse>}
       */
    linkCarrierAccount_0(carrierId: string, body: LinkCarrierAccountRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<LinkCarrierAccountResponse>;
    /**
       * Purchases a shipping service identifier and returns purchase-related details and documents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {OneClickShipmentRequest} body OneClickShipmentRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<OneClickShipmentResponse>}
       */
    oneClickShipmentWithHttpInfo(body: OneClickShipmentRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<OneClickShipmentResponse>;
    /**
       * Purchases a shipping service identifier and returns purchase-related details and documents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {OneClickShipmentRequest} body OneClickShipmentRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<OneClickShipmentResponse>}
       */
    oneClickShipment(body: OneClickShipmentRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<OneClickShipmentResponse>;
    /**
       * Purchases a shipping service and returns purchase related details and documents.  Note: You must complete the purchase within 10 minutes of rate creation by the shipping service provider. If you make the request after the 10 minutes have expired, you will receive an error response with the error code equal to \&quot;TOKEN_EXPIRED\&quot;. If you receive this error response, you must get the rates for the shipment again.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {PurchaseShipmentRequest} body PurchaseShipmentRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznIdempotencyKey] A unique value which the server uses to recognize subsequent retries of the same request.
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<PurchaseShipmentResponse>}
       */
    purchaseShipmentWithHttpInfo(body: PurchaseShipmentRequest, opts?: {
        xAmznIdempotencyKey?: string;
        xAmznShippingBusinessId?: string;
    }): Promise<PurchaseShipmentResponse>;
    /**
       * Purchases a shipping service and returns purchase related details and documents.  Note: You must complete the purchase within 10 minutes of rate creation by the shipping service provider. If you make the request after the 10 minutes have expired, you will receive an error response with the error code equal to \&quot;TOKEN_EXPIRED\&quot;. If you receive this error response, you must get the rates for the shipment again.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {PurchaseShipmentRequest} body PurchaseShipmentRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznIdempotencyKey] A unique value which the server uses to recognize subsequent retries of the same request.
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<PurchaseShipmentResponse>}
       */
    purchaseShipment(body: PurchaseShipmentRequest, opts?: {
        xAmznIdempotencyKey?: string;
        xAmznShippingBusinessId?: string;
    }): Promise<PurchaseShipmentResponse>;
    /**
       * This API submits the NDR (Non-delivery Report) Feedback for any eligible shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitNdrFeedbackRequest} body Request body for ndrFeedback operation
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<void>}
       */
    submitNdrFeedbackWithHttpInfo(body: SubmitNdrFeedbackRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<void>;
    /**
       * This API submits the NDR (Non-delivery Report) Feedback for any eligible shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitNdrFeedbackRequest} body Request body for ndrFeedback operation
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<void>}
       */
    submitNdrFeedback(body: SubmitNdrFeedbackRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<void>;
    /**
       * This API Unlink the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} carrierId carrier Id to unlink with merchant.
       * @param {UnlinkCarrierAccountRequest} body UnlinkCarrierAccountRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<UnlinkCarrierAccountResponse>}
       */
    unlinkCarrierAccountWithHttpInfo(carrierId: string, body: UnlinkCarrierAccountRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<UnlinkCarrierAccountResponse>;
    /**
       * This API Unlink the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} carrierId carrier Id to unlink with merchant.
       * @param {UnlinkCarrierAccountRequest} body UnlinkCarrierAccountRequest body
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.xAmznShippingBusinessId] Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
       * @return {Promise<UnlinkCarrierAccountResponse>}
       */
    unlinkCarrierAccount(carrierId: string, body: UnlinkCarrierAccountRequest, opts?: {
        xAmznShippingBusinessId?: string;
    }): Promise<UnlinkCarrierAccountResponse>;
    #private;
}
import { CancelShipmentResponse } from '../model/CancelShipmentResponse.js';
import { CreateClaimRequest } from '../model/CreateClaimRequest.js';
import { CreateClaimResponse } from '../model/CreateClaimResponse.js';
import { DirectPurchaseRequest } from '../model/DirectPurchaseRequest.js';
import { DirectPurchaseResponse } from '../model/DirectPurchaseResponse.js';
import { GenerateCollectionFormRequest } from '../model/GenerateCollectionFormRequest.js';
import { GenerateCollectionFormResponse } from '../model/GenerateCollectionFormResponse.js';
import { GetAccessPointsResponse } from '../model/GetAccessPointsResponse.js';
import { GetAdditionalInputsResponse } from '../model/GetAdditionalInputsResponse.js';
import { GetCarrierAccountFormInputsResponse } from '../model/GetCarrierAccountFormInputsResponse.js';
import { GetCarrierAccountsRequest } from '../model/GetCarrierAccountsRequest.js';
import { GetCarrierAccountsResponse } from '../model/GetCarrierAccountsResponse.js';
import { GetCollectionFormResponse } from '../model/GetCollectionFormResponse.js';
import { GetCollectionFormHistoryRequest } from '../model/GetCollectionFormHistoryRequest.js';
import { GetCollectionFormHistoryResponse } from '../model/GetCollectionFormHistoryResponse.js';
import { GetRatesRequest } from '../model/GetRatesRequest.js';
import { GetRatesResponse } from '../model/GetRatesResponse.js';
import { GetShipmentDocumentsResponse } from '../model/GetShipmentDocumentsResponse.js';
import { GetTrackingResponse } from '../model/GetTrackingResponse.js';
import { GetUnmanifestedShipmentsRequest } from '../model/GetUnmanifestedShipmentsRequest.js';
import { GetUnmanifestedShipmentsResponse } from '../model/GetUnmanifestedShipmentsResponse.js';
import { LinkCarrierAccountRequest } from '../model/LinkCarrierAccountRequest.js';
import { LinkCarrierAccountResponse } from '../model/LinkCarrierAccountResponse.js';
import { OneClickShipmentRequest } from '../model/OneClickShipmentRequest.js';
import { OneClickShipmentResponse } from '../model/OneClickShipmentResponse.js';
import { PurchaseShipmentRequest } from '../model/PurchaseShipmentRequest.js';
import { PurchaseShipmentResponse } from '../model/PurchaseShipmentResponse.js';
import { SubmitNdrFeedbackRequest } from '../model/SubmitNdrFeedbackRequest.js';
import { UnlinkCarrierAccountRequest } from '../model/UnlinkCarrierAccountRequest.js';
import { UnlinkCarrierAccountResponse } from '../model/UnlinkCarrierAccountResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ShippingApi.d.ts.map