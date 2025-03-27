# SellingPartnerApiForDirectFulfillmentShipping.VendorShippingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPackingSlip**](VendorShippingApi.md#getPackingSlip) | **GET** /vendor/directFulfillment/shipping/2021-12-28/packingSlips/{purchaseOrderNumber} | getPackingSlip
[**getPackingSlips**](VendorShippingApi.md#getPackingSlips) | **GET** /vendor/directFulfillment/shipping/2021-12-28/packingSlips | getPackingSlips
[**submitShipmentConfirmations**](VendorShippingApi.md#submitShipmentConfirmations) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shipmentConfirmations | submitShipmentConfirmations
[**submitShipmentStatusUpdates**](VendorShippingApi.md#submitShipmentStatusUpdates) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shipmentStatusUpdates | submitShipmentStatusUpdates



## getPackingSlip

> PackingSlip getPackingSlip(purchaseOrderNumber)

getPackingSlip

Returns a packing slip based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingApi();
let purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The `purchaseOrderNumber` for the packing slip that you want.
apiInstance.getPackingSlip(purchaseOrderNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The &#x60;purchaseOrderNumber&#x60; for the packing slip that you want. | 

### Return type

[**PackingSlip**](PackingSlip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPackingSlips

> PackingSlipList getPackingSlips(createdAfter, createdBefore, opts)

getPackingSlips

Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingApi();
let createdAfter = new Date("2013-10-20T19:20:30+01:00"); // Date | Packing slips that become available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
let createdBefore = new Date("2013-10-20T19:20:30+01:00"); // Date | Packing slips that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
let opts = {
  'shipFromPartyId': "shipFromPartyId_example", // String | The vendor `warehouseId` for order fulfillment. If not specified, the result contains orders for all warehouses.
  'limit': 56, // Number | The maximum number of records to return.
  'sortOrder': "'ASC'", // String | The packing slip creation dates, which are sorted by ascending or descending order.
  'nextToken': "nextToken_example" // String | Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call.
};
apiInstance.getPackingSlips(createdAfter, createdBefore, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | **Date**| Packing slips that become available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | 
 **createdBefore** | **Date**| Packing slips that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | 
 **shipFromPartyId** | **String**| The vendor &#x60;warehouseId&#x60; for order fulfillment. If not specified, the result contains orders for all warehouses. | [optional] 
 **limit** | **Number**| The maximum number of records to return. | [optional] 
 **sortOrder** | **String**| The packing slip creation dates, which are sorted by ascending or descending order. | [optional] [default to &#39;ASC&#39;]
 **nextToken** | **String**| Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call. | [optional] 

### Return type

[**PackingSlipList**](PackingSlipList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitShipmentConfirmations

> TransactionReference submitShipmentConfirmations(body)

submitShipmentConfirmations

Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingApi();
let body = new SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentConfirmationsRequest(); // SubmitShipmentConfirmationsRequest | Request body containing the shipment confirmations data.
apiInstance.submitShipmentConfirmations(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## submitShipmentStatusUpdates

> TransactionReference submitShipmentStatusUpdates(body)

submitShipmentStatusUpdates

This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingApi();
let body = new SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentStatusUpdatesRequest(); // SubmitShipmentStatusUpdatesRequest | Request body containing the shipment status update data.
apiInstance.submitShipmentStatusUpdates(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

