# SellingPartnerApiForDirectFulfillmentOrders.VendorOrdersApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrder**](VendorOrdersApi.md#getOrder) | **GET** /vendor/directFulfillment/orders/2021-12-28/purchaseOrders/{purchaseOrderNumber} | 
[**getOrders**](VendorOrdersApi.md#getOrders) | **GET** /vendor/directFulfillment/orders/2021-12-28/purchaseOrders | 
[**submitAcknowledgement**](VendorOrdersApi.md#submitAcknowledgement) | **POST** /vendor/directFulfillment/orders/2021-12-28/acknowledgements | 



## getOrder

> Order getOrder(purchaseOrderNumber)



Returns purchase order information for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentOrders from 'selling_partner_api_for_direct_fulfillment_orders';

let apiInstance = new SellingPartnerApiForDirectFulfillmentOrders.VendorOrdersApi();
let purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The order identifier for the purchase order that you want. Formatting Notes: alpha-numeric code.
apiInstance.getOrder(purchaseOrderNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The order identifier for the purchase order that you want. Formatting Notes: alpha-numeric code. | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrders

> OrderList getOrders(createdAfter, createdBefore, opts)



Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentOrders from 'selling_partner_api_for_direct_fulfillment_orders';

let apiInstance = new SellingPartnerApiForDirectFulfillmentOrders.VendorOrdersApi();
let createdAfter = new Date("2013-10-20T19:20:30+01:00"); // Date | Purchase orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
let createdBefore = new Date("2013-10-20T19:20:30+01:00"); // Date | Purchase orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
let opts = {
  'shipFromPartyId': "shipFromPartyId_example", // String | The vendor warehouse identifier for the fulfillment warehouse. If not specified, the result will contain orders for all warehouses.
  'status': "status_example", // String | Returns only the purchase orders that match the specified status. If not specified, the result will contain orders that match any status.
  'limit': 789, // Number | The limit to the number of purchase orders returned.
  'sortOrder': "sortOrder_example", // String | Sort the list in ascending or descending order by order creation date.
  'nextToken': "nextToken_example", // String | Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
  'includeDetails': "'true'" // Boolean | When true, returns the complete purchase order details. Otherwise, only purchase order numbers are returned.
};
apiInstance.getOrders(createdAfter, createdBefore, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | **Date**| Purchase orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. | 
 **createdBefore** | **Date**| Purchase orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. | 
 **shipFromPartyId** | **String**| The vendor warehouse identifier for the fulfillment warehouse. If not specified, the result will contain orders for all warehouses. | [optional] 
 **status** | **String**| Returns only the purchase orders that match the specified status. If not specified, the result will contain orders that match any status. | [optional] 
 **limit** | **Number**| The limit to the number of purchase orders returned. | [optional] 
 **sortOrder** | **String**| Sort the list in ascending or descending order by order creation date. | [optional] 
 **nextToken** | **String**| Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call. | [optional] 
 **includeDetails** | **Boolean**| When true, returns the complete purchase order details. Otherwise, only purchase order numbers are returned. | [optional] [default to &#39;true&#39;]

### Return type

[**OrderList**](OrderList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, pagination, orders


## submitAcknowledgement

> TransactionId submitAcknowledgement(body)



Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentOrders from 'selling_partner_api_for_direct_fulfillment_orders';

let apiInstance = new SellingPartnerApiForDirectFulfillmentOrders.VendorOrdersApi();
let body = new SellingPartnerApiForDirectFulfillmentOrders.SubmitAcknowledgementRequest(); // SubmitAcknowledgementRequest | The request body containing the acknowledgement to an order
apiInstance.submitAcknowledgement(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitAcknowledgementRequest**](SubmitAcknowledgementRequest.md)| The request body containing the acknowledgement to an order | 

### Return type

[**TransactionId**](TransactionId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

