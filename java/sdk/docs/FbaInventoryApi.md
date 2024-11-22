# FbaInventoryApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventory**](FbaInventoryApi.md#addInventory) | **POST** /fba/inventory/v1/items/inventory | 
[**createInventoryItem**](FbaInventoryApi.md#createInventoryItem) | **POST** /fba/inventory/v1/items | 
[**deleteInventoryItem**](FbaInventoryApi.md#deleteInventoryItem) | **DELETE** /fba/inventory/v1/items/{sellerSku} | 
[**getInventorySummaries**](FbaInventoryApi.md#getInventorySummaries) | **GET** /fba/inventory/v1/summaries | 

<a name="addInventory"></a>
# **addInventory**
> AddInventoryResponse addInventory(body, xAmznIdempotencyToken)



Requests that Amazon add items to the Sandbox Inventory with desired amount of quantity in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaInventoryApi;


FbaInventoryApi apiInstance = new FbaInventoryApi();
AddInventoryRequest body = new AddInventoryRequest(); // AddInventoryRequest | List of items to add to Sandbox inventory.
String xAmznIdempotencyToken = "xAmznIdempotencyToken_example"; // String | A unique token/requestId provided with each call to ensure idempotency.
try {
    AddInventoryResponse result = apiInstance.addInventory(body, xAmznIdempotencyToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaInventoryApi#addInventory");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AddInventoryRequest**](AddInventoryRequest.md)| List of items to add to Sandbox inventory. |
 **xAmznIdempotencyToken** | **String**| A unique token/requestId provided with each call to ensure idempotency. |

### Return type

[**AddInventoryResponse**](AddInventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInventoryItem"></a>
# **createInventoryItem**
> CreateInventoryItemResponse createInventoryItem(body)



Requests that Amazon create product-details in the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaInventoryApi;


FbaInventoryApi apiInstance = new FbaInventoryApi();
CreateInventoryItemRequest body = new CreateInventoryItemRequest(); // CreateInventoryItemRequest | CreateInventoryItem Request Body Parameter.
try {
    CreateInventoryItemResponse result = apiInstance.createInventoryItem(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaInventoryApi#createInventoryItem");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateInventoryItemRequest**](CreateInventoryItemRequest.md)| CreateInventoryItem Request Body Parameter. |

### Return type

[**CreateInventoryItemResponse**](CreateInventoryItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventoryItem"></a>
# **deleteInventoryItem**
> DeleteInventoryItemResponse deleteInventoryItem(sellerSku, marketplaceId)



Requests that Amazon Deletes an item from the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaInventoryApi;


FbaInventoryApi apiInstance = new FbaInventoryApi();
String sellerSku = "sellerSku_example"; // String | A single seller SKU used for querying the specified seller SKU inventory summaries.
String marketplaceId = "marketplaceId_example"; // String | The marketplace ID for the marketplace for which the sellerSku is to be deleted.
try {
    DeleteInventoryItemResponse result = apiInstance.deleteInventoryItem(sellerSku, marketplaceId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaInventoryApi#deleteInventoryItem");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerSku** | **String**| A single seller SKU used for querying the specified seller SKU inventory summaries. |
 **marketplaceId** | **String**| The marketplace ID for the marketplace for which the sellerSku is to be deleted. |

### Return type

[**DeleteInventoryItemResponse**](DeleteInventoryItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventorySummaries"></a>
# **getInventorySummaries**
> GetInventorySummariesResponse getInventorySummaries(granularityType, granularityId, marketplaceIds, details, startDateTime, sellerSkus, sellerSku, nextToken)



Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime, sellerSkus and sellerSku parameters:  - All inventory summaries with available details are returned when the startDateTime, sellerSkus and sellerSku parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus and sellerSku parameters are ignored. Important: To avoid errors, use both startDateTime and nextToken to get the next page of inventory summaries that have changed after the date and time specified. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus. The sellerSku parameter is ignored. - When the sellerSku parameter is provided, the operation returns inventory summaries for only the specified sellerSku.  Note: The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  Usage Plan:  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FbaInventoryApi;


FbaInventoryApi apiInstance = new FbaInventoryApi();
String granularityType = "granularityType_example"; // String | The granularity type for the inventory aggregation level.
String granularityId = "granularityId_example"; // String | The granularity ID for the inventory aggregation level.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | The marketplace ID for the marketplace for which to return inventory summaries.
Boolean details = false; // Boolean | true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
OffsetDateTime startDateTime = new OffsetDateTime(); // OffsetDateTime | A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
List<String> sellerSkus = Arrays.asList("sellerSkus_example"); // List<String> | A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
String sellerSku = "sellerSku_example"; // String | A single seller SKU used for querying the specified seller SKU inventory summaries.
String nextToken = "nextToken_example"; // String | String token returned in the response of your previous request. The string token will expire 30 seconds after being created.
try {
    GetInventorySummariesResponse result = apiInstance.getInventorySummaries(granularityType, granularityId, marketplaceIds, details, startDateTime, sellerSkus, sellerSku, nextToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FbaInventoryApi#getInventorySummaries");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **granularityType** | **String**| The granularity type for the inventory aggregation level. | [enum: Marketplace]
 **granularityId** | **String**| The granularity ID for the inventory aggregation level. |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| The marketplace ID for the marketplace for which to return inventory summaries. |
 **details** | **Boolean**| true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value). | [optional] [default to false]
 **startDateTime** | **OffsetDateTime**| A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected. | [optional]
 **sellerSkus** | [**List&lt;String&gt;**](String.md)| A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs. | [optional]
 **sellerSku** | **String**| A single seller SKU used for querying the specified seller SKU inventory summaries. | [optional]
 **nextToken** | **String**| String token returned in the response of your previous request. The string token will expire 30 seconds after being created. | [optional]

### Return type

[**GetInventorySummariesResponse**](GetInventorySummariesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

