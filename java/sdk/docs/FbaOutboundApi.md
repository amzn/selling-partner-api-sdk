# FbaOutboundApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

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

<a name="cancelFulfillmentOrder"></a>
# **cancelFulfillmentOrder**
> CancelFulfillmentOrderResponse cancelFulfillmentOrder(sellerFulfillmentOrderId)



Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
String sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.
try {
    CancelFulfillmentOrderResponse result = apiInstance.cancelFulfillmentOrder(sellerFulfillmentOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#cancelFulfillmentOrder");
    e.printStackTrace();
}
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

<a name="createFulfillmentOrder"></a>
# **createFulfillmentOrder**
> CreateFulfillmentOrderResponse createFulfillmentOrder(body)



Requests that Amazon ship items from the seller&#x27;s inventory in Amazon&#x27;s fulfillment network to a destination address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
CreateFulfillmentOrderRequest body = new CreateFulfillmentOrderRequest(); // CreateFulfillmentOrderRequest | CreateFulfillmentOrderRequest parameter
try {
    CreateFulfillmentOrderResponse result = apiInstance.createFulfillmentOrder(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#createFulfillmentOrder");
    e.printStackTrace();
}
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

<a name="createFulfillmentReturn"></a>
# **createFulfillmentReturn**
> CreateFulfillmentReturnResponse createFulfillmentReturn(body, sellerFulfillmentOrderId)



Creates a fulfillment return.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
CreateFulfillmentReturnRequest body = new CreateFulfillmentReturnRequest(); // CreateFulfillmentReturnRequest | CreateFulfillmentReturnRequest parameter
String sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | An identifier assigned by the seller to the fulfillment order at the time it was created. The seller uses their own records to find the correct `SellerFulfillmentOrderId` value based on the buyer's request to return items.
try {
    CreateFulfillmentReturnResponse result = apiInstance.createFulfillmentReturn(body, sellerFulfillmentOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#createFulfillmentReturn");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFulfillmentReturnRequest**](CreateFulfillmentReturnRequest.md)| CreateFulfillmentReturnRequest parameter |
 **sellerFulfillmentOrderId** | **String**| An identifier assigned by the seller to the fulfillment order at the time it was created. The seller uses their own records to find the correct &#x60;SellerFulfillmentOrderId&#x60; value based on the buyer&#x27;s request to return items. |

### Return type

[**CreateFulfillmentReturnResponse**](CreateFulfillmentReturnResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, payload

<a name="deliveryOffers"></a>
# **deliveryOffers**
> GetDeliveryOffersResponse deliveryOffers(body)



Returns delivery options that include an estimated delivery date and offer expiration, based on criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
GetDeliveryOffersRequest body = new GetDeliveryOffersRequest(); // GetDeliveryOffersRequest | GetDeliveryOffersRequest parameter
try {
    GetDeliveryOffersResponse result = apiInstance.deliveryOffers(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#deliveryOffers");
    e.printStackTrace();
}
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

<a name="getFeatureInventory"></a>
# **getFeatureInventory**
> GetFeatureInventoryResponse getFeatureInventory(marketplaceId, featureName, nextToken, queryStartDate)



Returns a list of inventory items that are eligible for the fulfillment feature you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)..

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
String marketplaceId = "marketplaceId_example"; // String | The marketplace for which to return a list of the inventory that is eligible for the specified feature.
String featureName = "featureName_example"; // String | The name of the feature for which to return a list of eligible inventory.
String nextToken = "nextToken_example"; // String | A string token returned in the response to your previous request that is used to return the next response page. A value of null will return the first page.
OffsetDateTime queryStartDate = new OffsetDateTime(); // OffsetDateTime | A date that you can use to select inventory that has been updated since a specified date. An update is defined as any change in feature-enabled inventory availability. The date must be in the format yyyy-MM-ddTHH:mm:ss.sssZ
try {
    GetFeatureInventoryResponse result = apiInstance.getFeatureInventory(marketplaceId, featureName, nextToken, queryStartDate);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#getFeatureInventory");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace for which to return a list of the inventory that is eligible for the specified feature. |
 **featureName** | **String**| The name of the feature for which to return a list of eligible inventory. |
 **nextToken** | **String**| A string token returned in the response to your previous request that is used to return the next response page. A value of null will return the first page. | [optional]
 **queryStartDate** | **OffsetDateTime**| A date that you can use to select inventory that has been updated since a specified date. An update is defined as any change in feature-enabled inventory availability. The date must be in the format yyyy-MM-ddTHH:mm:ss.sssZ | [optional]

### Return type

[**GetFeatureInventoryResponse**](GetFeatureInventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, payload

<a name="getFeatureSKU"></a>
# **getFeatureSKU**
> GetFeatureSkuResponse getFeatureSKU(marketplaceId, featureName, sellerSku)



Returns the number of items with the sellerSKU you specify that can have orders fulfilled using the specified feature. Note that if the sellerSKU isn&#x27;t eligible, the response will contain an empty skuInfo object. The parameters for this operation may contain special characters that require URL encoding. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
String marketplaceId = "marketplaceId_example"; // String | The marketplace for which to return the count.
String featureName = "featureName_example"; // String | The name of the feature.
String sellerSku = "sellerSku_example"; // String | Used to identify an item in the given marketplace. `SellerSKU` is qualified by the seller's `SellerId`, which is included with every operation that you submit.
try {
    GetFeatureSkuResponse result = apiInstance.getFeatureSKU(marketplaceId, featureName, sellerSku);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#getFeatureSKU");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace for which to return the count. |
 **featureName** | **String**| The name of the feature. |
 **sellerSku** | **String**| Used to identify an item in the given marketplace. &#x60;SellerSKU&#x60; is qualified by the seller&#x27;s &#x60;SellerId&#x60;, which is included with every operation that you submit. |

### Return type

[**GetFeatureSkuResponse**](GetFeatureSkuResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, payload

<a name="getFeatures"></a>
# **getFeatures**
> GetFeaturesResponse getFeatures(marketplaceId)



Returns a list of features available for Multi-Channel Fulfillment orders in the marketplace you specify, and whether the seller for which you made the call is enrolled for each feature.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
String marketplaceId = "marketplaceId_example"; // String | The marketplace for which to return the list of features.
try {
    GetFeaturesResponse result = apiInstance.getFeatures(marketplaceId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#getFeatures");
    e.printStackTrace();
}
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

<a name="getFulfillmentOrder"></a>
# **getFulfillmentOrder**
> GetFulfillmentOrderResponse getFulfillmentOrder(sellerFulfillmentOrderId)



Returns the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
String sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.
try {
    GetFulfillmentOrderResponse result = apiInstance.getFulfillmentOrder(sellerFulfillmentOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#getFulfillmentOrder");
    e.printStackTrace();
}
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

<a name="getFulfillmentPreview"></a>
# **getFulfillmentPreview**
> GetFulfillmentPreviewResponse getFulfillmentPreview(body)



Returns a list of fulfillment order previews based on shipping criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
GetFulfillmentPreviewRequest body = new GetFulfillmentPreviewRequest(); // GetFulfillmentPreviewRequest | GetFulfillmentPreviewRequest parameter
try {
    GetFulfillmentPreviewResponse result = apiInstance.getFulfillmentPreview(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#getFulfillmentPreview");
    e.printStackTrace();
}
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

<a name="getPackageTrackingDetails"></a>
# **getPackageTrackingDetails**
> GetPackageTrackingDetailsResponse getPackageTrackingDetails(packageNumber)



Returns delivery tracking information for a package in an outbound shipment for a Multi-Channel Fulfillment order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
Integer packageNumber = 56; // Integer | The unencrypted package identifier returned by the `getFulfillmentOrder` operation.
try {
    GetPackageTrackingDetailsResponse result = apiInstance.getPackageTrackingDetails(packageNumber);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#getPackageTrackingDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packageNumber** | **Integer**| The unencrypted package identifier returned by the &#x60;getFulfillmentOrder&#x60; operation. |

### Return type

[**GetPackageTrackingDetailsResponse**](GetPackageTrackingDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, payload

<a name="listAllFulfillmentOrders"></a>
# **listAllFulfillmentOrders**
> ListAllFulfillmentOrdersResponse listAllFulfillmentOrders(queryStartDate, nextToken)



Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the next token parameter.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
OffsetDateTime queryStartDate = new OffsetDateTime(); // OffsetDateTime | A date used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order.
String nextToken = "nextToken_example"; // String | A string token returned in the response to your previous request.
try {
    ListAllFulfillmentOrdersResponse result = apiInstance.listAllFulfillmentOrders(queryStartDate, nextToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#listAllFulfillmentOrders");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryStartDate** | **OffsetDateTime**| A date used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order. | [optional]
 **nextToken** | **String**| A string token returned in the response to your previous request. | [optional]

### Return type

[**ListAllFulfillmentOrdersResponse**](ListAllFulfillmentOrdersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, payload

<a name="listReturnReasonCodes"></a>
# **listReturnReasonCodes**
> ListReturnReasonCodesResponse listReturnReasonCodes(sellerSku, marketplaceId, sellerFulfillmentOrderId, language)



Returns a list of return reason codes for a seller SKU in a given marketplace. The parameters for this operation may contain special characters that require URL encoding. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
String sellerSku = "sellerSku_example"; // String | The seller SKU for which return reason codes are required.
String marketplaceId = "marketplaceId_example"; // String | The marketplace for which the seller wants return reason codes.
String sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes.
String language = "language_example"; // String | The language that the `TranslatedDescription` property of the `ReasonCodeDetails` response object should be translated into.
try {
    ListReturnReasonCodesResponse result = apiInstance.listReturnReasonCodes(sellerSku, marketplaceId, sellerFulfillmentOrderId, language);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#listReturnReasonCodes");
    e.printStackTrace();
}
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

<a name="submitFulfillmentOrderStatusUpdate"></a>
# **submitFulfillmentOrderStatusUpdate**
> SubmitFulfillmentOrderStatusUpdateResponse submitFulfillmentOrderStatusUpdate(body, sellerFulfillmentOrderId)



Requests that Amazon update the status of an order in the sandbox testing environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Fulfillment Outbound Dynamic Sandbox Guide](https://developer-docs.amazon.com/sp-api/docs/fulfillment-outbound-dynamic-sandbox-guide) and [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
SubmitFulfillmentOrderStatusUpdateRequest body = new SubmitFulfillmentOrderStatusUpdateRequest(); // SubmitFulfillmentOrderStatusUpdateRequest | The identifier assigned to the item by the seller when the fulfillment order was created.
String sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.
try {
    SubmitFulfillmentOrderStatusUpdateResponse result = apiInstance.submitFulfillmentOrderStatusUpdate(body, sellerFulfillmentOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#submitFulfillmentOrderStatusUpdate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitFulfillmentOrderStatusUpdateRequest**](SubmitFulfillmentOrderStatusUpdateRequest.md)| The identifier assigned to the item by the seller when the fulfillment order was created. |
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. |

### Return type

[**SubmitFulfillmentOrderStatusUpdateResponse**](SubmitFulfillmentOrderStatusUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFulfillmentOrder"></a>
# **updateFulfillmentOrder**
> UpdateFulfillmentOrderResponse updateFulfillmentOrder(body, sellerFulfillmentOrderId)



Updates and/or requests shipment for a fulfillment order with an order hold on it.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaOutboundApi;


FbaOutboundApi apiInstance = new FbaOutboundApi();
UpdateFulfillmentOrderRequest body = new UpdateFulfillmentOrderRequest(); // UpdateFulfillmentOrderRequest | UpdateFulfillmentOrderRequest parameter
String sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.
try {
    UpdateFulfillmentOrderResponse result = apiInstance.updateFulfillmentOrder(body, sellerFulfillmentOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaOutboundApi#updateFulfillmentOrder");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateFulfillmentOrderRequest**](UpdateFulfillmentOrderRequest.md)| UpdateFulfillmentOrderRequest parameter |
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. |

### Return type

[**UpdateFulfillmentOrderResponse**](UpdateFulfillmentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

