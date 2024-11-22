# AwdApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInboundShipment**](AwdApi.md#getInboundShipment) | **GET** /awd/2024-05-09/inboundShipments/{shipmentId} | 
[**listInboundShipments**](AwdApi.md#listInboundShipments) | **GET** /awd/2024-05-09/inboundShipments | 
[**listInventory**](AwdApi.md#listInventory) | **GET** /awd/2024-05-09/inventory | 

<a name="getInboundShipment"></a>
# **getInboundShipment**
> InboundShipment getInboundShipment(shipmentId, skuQuantities)



Retrieves an AWD inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.AwdApi;


AwdApi apiInstance = new AwdApi();
String shipmentId = "shipmentId_example"; // String | ID for the shipment. A shipment contains the cases being inbounded.
String skuQuantities = "skuQuantities_example"; // String | If equal to `SHOW`, the response includes the shipment SKU quantity details.  Defaults to `HIDE`, in which case the response does not contain SKU quantities
try {
    InboundShipment result = apiInstance.getInboundShipment(shipmentId, skuQuantities);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AwdApi#getInboundShipment");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| ID for the shipment. A shipment contains the cases being inbounded. |
 **skuQuantities** | **String**| If equal to &#x60;SHOW&#x60;, the response includes the shipment SKU quantity details.  Defaults to &#x60;HIDE&#x60;, in which case the response does not contain SKU quantities | [optional] [enum: SHOW, HIDE]

### Return type

[**InboundShipment**](InboundShipment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listInboundShipments"></a>
# **listInboundShipments**
> ShipmentListing listInboundShipments(sortBy, sortOrder, shipmentStatus, updatedAfter, updatedBefore, maxResults, nextToken)



Retrieves a summary of all the inbound AWD shipments associated with a merchant, with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.AwdApi;


AwdApi apiInstance = new AwdApi();
String sortBy = "sortBy_example"; // String | Field to sort results by. By default, the response will be sorted by UPDATED_AT.
String sortOrder = "sortOrder_example"; // String | Sort the response in ASCENDING or DESCENDING order. By default, the response will be sorted in DESCENDING order.
String shipmentStatus = "shipmentStatus_example"; // String | Filter by inbound shipment status.
OffsetDateTime updatedAfter = new OffsetDateTime(); // OffsetDateTime | List the inbound shipments that were updated after a certain time (inclusive). The date must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime updatedBefore = new OffsetDateTime(); // OffsetDateTime | List the inbound shipments that were updated before a certain time (inclusive). The date must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
Integer maxResults = 25; // Integer | Maximum number of results to return.
String nextToken = "nextToken_example"; // String | Token to retrieve the next set of paginated results.
try {
    ShipmentListing result = apiInstance.listInboundShipments(sortBy, sortOrder, shipmentStatus, updatedAfter, updatedBefore, maxResults, nextToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AwdApi#listInboundShipments");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **String**| Field to sort results by. By default, the response will be sorted by UPDATED_AT. | [optional] [enum: UPDATED_AT, CREATED_AT]
 **sortOrder** | **String**| Sort the response in ASCENDING or DESCENDING order. By default, the response will be sorted in DESCENDING order. | [optional] [enum: ASCENDING, DESCENDING]
 **shipmentStatus** | **String**| Filter by inbound shipment status. | [optional] [enum: CREATED, SHIPPED, IN_TRANSIT, RECEIVING, DELIVERED, CLOSED, CANCELLED]
 **updatedAfter** | **OffsetDateTime**| List the inbound shipments that were updated after a certain time (inclusive). The date must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **updatedBefore** | **OffsetDateTime**| List the inbound shipments that were updated before a certain time (inclusive). The date must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **maxResults** | **Integer**| Maximum number of results to return. | [optional] [default to 25] [enum: ]
 **nextToken** | **String**| Token to retrieve the next set of paginated results. | [optional]

### Return type

[**ShipmentListing**](ShipmentListing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listInventory"></a>
# **listInventory**
> InventoryListing listInventory(sku, sortOrder, details, nextToken, maxResults)



Lists AWD inventory associated with a merchant with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.AwdApi;


AwdApi apiInstance = new AwdApi();
String sku = "sku_example"; // String | Filter by seller or merchant SKU for the item.
String sortOrder = "sortOrder_example"; // String | Sort the response in `ASCENDING` or `DESCENDING` order.
String details = "details_example"; // String | Set to `SHOW` to return summaries with additional inventory details. Defaults to `HIDE,` which returns only inventory summary totals.
String nextToken = "nextToken_example"; // String | Token to retrieve the next set of paginated results.
Integer maxResults = 25; // Integer | Maximum number of results to return.
try {
    InventoryListing result = apiInstance.listInventory(sku, sortOrder, details, nextToken, maxResults);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AwdApi#listInventory");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**| Filter by seller or merchant SKU for the item. | [optional]
 **sortOrder** | **String**| Sort the response in &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60; order. | [optional] [enum: ASCENDING, DESCENDING]
 **details** | **String**| Set to &#x60;SHOW&#x60; to return summaries with additional inventory details. Defaults to &#x60;HIDE,&#x60; which returns only inventory summary totals. | [optional] [enum: SHOW, HIDE]
 **nextToken** | **String**| Token to retrieve the next set of paginated results. | [optional]
 **maxResults** | **Integer**| Maximum number of results to return. | [optional] [default to 25] [enum: ]

### Return type

[**InventoryListing**](InventoryListing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

