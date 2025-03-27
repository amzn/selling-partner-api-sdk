# SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoicesApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerInvoice**](CustomerInvoicesApi.md#getCustomerInvoice) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices/{purchaseOrderNumber} | getCustomerInvoice
[**getCustomerInvoices**](CustomerInvoicesApi.md#getCustomerInvoices) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices | getCustomerInvoices



## getCustomerInvoice

> CustomerInvoice getCustomerInvoice(purchaseOrderNumber)

getCustomerInvoice

Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoicesApi();
let purchaseOrderNumber = "purchaseOrderNumber_example"; // String | Purchase order number of the shipment for which to return the invoice.
apiInstance.getCustomerInvoice(purchaseOrderNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## getCustomerInvoices

> CustomerInvoiceList getCustomerInvoices(createdAfter, createdBefore, opts)

getCustomerInvoices

Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoicesApi();
let createdAfter = new Date("2013-10-20T19:20:30+01:00"); // Date | Orders that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
let createdBefore = new Date("2013-10-20T19:20:30+01:00"); // Date | Orders that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
let opts = {
  'shipFromPartyId': "shipFromPartyId_example", // String | The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
  'limit': 56, // Number | The limit to the number of records returned
  'sortOrder': "sortOrder_example", // String | Sort ASC or DESC by order creation date.
  'nextToken': "nextToken_example" // String | Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
};
apiInstance.getCustomerInvoices(createdAfter, createdBefore, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | **Date**| Orders that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | 
 **createdBefore** | **Date**| Orders that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | 
 **shipFromPartyId** | **String**| The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. | [optional] 
 **limit** | **Number**| The limit to the number of records returned | [optional] 
 **sortOrder** | **String**| Sort ASC or DESC by order creation date. | [optional] 
 **nextToken** | **String**| Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call. | [optional] 

### Return type

[**CustomerInvoiceList**](CustomerInvoiceList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload

