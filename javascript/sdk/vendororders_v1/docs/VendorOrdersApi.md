# SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPurchaseOrder**](VendorOrdersApi.md#getPurchaseOrder) | **GET** /vendor/orders/v1/purchaseOrders/{purchaseOrderNumber} | 
[**getPurchaseOrders**](VendorOrdersApi.md#getPurchaseOrders) | **GET** /vendor/orders/v1/purchaseOrders | 
[**getPurchaseOrdersStatus**](VendorOrdersApi.md#getPurchaseOrdersStatus) | **GET** /vendor/orders/v1/purchaseOrdersStatus | 
[**submitAcknowledgement**](VendorOrdersApi.md#submitAcknowledgement) | **POST** /vendor/orders/v1/acknowledgements | 



## getPurchaseOrder

> GetPurchaseOrderResponse getPurchaseOrder(purchaseOrderNumber)



Returns a purchase order based on the &#x60;purchaseOrderNumber&#x60; value that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForRetailProcurementOrders from 'selling_partner_api_for_retail_procurement_orders';

let apiInstance = new SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi();
let purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The purchase order identifier for the order that you want. Formatting Notes: 8-character alpha-numeric code.
apiInstance.getPurchaseOrder(purchaseOrderNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The purchase order identifier for the order that you want. Formatting Notes: 8-character alpha-numeric code. | 

### Return type

[**GetPurchaseOrderResponse**](GetPurchaseOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPurchaseOrders

> GetPurchaseOrdersResponse getPurchaseOrders(opts)



Returns a list of purchase orders created or changed during the time frame that you specify. You define the time frame using the &#x60;createdAfter&#x60;, &#x60;createdBefore&#x60;, &#x60;changedAfter&#x60; and &#x60;changedBefore&#x60; parameters. The date range to search must not be more than 7 days. You can choose to get only the purchase order numbers by setting &#x60;includeDetails&#x60; to false. You can then use the &#x60;getPurchaseOrder&#x60; operation to receive details for a specific purchase order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForRetailProcurementOrders from 'selling_partner_api_for_retail_procurement_orders';

let apiInstance = new SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi();
let opts = {
  'limit': 789, // Number | The limit to the number of records returned. Default value is 100 records.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Purchase orders that became available after this time will be included in the result. Must be in ISO-8601 date/time format.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Purchase orders that became available before this time will be included in the result. Must be in ISO-8601 date/time format.
  'sortOrder': "sortOrder_example", // String | Sort in ascending or descending order by purchase order creation date.
  'nextToken': "nextToken_example", // String | Used for pagination when there is more purchase orders than the specified result size limit. The token value is returned in the previous API call
  'includeDetails': "includeDetails_example", // Boolean | When true, returns purchase orders with complete details. Otherwise, only purchase order numbers are returned. Default value is true.
  'changedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Purchase orders that changed after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
  'changedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Purchase orders that changed before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
  'poItemState': "poItemState_example", // String | Current state of the purchase order item. If this value is Cancelled, this API will return purchase orders which have one or more items cancelled by Amazon with updated item quantity as zero.
  'isPOChanged': "isPOChanged_example", // Boolean | When true, returns purchase orders which were modified after the order was placed. Vendors are required to pull the changed purchase order and fulfill the updated purchase order and not the original one. Default value is false.
  'purchaseOrderState': "purchaseOrderState_example", // String | Filters purchase orders based on the purchase order state.
  'orderingVendorCode': "orderingVendorCode_example" // String | Filters purchase orders based on the specified ordering vendor code. This value should be same as 'sellingParty.partyId' in the purchase order. If not included in the filter, all purchase orders for all of the vendor codes that exist in the vendor group used to authorize the API client application are returned.
};
apiInstance.getPurchaseOrders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The limit to the number of records returned. Default value is 100 records. | [optional] 
 **createdAfter** | **Date**| Purchase orders that became available after this time will be included in the result. Must be in ISO-8601 date/time format. | [optional] 
 **createdBefore** | **Date**| Purchase orders that became available before this time will be included in the result. Must be in ISO-8601 date/time format. | [optional] 
 **sortOrder** | **String**| Sort in ascending or descending order by purchase order creation date. | [optional] 
 **nextToken** | **String**| Used for pagination when there is more purchase orders than the specified result size limit. The token value is returned in the previous API call | [optional] 
 **includeDetails** | **Boolean**| When true, returns purchase orders with complete details. Otherwise, only purchase order numbers are returned. Default value is true. | [optional] 
 **changedAfter** | **Date**| Purchase orders that changed after this timestamp will be included in the result. Must be in ISO-8601 date/time format. | [optional] 
 **changedBefore** | **Date**| Purchase orders that changed before this timestamp will be included in the result. Must be in ISO-8601 date/time format. | [optional] 
 **poItemState** | **String**| Current state of the purchase order item. If this value is Cancelled, this API will return purchase orders which have one or more items cancelled by Amazon with updated item quantity as zero. | [optional] 
 **isPOChanged** | **Boolean**| When true, returns purchase orders which were modified after the order was placed. Vendors are required to pull the changed purchase order and fulfill the updated purchase order and not the original one. Default value is false. | [optional] 
 **purchaseOrderState** | **String**| Filters purchase orders based on the purchase order state. | [optional] 
 **orderingVendorCode** | **String**| Filters purchase orders based on the specified ordering vendor code. This value should be same as &#39;sellingParty.partyId&#39; in the purchase order. If not included in the filter, all purchase orders for all of the vendor codes that exist in the vendor group used to authorize the API client application are returned. | [optional] 

### Return type

[**GetPurchaseOrdersResponse**](GetPurchaseOrdersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload


## getPurchaseOrdersStatus

> GetPurchaseOrdersStatusResponse getPurchaseOrdersStatus(opts)



Returns purchase order statuses based on the filters that you specify. Date range to search must not be more than 7 days. You can return a list of purchase order statuses using the available filters, or a single purchase order status by providing the purchase order number.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForRetailProcurementOrders from 'selling_partner_api_for_retail_procurement_orders';

let apiInstance = new SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi();
let opts = {
  'limit': 789, // Number | The limit to the number of records returned. Default value is 100 records.
  'sortOrder': "sortOrder_example", // String | Sort in ascending or descending order by purchase order creation date.
  'nextToken': "nextToken_example", // String | Used for pagination when there are more purchase orders than the specified result size limit.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Purchase orders that became available after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Purchase orders that became available before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
  'updatedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Purchase orders for which the last purchase order update happened after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
  'updatedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Purchase orders for which the last purchase order update happened before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
  'purchaseOrderNumber': "purchaseOrderNumber_example", // String | Provides purchase order status for the specified purchase order number.
  'purchaseOrderStatus': "purchaseOrderStatus_example", // String | Filters purchase orders based on the specified purchase order status. If not included in filter, this will return purchase orders for all statuses.
  'itemConfirmationStatus': "itemConfirmationStatus_example", // String | Filters purchase orders based on their item confirmation status. If the item confirmation status is not included in the filter, purchase orders for all confirmation statuses are included.
  'itemReceiveStatus': "itemReceiveStatus_example", // String | Filters purchase orders based on the purchase order's item receive status. If the item receive status is not included in the filter, purchase orders for all receive statuses are included.
  'orderingVendorCode': "orderingVendorCode_example", // String | Filters purchase orders based on the specified ordering vendor code. This value should be same as 'sellingParty.partyId' in the purchase order. If not included in filter, all purchase orders for all the vendor codes that exist in the vendor group used to authorize API client application are returned.
  'shipToPartyId': "shipToPartyId_example" // String | Filters purchase orders for a specific buyer's Fulfillment Center/warehouse by providing ship to location id here. This value should be same as 'shipToParty.partyId' in the purchase order. If not included in filter, this will return purchase orders for all the buyer's warehouses used for vendor group purchase orders.
};
apiInstance.getPurchaseOrdersStatus(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The limit to the number of records returned. Default value is 100 records. | [optional] 
 **sortOrder** | **String**| Sort in ascending or descending order by purchase order creation date. | [optional] 
 **nextToken** | **String**| Used for pagination when there are more purchase orders than the specified result size limit. | [optional] 
 **createdAfter** | **Date**| Purchase orders that became available after this timestamp will be included in the result. Must be in ISO-8601 date/time format. | [optional] 
 **createdBefore** | **Date**| Purchase orders that became available before this timestamp will be included in the result. Must be in ISO-8601 date/time format. | [optional] 
 **updatedAfter** | **Date**| Purchase orders for which the last purchase order update happened after this timestamp will be included in the result. Must be in ISO-8601 date/time format. | [optional] 
 **updatedBefore** | **Date**| Purchase orders for which the last purchase order update happened before this timestamp will be included in the result. Must be in ISO-8601 date/time format. | [optional] 
 **purchaseOrderNumber** | **String**| Provides purchase order status for the specified purchase order number. | [optional] 
 **purchaseOrderStatus** | **String**| Filters purchase orders based on the specified purchase order status. If not included in filter, this will return purchase orders for all statuses. | [optional] 
 **itemConfirmationStatus** | **String**| Filters purchase orders based on their item confirmation status. If the item confirmation status is not included in the filter, purchase orders for all confirmation statuses are included. | [optional] 
 **itemReceiveStatus** | **String**| Filters purchase orders based on the purchase order&#39;s item receive status. If the item receive status is not included in the filter, purchase orders for all receive statuses are included. | [optional] 
 **orderingVendorCode** | **String**| Filters purchase orders based on the specified ordering vendor code. This value should be same as &#39;sellingParty.partyId&#39; in the purchase order. If not included in filter, all purchase orders for all the vendor codes that exist in the vendor group used to authorize API client application are returned. | [optional] 
 **shipToPartyId** | **String**| Filters purchase orders for a specific buyer&#39;s Fulfillment Center/warehouse by providing ship to location id here. This value should be same as &#39;shipToParty.partyId&#39; in the purchase order. If not included in filter, this will return purchase orders for all the buyer&#39;s warehouses used for vendor group purchase orders. | [optional] 

### Return type

[**GetPurchaseOrdersStatusResponse**](GetPurchaseOrdersStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitAcknowledgement

> SubmitAcknowledgementResponse submitAcknowledgement(body)



Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForRetailProcurementOrders from 'selling_partner_api_for_retail_procurement_orders';

let apiInstance = new SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi();
let body = new SellingPartnerApiForRetailProcurementOrders.SubmitAcknowledgementRequest(); // SubmitAcknowledgementRequest | Submits acknowledgements for one or more purchase orders from a vendor.
apiInstance.submitAcknowledgement(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitAcknowledgementRequest**](SubmitAcknowledgementRequest.md)| Submits acknowledgements for one or more purchase orders from a vendor. | 

### Return type

[**SubmitAcknowledgementResponse**](SubmitAcknowledgementResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

