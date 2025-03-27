# SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelFulfillmentOrder**](FbaOutboundApi.md#cancelFulfillmentOrder) | **PUT** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/cancel | 
[**createFulfillmentOrder**](FbaOutboundApi.md#createFulfillmentOrder) | **POST** /fba/outbound/2020-07-01/fulfillmentOrders | 
[**createFulfillmentReturn**](FbaOutboundApi.md#createFulfillmentReturn) | **PUT** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/return | 
[**deliveryOffers**](FbaOutboundApi.md#deliveryOffers) | **POST** /fba/outbound/2020-07-01/deliveryOffers | 
[**getFeatureInventory**](FbaOutboundApi.md#getFeatureInventory) | **GET** /fba/outbound/2020-07-01/features/inventory/{featureName} | 
[**getFeatureSKU**](FbaOutboundApi.md#getFeatureSKU) | **GET** /fba/outbound/2020-07-01/features/inventory/{featureName}/{sellerSku} | 
[**getFeatures**](FbaOutboundApi.md#getFeatures) | **GET** /fba/outbound/2020-07-01/features | 
[**getFulfillmentOrder**](FbaOutboundApi.md#getFulfillmentOrder) | **GET** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId} | 
[**getFulfillmentPreview**](FbaOutboundApi.md#getFulfillmentPreview) | **POST** /fba/outbound/2020-07-01/fulfillmentOrders/preview | 
[**getPackageTrackingDetails**](FbaOutboundApi.md#getPackageTrackingDetails) | **GET** /fba/outbound/2020-07-01/tracking | 
[**listAllFulfillmentOrders**](FbaOutboundApi.md#listAllFulfillmentOrders) | **GET** /fba/outbound/2020-07-01/fulfillmentOrders | 
[**listReturnReasonCodes**](FbaOutboundApi.md#listReturnReasonCodes) | **GET** /fba/outbound/2020-07-01/returnReasonCodes | 
[**submitFulfillmentOrderStatusUpdate**](FbaOutboundApi.md#submitFulfillmentOrderStatusUpdate) | **PUT** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/status | 
[**updateFulfillmentOrder**](FbaOutboundApi.md#updateFulfillmentOrder) | **PUT** /fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId} | 



## cancelFulfillmentOrder

> CancelFulfillmentOrderResponse cancelFulfillmentOrder(sellerFulfillmentOrderId)



Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.
apiInstance.cancelFulfillmentOrder(sellerFulfillmentOrderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. | 

### Return type

[**CancelFulfillmentOrderResponse**](CancelFulfillmentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createFulfillmentOrder

> CreateFulfillmentOrderResponse createFulfillmentOrder(body)



Requests that Amazon ship items from the seller&#39;s inventory in Amazon&#39;s fulfillment network to a destination address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let body = new SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentOrderRequest(); // CreateFulfillmentOrderRequest | CreateFulfillmentOrderRequest parameter
apiInstance.createFulfillmentOrder(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFulfillmentOrderRequest**](CreateFulfillmentOrderRequest.md)| CreateFulfillmentOrderRequest parameter | 

### Return type

[**CreateFulfillmentOrderResponse**](CreateFulfillmentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFulfillmentReturn

> CreateFulfillmentReturnResponse createFulfillmentReturn(sellerFulfillmentOrderId, body)



Creates a fulfillment return.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | An identifier assigned by the seller to the fulfillment order at the time it was created. The seller uses their own records to find the correct `SellerFulfillmentOrderId` value based on the buyer's request to return items.
let body = new SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentReturnRequest(); // CreateFulfillmentReturnRequest | CreateFulfillmentReturnRequest parameter
apiInstance.createFulfillmentReturn(sellerFulfillmentOrderId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerFulfillmentOrderId** | **String**| An identifier assigned by the seller to the fulfillment order at the time it was created. The seller uses their own records to find the correct &#x60;SellerFulfillmentOrderId&#x60; value based on the buyer&#39;s request to return items. | 
 **body** | [**CreateFulfillmentReturnRequest**](CreateFulfillmentReturnRequest.md)| CreateFulfillmentReturnRequest parameter | 

### Return type

[**CreateFulfillmentReturnResponse**](CreateFulfillmentReturnResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, payload


## deliveryOffers

> GetDeliveryOffersResponse deliveryOffers(body)



Returns delivery options that include an estimated delivery date and offer expiration, based on criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let body = new SellingPartnerApisForFulfillmentOutbound.GetDeliveryOffersRequest(); // GetDeliveryOffersRequest | GetDeliveryOffersRequest parameter
apiInstance.deliveryOffers(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetDeliveryOffersRequest**](GetDeliveryOffersRequest.md)| GetDeliveryOffersRequest parameter | 

### Return type

[**GetDeliveryOffersResponse**](GetDeliveryOffersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, payload


## getFeatureInventory

> GetFeatureInventoryResponse getFeatureInventory(marketplaceId, featureName, opts)



Returns a list of inventory items that are eligible for the fulfillment feature you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)..

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let marketplaceId = "marketplaceId_example"; // String | The marketplace for which to return a list of the inventory that is eligible for the specified feature.
let featureName = "featureName_example"; // String | The name of the feature for which to return a list of eligible inventory.
let opts = {
  'nextToken': "nextToken_example", // String | A string token returned in the response to your previous request that is used to return the next response page. A value of null will return the first page.
  'queryStartDate': new Date("2013-10-20T19:20:30+01:00") // Date | A date that you can use to select inventory that has been updated since a specified date. An update is defined as any change in feature-enabled inventory availability. The date must be in the format yyyy-MM-ddTHH:mm:ss.sssZ
};
apiInstance.getFeatureInventory(marketplaceId, featureName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace for which to return a list of the inventory that is eligible for the specified feature. | 
 **featureName** | **String**| The name of the feature for which to return a list of eligible inventory. | 
 **nextToken** | **String**| A string token returned in the response to your previous request that is used to return the next response page. A value of null will return the first page. | [optional] 
 **queryStartDate** | **Date**| A date that you can use to select inventory that has been updated since a specified date. An update is defined as any change in feature-enabled inventory availability. The date must be in the format yyyy-MM-ddTHH:mm:ss.sssZ | [optional] 

### Return type

[**GetFeatureInventoryResponse**](GetFeatureInventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload


## getFeatureSKU

> GetFeatureSkuResponse getFeatureSKU(marketplaceId, featureName, sellerSku)



Returns the number of items with the sellerSKU you specify that can have orders fulfilled using the specified feature. Note that if the sellerSKU isn&#39;t eligible, the response will contain an empty skuInfo object. The parameters for this operation may contain special characters that require URL encoding. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let marketplaceId = "marketplaceId_example"; // String | The marketplace for which to return the count.
let featureName = "featureName_example"; // String | The name of the feature.
let sellerSku = "sellerSku_example"; // String | Used to identify an item in the given marketplace. `SellerSKU` is qualified by the seller's `SellerId`, which is included with every operation that you submit.
apiInstance.getFeatureSKU(marketplaceId, featureName, sellerSku).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace for which to return the count. | 
 **featureName** | **String**| The name of the feature. | 
 **sellerSku** | **String**| Used to identify an item in the given marketplace. &#x60;SellerSKU&#x60; is qualified by the seller&#39;s &#x60;SellerId&#x60;, which is included with every operation that you submit. | 

### Return type

[**GetFeatureSkuResponse**](GetFeatureSkuResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload


## getFeatures

> GetFeaturesResponse getFeatures(marketplaceId)



Returns a list of features available for Multi-Channel Fulfillment orders in the marketplace you specify, and whether the seller for which you made the call is enrolled for each feature.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let marketplaceId = "marketplaceId_example"; // String | The marketplace for which to return the list of features.
apiInstance.getFeatures(marketplaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace for which to return the list of features. | 

### Return type

[**GetFeaturesResponse**](GetFeaturesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload


## getFulfillmentOrder

> GetFulfillmentOrderResponse getFulfillmentOrder(sellerFulfillmentOrderId)



Returns the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.
apiInstance.getFulfillmentOrder(sellerFulfillmentOrderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. | 

### Return type

[**GetFulfillmentOrderResponse**](GetFulfillmentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload


## getFulfillmentPreview

> GetFulfillmentPreviewResponse getFulfillmentPreview(body)



Returns a list of fulfillment order previews based on shipping criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let body = new SellingPartnerApisForFulfillmentOutbound.GetFulfillmentPreviewRequest(); // GetFulfillmentPreviewRequest | GetFulfillmentPreviewRequest parameter
apiInstance.getFulfillmentPreview(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetFulfillmentPreviewRequest**](GetFulfillmentPreviewRequest.md)| GetFulfillmentPreviewRequest parameter | 

### Return type

[**GetFulfillmentPreviewResponse**](GetFulfillmentPreviewResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, payload


## getPackageTrackingDetails

> GetPackageTrackingDetailsResponse getPackageTrackingDetails(packageNumber)



Returns delivery tracking information for a package in an outbound shipment for a Multi-Channel Fulfillment order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let packageNumber = 56; // Number | The unencrypted package identifier returned by the `getFulfillmentOrder` operation.
apiInstance.getPackageTrackingDetails(packageNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packageNumber** | **Number**| The unencrypted package identifier returned by the &#x60;getFulfillmentOrder&#x60; operation. | 

### Return type

[**GetPackageTrackingDetailsResponse**](GetPackageTrackingDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload


## listAllFulfillmentOrders

> ListAllFulfillmentOrdersResponse listAllFulfillmentOrders(opts)



Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the next token parameter.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let opts = {
  'queryStartDate': new Date("2013-10-20T19:20:30+01:00"), // Date | A date used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order.
  'nextToken': "nextToken_example" // String | A string token returned in the response to your previous request.
};
apiInstance.listAllFulfillmentOrders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryStartDate** | **Date**| A date used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order. | [optional] 
 **nextToken** | **String**| A string token returned in the response to your previous request. | [optional] 

### Return type

[**ListAllFulfillmentOrdersResponse**](ListAllFulfillmentOrdersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload


## listReturnReasonCodes

> ListReturnReasonCodesResponse listReturnReasonCodes(sellerSku, opts)



Returns a list of return reason codes for a seller SKU in a given marketplace. The parameters for this operation may contain special characters that require URL encoding. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let sellerSku = "sellerSku_example"; // String | The seller SKU for which return reason codes are required.
let opts = {
  'marketplaceId': "marketplaceId_example", // String | The marketplace for which the seller wants return reason codes.
  'sellerFulfillmentOrderId': "sellerFulfillmentOrderId_example", // String | The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes.
  'language': "language_example" // String | The language that the `TranslatedDescription` property of the `ReasonCodeDetails` response object should be translated into.
};
apiInstance.listReturnReasonCodes(sellerSku, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerSku** | **String**| The seller SKU for which return reason codes are required. | 
 **marketplaceId** | **String**| The marketplace for which the seller wants return reason codes. | [optional] 
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes. | [optional] 
 **language** | **String**| The language that the &#x60;TranslatedDescription&#x60; property of the &#x60;ReasonCodeDetails&#x60; response object should be translated into. | [optional] 

### Return type

[**ListReturnReasonCodesResponse**](ListReturnReasonCodesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload


## submitFulfillmentOrderStatusUpdate

> SubmitFulfillmentOrderStatusUpdateResponse submitFulfillmentOrderStatusUpdate(sellerFulfillmentOrderId, body)



Requests that Amazon update the status of an order in the sandbox testing environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Fulfillment Outbound Dynamic Sandbox Guide](https://developer-docs.amazon.com/sp-api/docs/fulfillment-outbound-dynamic-sandbox-guide) and [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.
let body = new SellingPartnerApisForFulfillmentOutbound.SubmitFulfillmentOrderStatusUpdateRequest(); // SubmitFulfillmentOrderStatusUpdateRequest | The identifier assigned to the item by the seller when the fulfillment order was created.
apiInstance.submitFulfillmentOrderStatusUpdate(sellerFulfillmentOrderId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. | 
 **body** | [**SubmitFulfillmentOrderStatusUpdateRequest**](SubmitFulfillmentOrderStatusUpdateRequest.md)| The identifier assigned to the item by the seller when the fulfillment order was created. | 

### Return type

[**SubmitFulfillmentOrderStatusUpdateResponse**](SubmitFulfillmentOrderStatusUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateFulfillmentOrder

> UpdateFulfillmentOrderResponse updateFulfillmentOrder(sellerFulfillmentOrderId, body)



Updates and/or requests shipment for a fulfillment order with an order hold on it.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApisForFulfillmentOutbound from 'selling_partner_apis_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
let sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.
let body = new SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderRequest(); // UpdateFulfillmentOrderRequest | UpdateFulfillmentOrderRequest parameter
apiInstance.updateFulfillmentOrder(sellerFulfillmentOrderId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. | 
 **body** | [**UpdateFulfillmentOrderRequest**](UpdateFulfillmentOrderRequest.md)| UpdateFulfillmentOrderRequest parameter | 

### Return type

[**UpdateFulfillmentOrderResponse**](UpdateFulfillmentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

