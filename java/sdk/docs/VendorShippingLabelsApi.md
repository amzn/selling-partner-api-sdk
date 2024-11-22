# VendorShippingLabelsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShippingLabels**](VendorShippingLabelsApi.md#createShippingLabels) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | 
[**getShippingLabel**](VendorShippingLabelsApi.md#getShippingLabel) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | 
[**getShippingLabels**](VendorShippingLabelsApi.md#getShippingLabels) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | 
[**submitShippingLabelRequest**](VendorShippingLabelsApi.md#submitShippingLabelRequest) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | 

<a name="createShippingLabels"></a>
# **createShippingLabels**
> ShippingLabel createShippingLabels(body, purchaseOrderNumber)



Creates shipping labels for a purchase order and returns the labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShippingLabelsApi;


VendorShippingLabelsApi apiInstance = new VendorShippingLabelsApi();
CreateShippingLabelsRequest body = new CreateShippingLabelsRequest(); // CreateShippingLabelsRequest | The request payload containing parameters for creating shipping labels.
String purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The purchase order number for which you want to return the shipping labels. It should be the same purchaseOrderNumber as received in the order.
try {
    ShippingLabel result = apiInstance.createShippingLabels(body, purchaseOrderNumber);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShippingLabelsApi#createShippingLabels");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateShippingLabelsRequest**](CreateShippingLabelsRequest.md)| The request payload containing parameters for creating shipping labels. |
 **purchaseOrderNumber** | **String**| The purchase order number for which you want to return the shipping labels. It should be the same purchaseOrderNumber as received in the order. |

### Return type

[**ShippingLabel**](ShippingLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippingLabel"></a>
# **getShippingLabel**
> ShippingLabel getShippingLabel(purchaseOrderNumber)



Returns a shipping label for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShippingLabelsApi;


VendorShippingLabelsApi apiInstance = new VendorShippingLabelsApi();
String purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The purchase order number for which you want to return the shipping label and should be the same purchaseOrderNumber as received in the order.
try {
    ShippingLabel result = apiInstance.getShippingLabel(purchaseOrderNumber);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShippingLabelsApi#getShippingLabel");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The purchase order number for which you want to return the shipping label and should be the same purchaseOrderNumber as received in the order. |

### Return type

[**ShippingLabel**](ShippingLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShippingLabels"></a>
# **getShippingLabels**
> ShippingLabelList getShippingLabels(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken)



Returns a list of shipping labels created during the time frame that you specify. You define that time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShippingLabelsApi;


VendorShippingLabelsApi apiInstance = new VendorShippingLabelsApi();
OffsetDateTime createdAfter = new OffsetDateTime(); // OffsetDateTime | Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
OffsetDateTime createdBefore = new OffsetDateTime(); // OffsetDateTime | Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
String shipFromPartyId = "shipFromPartyId_example"; // String | The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
Integer limit = 56; // Integer | The limit to the number of records returned.
String sortOrder = "ASC"; // String | Sort ASC or DESC by order creation date.
String nextToken = "nextToken_example"; // String | Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
try {
    ShippingLabelList result = apiInstance.getShippingLabels(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShippingLabelsApi#getShippingLabels");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | **OffsetDateTime**| Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. |
 **createdBefore** | **OffsetDateTime**| Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. |
 **shipFromPartyId** | **String**| The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. | [optional]
 **limit** | **Integer**| The limit to the number of records returned. | [optional] [enum: ]
 **sortOrder** | **String**| Sort ASC or DESC by order creation date. | [optional] [default to ASC] [enum: ASC, DESC]
 **nextToken** | **String**| Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call. | [optional]

### Return type

[**ShippingLabelList**](ShippingLabelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, pagination, shippingLabels

<a name="submitShippingLabelRequest"></a>
# **submitShippingLabelRequest**
> TransactionReference submitShippingLabelRequest(body)



Creates a shipping label for a purchase order and returns a transactionId for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShippingLabelsApi;


VendorShippingLabelsApi apiInstance = new VendorShippingLabelsApi();
SubmitShippingLabelsRequest body = new SubmitShippingLabelsRequest(); // SubmitShippingLabelsRequest | Request body containing the shipping labels data.
try {
    TransactionReference result = apiInstance.submitShippingLabelRequest(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShippingLabelsApi#submitShippingLabelRequest");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShippingLabelsRequest**](SubmitShippingLabelsRequest.md)| Request body containing the shipping labels data. |

### Return type

[**TransactionReference**](TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

