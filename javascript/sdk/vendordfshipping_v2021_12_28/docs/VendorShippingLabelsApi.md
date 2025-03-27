# SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShippingLabels**](VendorShippingLabelsApi.md#createShippingLabels) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | createShippingLabels
[**getShippingLabel**](VendorShippingLabelsApi.md#getShippingLabel) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | getShippingLabel
[**getShippingLabels**](VendorShippingLabelsApi.md#getShippingLabels) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | getShippingLabels
[**submitShippingLabelRequest**](VendorShippingLabelsApi.md#submitShippingLabelRequest) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | submitShippingLabelRequest



## createShippingLabels

> ShippingLabel createShippingLabels(purchaseOrderNumber, body)

createShippingLabels

Creates shipping labels for a purchase order and returns the labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();
let purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The purchase order number for which you want to return the shipping labels. It should be the same number as the `purchaseOrderNumber` in the order.
let body = new SellingPartnerApiForDirectFulfillmentShipping.CreateShippingLabelsRequest(); // CreateShippingLabelsRequest | The request payload that contains the parameters for creating shipping labels.
apiInstance.createShippingLabels(purchaseOrderNumber, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The purchase order number for which you want to return the shipping labels. It should be the same number as the &#x60;purchaseOrderNumber&#x60; in the order. | 
 **body** | [**CreateShippingLabelsRequest**](CreateShippingLabelsRequest.md)| The request payload that contains the parameters for creating shipping labels. | 

### Return type

[**ShippingLabel**](ShippingLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getShippingLabel

> ShippingLabel getShippingLabel(purchaseOrderNumber)

getShippingLabel

Returns a shipping label for the &#x60;purchaseOrderNumber&#x60; that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();
let purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The purchase order number for which you want to return the shipping label. It should be the same `purchaseOrderNumber` that you received in the order.
apiInstance.getShippingLabel(purchaseOrderNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The purchase order number for which you want to return the shipping label. It should be the same &#x60;purchaseOrderNumber&#x60; that you received in the order. | 

### Return type

[**ShippingLabel**](ShippingLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShippingLabels

> ShippingLabelList getShippingLabels(createdAfter, createdBefore, opts)

getShippingLabels

Returns a list of shipping labels created during the time frame that you specify. Use the &#x60;createdAfter&#x60; and &#x60;createdBefore&#x60; parameters to define the time frame. You must use both of these parameters. The date range to search must not be more than seven days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();
let createdAfter = new Date("2013-10-20T19:20:30+01:00"); // Date | Shipping labels that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
let createdBefore = new Date("2013-10-20T19:20:30+01:00"); // Date | Shipping labels that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
let opts = {
  'shipFromPartyId': "shipFromPartyId_example", // String | The vendor `warehouseId` for order fulfillment. If not specified, the result contains orders for all warehouses.
  'limit': 56, // Number | The limit to the number of records returned.
  'sortOrder': "'ASC'", // String | The sort order creation date. You can choose between ascending (`ASC`) or descending (`DESC`) sort order.
  'nextToken': "nextToken_example" // String | Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
};
apiInstance.getShippingLabels(createdAfter, createdBefore, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | **Date**| Shipping labels that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | 
 **createdBefore** | **Date**| Shipping labels that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | 
 **shipFromPartyId** | **String**| The vendor &#x60;warehouseId&#x60; for order fulfillment. If not specified, the result contains orders for all warehouses. | [optional] 
 **limit** | **Number**| The limit to the number of records returned. | [optional] 
 **sortOrder** | **String**| The sort order creation date. You can choose between ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) sort order. | [optional] [default to &#39;ASC&#39;]
 **nextToken** | **String**| Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call. | [optional] 

### Return type

[**ShippingLabelList**](ShippingLabelList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, pagination, shippingLabels


## submitShippingLabelRequest

> TransactionReference submitShippingLabelRequest(body)

submitShippingLabelRequest

Creates a shipping label for a purchase order and returns a &#x60;transactionId&#x60; for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();
let body = new SellingPartnerApiForDirectFulfillmentShipping.SubmitShippingLabelsRequest(); // SubmitShippingLabelsRequest | The request body that contains the shipping labels data.
apiInstance.submitShippingLabelRequest(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShippingLabelsRequest**](SubmitShippingLabelsRequest.md)| The request body that contains the shipping labels data. | 

### Return type

[**TransactionReference**](TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

