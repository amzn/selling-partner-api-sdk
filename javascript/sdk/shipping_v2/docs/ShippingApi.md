# AmazonShippingApi.ShippingApi

All URIs are relative to *https://sellingpartnerapi-eu.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelShipment**](ShippingApi.md#cancelShipment) | **PUT** /shipping/v2/shipments/{shipmentId}/cancel | 
[**createClaim**](ShippingApi.md#createClaim) | **POST** /shipping/v2/claims | 
[**directPurchaseShipment**](ShippingApi.md#directPurchaseShipment) | **POST** /shipping/v2/shipments/directPurchase | 
[**generateCollectionForm**](ShippingApi.md#generateCollectionForm) | **POST** /shipping/v2/collectionForms | 
[**getAccessPoints**](ShippingApi.md#getAccessPoints) | **GET** /shipping/v2/accessPoints | 
[**getAdditionalInputs**](ShippingApi.md#getAdditionalInputs) | **GET** /shipping/v2/shipments/additionalInputs/schema | 
[**getCarrierAccountFormInputs**](ShippingApi.md#getCarrierAccountFormInputs) | **GET** /shipping/v2/carrierAccountFormInputs | 
[**getCarrierAccounts**](ShippingApi.md#getCarrierAccounts) | **PUT** /shipping/v2/carrierAccounts | 
[**getCollectionForm**](ShippingApi.md#getCollectionForm) | **GET** /shipping/v2/collectionForms/{collectionFormId} | 
[**getCollectionFormHistory**](ShippingApi.md#getCollectionFormHistory) | **PUT** /shipping/v2/collectionForms/history | 
[**getRates**](ShippingApi.md#getRates) | **POST** /shipping/v2/shipments/rates | 
[**getShipmentDocuments**](ShippingApi.md#getShipmentDocuments) | **GET** /shipping/v2/shipments/{shipmentId}/documents | 
[**getTracking**](ShippingApi.md#getTracking) | **GET** /shipping/v2/tracking | 
[**getUnmanifestedShipments**](ShippingApi.md#getUnmanifestedShipments) | **PUT** /shipping/v2/unmanifestedShipments | 
[**linkCarrierAccount**](ShippingApi.md#linkCarrierAccount) | **PUT** /shipping/v2/carrierAccounts/{carrierId} | 
[**linkCarrierAccount_0**](ShippingApi.md#linkCarrierAccount_0) | **POST** /shipping/v2/carrierAccounts/{carrierId} | 
[**oneClickShipment**](ShippingApi.md#oneClickShipment) | **POST** /shipping/v2/oneClickShipment | 
[**purchaseShipment**](ShippingApi.md#purchaseShipment) | **POST** /shipping/v2/shipments | 
[**submitNdrFeedback**](ShippingApi.md#submitNdrFeedback) | **POST** /shipping/v2/ndrFeedback | 
[**unlinkCarrierAccount**](ShippingApi.md#unlinkCarrierAccount) | **PUT** /shipping/v2/carrierAccounts/{carrierId}/unlink | 



## cancelShipment

> CancelShipmentResponse cancelShipment(shipmentId, opts)



Cancels a purchased shipment. Returns an empty object if the shipment is successfully cancelled.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let shipmentId = "shipmentId_example"; // String | The shipment identifier originally returned by the purchaseShipment operation.
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.cancelShipment(shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| The shipment identifier originally returned by the purchaseShipment operation. | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**CancelShipmentResponse**](CancelShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createClaim

> CreateClaimResponse createClaim(body, opts)



This API will be used to create claim for single eligible shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.CreateClaimRequest(); // CreateClaimRequest | Request body for the createClaim operation
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.createClaim(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateClaimRequest**](CreateClaimRequest.md)| Request body for the createClaim operation | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**CreateClaimResponse**](CreateClaimResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## directPurchaseShipment

> DirectPurchaseResponse directPurchaseShipment(body, opts)



Purchases the shipping service for a shipment using the best fit service offering. Returns purchase related details and documents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.DirectPurchaseRequest(); // DirectPurchaseRequest | DirectPurchaseRequest body
let opts = {
  'xAmznIdempotencyKey': "xAmznIdempotencyKey_example", // String | A unique value which the server uses to recognize subsequent retries of the same request.
  'locale': "locale_example", // String | The IETF Language Tag. Note that this only supports the primary language subtag with one secondary language subtag (i.e. en-US, fr-CA). The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary language subtags. 
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.directPurchaseShipment(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DirectPurchaseRequest**](DirectPurchaseRequest.md)| DirectPurchaseRequest body | 
 **xAmznIdempotencyKey** | **String**| A unique value which the server uses to recognize subsequent retries of the same request. | [optional] 
 **locale** | **String**| The IETF Language Tag. Note that this only supports the primary language subtag with one secondary language subtag (i.e. en-US, fr-CA). The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary language subtags.  | [optional] 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**DirectPurchaseResponse**](DirectPurchaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateCollectionForm

> GenerateCollectionFormResponse generateCollectionForm(body, opts)



This API  Call to generate the collection form.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.GenerateCollectionFormRequest(); // GenerateCollectionFormRequest | GenerateCollectionFormRequest body
let opts = {
  'xAmznIdempotencyKey': "xAmznIdempotencyKey_example", // String | A unique value which the server uses to recognize subsequent retries of the same request.
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.generateCollectionForm(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GenerateCollectionFormRequest**](GenerateCollectionFormRequest.md)| GenerateCollectionFormRequest body | 
 **xAmznIdempotencyKey** | **String**| A unique value which the server uses to recognize subsequent retries of the same request. | [optional] 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GenerateCollectionFormResponse**](GenerateCollectionFormResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAccessPoints

> GetAccessPointsResponse getAccessPoints(accessPointTypes, countryCode, postalCode, opts)



Returns a list of access points in proximity of input postal code.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let accessPointTypes = ["null"]; // [String] | Access point types
let countryCode = "US"; // String | Country code for access point
let postalCode = "EX332JL"; // String | postal code for access point
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getAccessPoints(accessPointTypes, countryCode, postalCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessPointTypes** | [**[String]**](String.md)| Access point types | 
 **countryCode** | **String**| Country code for access point | 
 **postalCode** | **String**| postal code for access point | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetAccessPointsResponse**](GetAccessPointsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAdditionalInputs

> GetAdditionalInputsResponse getAdditionalInputs(requestToken, rateId, opts)



Returns the JSON schema to use for providing additional inputs when needed to purchase a shipping offering. Call the getAdditionalInputs operation when the response to a previous call to the getRates operation indicates that additional inputs are required for the rate (shipping offering) that you want to purchase.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let requestToken = "requestToken_example"; // String | The request token returned in the response to the getRates operation.
let rateId = "rateId_example"; // String | The rate identifier for the shipping offering (rate) returned in the response to the getRates operation.
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getAdditionalInputs(requestToken, rateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestToken** | **String**| The request token returned in the response to the getRates operation. | 
 **rateId** | **String**| The rate identifier for the shipping offering (rate) returned in the response to the getRates operation. | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetAdditionalInputsResponse**](GetAdditionalInputsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCarrierAccountFormInputs

> GetCarrierAccountFormInputsResponse getCarrierAccountFormInputs(opts)



This API will return a list of input schema required to register a shipper account with the carrier.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getCarrierAccountFormInputs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetCarrierAccountFormInputsResponse**](GetCarrierAccountFormInputsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCarrierAccounts

> GetCarrierAccountsResponse getCarrierAccounts(body, opts)



This API will return Get all carrier accounts for a merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.GetCarrierAccountsRequest(); // GetCarrierAccountsRequest | GetCarrierAccountsRequest body
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getCarrierAccounts(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetCarrierAccountsRequest**](GetCarrierAccountsRequest.md)| GetCarrierAccountsRequest body | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetCarrierAccountsResponse**](GetCarrierAccountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCollectionForm

> GetCollectionFormResponse getCollectionForm(collectionFormId, opts)



This API reprint a collection form.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let collectionFormId = "collectionFormId_example"; // String | collection form Id to reprint a collection.
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getCollectionForm(collectionFormId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionFormId** | **String**| collection form Id to reprint a collection. | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetCollectionFormResponse**](GetCollectionFormResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionFormHistory

> GetCollectionFormHistoryResponse getCollectionFormHistory(body, opts)



This API Call to get the history of the previously generated collection forms.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.GetCollectionFormHistoryRequest(); // GetCollectionFormHistoryRequest | GetCollectionFormHistoryRequest body
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getCollectionFormHistory(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetCollectionFormHistoryRequest**](GetCollectionFormHistoryRequest.md)| GetCollectionFormHistoryRequest body | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetCollectionFormHistoryResponse**](GetCollectionFormHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRates

> GetRatesResponse getRates(body, opts)



Returns the available shipping service offerings.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.GetRatesRequest(); // GetRatesRequest | GetRatesRequest body
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getRates(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetRatesRequest**](GetRatesRequest.md)| GetRatesRequest body | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetRatesResponse**](GetRatesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getShipmentDocuments

> GetShipmentDocumentsResponse getShipmentDocuments(shipmentId, packageClientReferenceId, opts)



Returns the shipping documents associated with a package in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let shipmentId = "shipmentId_example"; // String | The shipment identifier originally returned by the purchaseShipment operation.
let packageClientReferenceId = "packageClientReferenceId_example"; // String | The package client reference identifier originally provided in the request body parameter for the getRates operation.
let opts = {
  'format': "format_example", // String | The file format of the document. Must be one of the supported formats returned by the getRates operation.
  'dpi': 3.4, // Number | The resolution of the document (for example, 300 means 300 dots per inch). Must be one of the supported resolutions returned in the response to the getRates operation.
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getShipmentDocuments(shipmentId, packageClientReferenceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| The shipment identifier originally returned by the purchaseShipment operation. | 
 **packageClientReferenceId** | **String**| The package client reference identifier originally provided in the request body parameter for the getRates operation. | 
 **format** | **String**| The file format of the document. Must be one of the supported formats returned by the getRates operation. | [optional] 
 **dpi** | **Number**| The resolution of the document (for example, 300 means 300 dots per inch). Must be one of the supported resolutions returned in the response to the getRates operation. | [optional] 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetShipmentDocumentsResponse**](GetShipmentDocumentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTracking

> GetTrackingResponse getTracking(trackingId, carrierId, opts)



Returns tracking information for a purchased shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let trackingId = "trackingId_example"; // String | A carrier-generated tracking identifier originally returned by the purchaseShipment operation.
let carrierId = "carrierId_example"; // String | A carrier identifier originally returned by the getRates operation for the selected rate.
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getTracking(trackingId, carrierId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackingId** | **String**| A carrier-generated tracking identifier originally returned by the purchaseShipment operation. | 
 **carrierId** | **String**| A carrier identifier originally returned by the getRates operation for the selected rate. | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetTrackingResponse**](GetTrackingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnmanifestedShipments

> GetUnmanifestedShipmentsResponse getUnmanifestedShipments(body, opts)



This API Get all unmanifested carriers with shipment locations. Any locations which has unmanifested shipments         with an eligible carrier for manifesting shall be returned.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.GetUnmanifestedShipmentsRequest(); // GetUnmanifestedShipmentsRequest | GetUmanifestedShipmentsRequest body
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.getUnmanifestedShipments(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetUnmanifestedShipmentsRequest**](GetUnmanifestedShipmentsRequest.md)| GetUmanifestedShipmentsRequest body | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**GetUnmanifestedShipmentsResponse**](GetUnmanifestedShipmentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## linkCarrierAccount

> LinkCarrierAccountResponse linkCarrierAccount(carrierId, body, opts)



This API associates/links the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let carrierId = "carrierId_example"; // String | An identifier for the carrier with which the seller's account is being linked.
let body = new AmazonShippingApi.LinkCarrierAccountRequest(); // LinkCarrierAccountRequest | LinkCarrierAccountRequest body
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.linkCarrierAccount(carrierId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrierId** | **String**| An identifier for the carrier with which the seller&#39;s account is being linked. | 
 **body** | [**LinkCarrierAccountRequest**](LinkCarrierAccountRequest.md)| LinkCarrierAccountRequest body | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**LinkCarrierAccountResponse**](LinkCarrierAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## linkCarrierAccount_0

> LinkCarrierAccountResponse linkCarrierAccount_0(carrierId, body, opts)



This API associates/links the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let carrierId = "carrierId_example"; // String | An identifier for the carrier with which the seller's account is being linked.
let body = new AmazonShippingApi.LinkCarrierAccountRequest(); // LinkCarrierAccountRequest | LinkCarrierAccountRequest body
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.linkCarrierAccount_0(carrierId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrierId** | **String**| An identifier for the carrier with which the seller&#39;s account is being linked. | 
 **body** | [**LinkCarrierAccountRequest**](LinkCarrierAccountRequest.md)| LinkCarrierAccountRequest body | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**LinkCarrierAccountResponse**](LinkCarrierAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## oneClickShipment

> OneClickShipmentResponse oneClickShipment(body, opts)



Purchases a shipping service identifier and returns purchase-related details and documents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.OneClickShipmentRequest(); // OneClickShipmentRequest | OneClickShipmentRequest body
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.oneClickShipment(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OneClickShipmentRequest**](OneClickShipmentRequest.md)| OneClickShipmentRequest body | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**OneClickShipmentResponse**](OneClickShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## purchaseShipment

> PurchaseShipmentResponse purchaseShipment(body, opts)



Purchases a shipping service and returns purchase related details and documents.  Note: You must complete the purchase within 10 minutes of rate creation by the shipping service provider. If you make the request after the 10 minutes have expired, you will receive an error response with the error code equal to \&quot;TOKEN_EXPIRED\&quot;. If you receive this error response, you must get the rates for the shipment again.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.PurchaseShipmentRequest(); // PurchaseShipmentRequest | PurchaseShipmentRequest body
let opts = {
  'xAmznIdempotencyKey': "xAmznIdempotencyKey_example", // String | A unique value which the server uses to recognize subsequent retries of the same request.
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.purchaseShipment(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PurchaseShipmentRequest**](PurchaseShipmentRequest.md)| PurchaseShipmentRequest body | 
 **xAmznIdempotencyKey** | **String**| A unique value which the server uses to recognize subsequent retries of the same request. | [optional] 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**PurchaseShipmentResponse**](PurchaseShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitNdrFeedback

> submitNdrFeedback(body, opts)



This API submits the NDR (Non-delivery Report) Feedback for any eligible shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let body = new AmazonShippingApi.SubmitNdrFeedbackRequest(); // SubmitNdrFeedbackRequest | Request body for ndrFeedback operation
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.submitNdrFeedback(body, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitNdrFeedbackRequest**](SubmitNdrFeedbackRequest.md)| Request body for ndrFeedback operation | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unlinkCarrierAccount

> UnlinkCarrierAccountResponse unlinkCarrierAccount(carrierId, body, opts)



This API Unlink the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import AmazonShippingApi from 'amazon_shipping_api';

let apiInstance = new AmazonShippingApi.ShippingApi();
let carrierId = "carrierId_example"; // String | carrier Id to unlink with merchant.
let body = new AmazonShippingApi.UnlinkCarrierAccountRequest(); // UnlinkCarrierAccountRequest | UnlinkCarrierAccountRequest body
let opts = {
  'xAmznShippingBusinessId': "xAmznShippingBusinessId_example" // String | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.
};
apiInstance.unlinkCarrierAccount(carrierId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrierId** | **String**| carrier Id to unlink with merchant. | 
 **body** | [**UnlinkCarrierAccountRequest**](UnlinkCarrierAccountRequest.md)| UnlinkCarrierAccountRequest body | 
 **xAmznShippingBusinessId** | **String**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] 

### Return type

[**UnlinkCarrierAccountResponse**](UnlinkCarrierAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

