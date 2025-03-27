# SellingPartnerApiForFbaInventory.FbaInventoryApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventory**](FbaInventoryApi.md#addInventory) | **POST** /fba/inventory/v1/items/inventory | 
[**createInventoryItem**](FbaInventoryApi.md#createInventoryItem) | **POST** /fba/inventory/v1/items | 
[**deleteInventoryItem**](FbaInventoryApi.md#deleteInventoryItem) | **DELETE** /fba/inventory/v1/items/{sellerSku} | 
[**getInventorySummaries**](FbaInventoryApi.md#getInventorySummaries) | **GET** /fba/inventory/v1/summaries | 



## addInventory

> AddInventoryResponse addInventory(xAmznIdempotencyToken, addInventoryRequestBody)



Requests that Amazon add items to the Sandbox Inventory with desired amount of quantity in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example

```javascript
import SellingPartnerApiForFbaInventory from 'selling_partner_api_for_fba_inventory';

let apiInstance = new SellingPartnerApiForFbaInventory.FbaInventoryApi();
let xAmznIdempotencyToken = "xAmznIdempotencyToken_example"; // String | A unique token/requestId provided with each call to ensure idempotency.
let addInventoryRequestBody = new SellingPartnerApiForFbaInventory.AddInventoryRequest(); // AddInventoryRequest | List of items to add to Sandbox inventory.
apiInstance.addInventory(xAmznIdempotencyToken, addInventoryRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAmznIdempotencyToken** | **String**| A unique token/requestId provided with each call to ensure idempotency. | 
 **addInventoryRequestBody** | [**AddInventoryRequest**](AddInventoryRequest.md)| List of items to add to Sandbox inventory. | 

### Return type

[**AddInventoryResponse**](AddInventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createInventoryItem

> CreateInventoryItemResponse createInventoryItem(createInventoryItemRequestBody)



Requests that Amazon create product-details in the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example

```javascript
import SellingPartnerApiForFbaInventory from 'selling_partner_api_for_fba_inventory';

let apiInstance = new SellingPartnerApiForFbaInventory.FbaInventoryApi();
let createInventoryItemRequestBody = new SellingPartnerApiForFbaInventory.CreateInventoryItemRequest(); // CreateInventoryItemRequest | CreateInventoryItem Request Body Parameter.
apiInstance.createInventoryItem(createInventoryItemRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInventoryItemRequestBody** | [**CreateInventoryItemRequest**](CreateInventoryItemRequest.md)| CreateInventoryItem Request Body Parameter. | 

### Return type

[**CreateInventoryItemResponse**](CreateInventoryItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteInventoryItem

> DeleteInventoryItemResponse deleteInventoryItem(sellerSku, marketplaceId)



Requests that Amazon Deletes an item from the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example

```javascript
import SellingPartnerApiForFbaInventory from 'selling_partner_api_for_fba_inventory';

let apiInstance = new SellingPartnerApiForFbaInventory.FbaInventoryApi();
let sellerSku = "sellerSku_example"; // String | A single seller SKU used for querying the specified seller SKU inventory summaries.
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID for the marketplace for which the sellerSku is to be deleted.
apiInstance.deleteInventoryItem(sellerSku, marketplaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## getInventorySummaries

> GetInventorySummariesResponse getInventorySummaries(granularityType, granularityId, marketplaceIds, opts)



Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime, sellerSkus and sellerSku parameters:  - All inventory summaries with available details are returned when the startDateTime, sellerSkus and sellerSku parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus and sellerSku parameters are ignored. Important: To avoid errors, use both startDateTime and nextToken to get the next page of inventory summaries that have changed after the date and time specified. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus. The sellerSku parameter is ignored. - When the sellerSku parameter is provided, the operation returns inventory summaries for only the specified sellerSku.  Note: The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  Usage Plan:  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForFbaInventory from 'selling_partner_api_for_fba_inventory';

let apiInstance = new SellingPartnerApiForFbaInventory.FbaInventoryApi();
let granularityType = "granularityType_example"; // String | The granularity type for the inventory aggregation level.
let granularityId = "granularityId_example"; // String | The granularity ID for the inventory aggregation level.
let marketplaceIds = ["null"]; // [String] | The marketplace ID for the marketplace for which to return inventory summaries.
let opts = {
  'details': false, // Boolean | true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
  'startDateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
  'sellerSkus': ["null"], // [String] | A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
  'sellerSku': "sellerSku_example", // String | A single seller SKU used for querying the specified seller SKU inventory summaries.
  'nextToken': "nextToken_example" // String | String token returned in the response of your previous request. The string token will expire 30 seconds after being created.
};
apiInstance.getInventorySummaries(granularityType, granularityId, marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **granularityType** | **String**| The granularity type for the inventory aggregation level. | 
 **granularityId** | **String**| The granularity ID for the inventory aggregation level. | 
 **marketplaceIds** | [**[String]**](String.md)| The marketplace ID for the marketplace for which to return inventory summaries. | 
 **details** | **Boolean**| true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value). | [optional] [default to false]
 **startDateTime** | **Date**| A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected. | [optional] 
 **sellerSkus** | [**[String]**](String.md)| A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs. | [optional] 
 **sellerSku** | **String**| A single seller SKU used for querying the specified seller SKU inventory summaries. | [optional] 
 **nextToken** | **String**| String token returned in the response of your previous request. The string token will expire 30 seconds after being created. | [optional] 

### Return type

[**GetInventorySummariesResponse**](GetInventorySummariesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

