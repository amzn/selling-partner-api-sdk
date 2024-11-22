# VendorShippingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPackingSlip**](VendorShippingApi.md#getPackingSlip) | **GET** /vendor/directFulfillment/shipping/2021-12-28/packingSlips/{purchaseOrderNumber} | 
[**getPackingSlips**](VendorShippingApi.md#getPackingSlips) | **GET** /vendor/directFulfillment/shipping/2021-12-28/packingSlips | 
[**submitShipmentConfirmations**](VendorShippingApi.md#submitShipmentConfirmations) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shipmentConfirmations | 
[**submitShipmentStatusUpdates**](VendorShippingApi.md#submitShipmentStatusUpdates) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shipmentStatusUpdates | 

<a name="getPackingSlip"></a>
# **getPackingSlip**
> PackingSlip getPackingSlip(purchaseOrderNumber)



Returns a packing slip based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShippingApi;


VendorShippingApi apiInstance = new VendorShippingApi();
String purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The purchaseOrderNumber for the packing slip you want.
try {
    PackingSlip result = apiInstance.getPackingSlip(purchaseOrderNumber);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShippingApi#getPackingSlip");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The purchaseOrderNumber for the packing slip you want. |

### Return type

[**PackingSlip**](PackingSlip.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingSlips"></a>
# **getPackingSlips**
> PackingSlipList getPackingSlips(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken)



Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShippingApi;


VendorShippingApi apiInstance = new VendorShippingApi();
OffsetDateTime createdAfter = new OffsetDateTime(); // OffsetDateTime | Packing slips that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
OffsetDateTime createdBefore = new OffsetDateTime(); // OffsetDateTime | Packing slips that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
String shipFromPartyId = "shipFromPartyId_example"; // String | The vendor warehouseId for order fulfillment. If not specified the result will contain orders for all warehouses.
Integer limit = 56; // Integer | The limit to the number of records returned
String sortOrder = "ASC"; // String | Sort ASC or DESC by packing slip creation date.
String nextToken = "nextToken_example"; // String | Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call.
try {
    PackingSlipList result = apiInstance.getPackingSlips(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShippingApi#getPackingSlips");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | **OffsetDateTime**| Packing slips that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. |
 **createdBefore** | **OffsetDateTime**| Packing slips that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. |
 **shipFromPartyId** | **String**| The vendor warehouseId for order fulfillment. If not specified the result will contain orders for all warehouses. | [optional]
 **limit** | **Integer**| The limit to the number of records returned | [optional] [enum: ]
 **sortOrder** | **String**| Sort ASC or DESC by packing slip creation date. | [optional] [default to ASC] [enum: ASC, DESC]
 **nextToken** | **String**| Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call. | [optional]

### Return type

[**PackingSlipList**](PackingSlipList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="submitShipmentConfirmations"></a>
# **submitShipmentConfirmations**
> TransactionReference submitShipmentConfirmations(body)



Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShippingApi;


VendorShippingApi apiInstance = new VendorShippingApi();
SubmitShipmentConfirmationsRequest body = new SubmitShipmentConfirmationsRequest(); // SubmitShipmentConfirmationsRequest | Request body containing the shipment confirmations data.
try {
    TransactionReference result = apiInstance.submitShipmentConfirmations(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShippingApi#submitShipmentConfirmations");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShipmentConfirmationsRequest**](SubmitShipmentConfirmationsRequest.md)| Request body containing the shipment confirmations data. |

### Return type

[**TransactionReference**](TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitShipmentStatusUpdates"></a>
# **submitShipmentStatusUpdates**
> TransactionReference submitShipmentStatusUpdates(body)



This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShippingApi;


VendorShippingApi apiInstance = new VendorShippingApi();
SubmitShipmentStatusUpdatesRequest body = new SubmitShipmentStatusUpdatesRequest(); // SubmitShipmentStatusUpdatesRequest | Request body containing the shipment status update data.
try {
    TransactionReference result = apiInstance.submitShipmentStatusUpdates(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShippingApi#submitShipmentStatusUpdates");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShipmentStatusUpdatesRequest**](SubmitShipmentStatusUpdatesRequest.md)| Request body containing the shipment status update data. |

### Return type

[**TransactionReference**](TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

