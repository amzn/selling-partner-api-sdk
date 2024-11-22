# CustomerInvoicesApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerInvoice**](CustomerInvoicesApi.md#getCustomerInvoice) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices/{purchaseOrderNumber} | 
[**getCustomerInvoices**](CustomerInvoicesApi.md#getCustomerInvoices) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices | 

<a name="getCustomerInvoice"></a>
# **getCustomerInvoice**
> CustomerInvoice getCustomerInvoice(purchaseOrderNumber)



Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.CustomerInvoicesApi;


CustomerInvoicesApi apiInstance = new CustomerInvoicesApi();
String purchaseOrderNumber = "purchaseOrderNumber_example"; // String | Purchase order number of the shipment for which to return the invoice.
try {
    CustomerInvoice result = apiInstance.getCustomerInvoice(purchaseOrderNumber);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CustomerInvoicesApi#getCustomerInvoice");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| Purchase order number of the shipment for which to return the invoice. |

### Return type

[**CustomerInvoice**](CustomerInvoice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerInvoices"></a>
# **getCustomerInvoices**
> CustomerInvoiceList getCustomerInvoices(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken)



Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.CustomerInvoicesApi;


CustomerInvoicesApi apiInstance = new CustomerInvoicesApi();
OffsetDateTime createdAfter = new OffsetDateTime(); // OffsetDateTime | Orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
OffsetDateTime createdBefore = new OffsetDateTime(); // OffsetDateTime | Orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
String shipFromPartyId = "shipFromPartyId_example"; // String | The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
Integer limit = 56; // Integer | The limit to the number of records returned
String sortOrder = "sortOrder_example"; // String | Sort ASC or DESC by order creation date.
String nextToken = "nextToken_example"; // String | Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
try {
    CustomerInvoiceList result = apiInstance.getCustomerInvoices(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CustomerInvoicesApi#getCustomerInvoices");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | **OffsetDateTime**| Orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. |
 **createdBefore** | **OffsetDateTime**| Orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. |
 **shipFromPartyId** | **String**| The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. | [optional]
 **limit** | **Integer**| The limit to the number of records returned | [optional] [enum: ]
 **sortOrder** | **String**| Sort ASC or DESC by order creation date. | [optional] [enum: ASC, DESC]
 **nextToken** | **String**| Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call. | [optional]

### Return type

[**CustomerInvoiceList**](CustomerInvoiceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, payload

