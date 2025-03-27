# TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelInbound**](AwdApi.md#cancelInbound) | **POST** /awd/2024-05-09/inboundOrders/{orderId}/cancellation | 
[**checkInboundEligibility**](AwdApi.md#checkInboundEligibility) | **POST** /awd/2024-05-09/inboundEligibility | 
[**confirmInbound**](AwdApi.md#confirmInbound) | **POST** /awd/2024-05-09/inboundOrders/{orderId}/confirmation | 
[**createInbound**](AwdApi.md#createInbound) | **POST** /awd/2024-05-09/inboundOrders | 
[**getInbound**](AwdApi.md#getInbound) | **GET** /awd/2024-05-09/inboundOrders/{orderId} | 
[**getInboundShipment**](AwdApi.md#getInboundShipment) | **GET** /awd/2024-05-09/inboundShipments/{shipmentId} | 
[**getInboundShipmentLabels**](AwdApi.md#getInboundShipmentLabels) | **GET** /awd/2024-05-09/inboundShipments/{shipmentId}/labels | 
[**listInboundShipments**](AwdApi.md#listInboundShipments) | **GET** /awd/2024-05-09/inboundShipments | 
[**listInventory**](AwdApi.md#listInventory) | **GET** /awd/2024-05-09/inventory | 
[**updateInbound**](AwdApi.md#updateInbound) | **PUT** /awd/2024-05-09/inboundOrders/{orderId} | 
[**updateInboundShipmentTransportDetails**](AwdApi.md#updateInboundShipmentTransportDetails) | **PUT** /awd/2024-05-09/inboundShipments/{shipmentId}/transport | 



## cancelInbound

> cancelInbound(orderId)



Cancels an AWD Inbound order and its associated shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let orderId = "orderId_example"; // String | The ID of the inbound order you want to cancel.
apiInstance.cancelInbound(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The ID of the inbound order you want to cancel. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checkInboundEligibility

> InboundEligibility checkInboundEligibility(body)



Determines if the packages you specify are eligible for an AWD inbound order and contains error details for ineligible packages.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let body = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundPackages(); // InboundPackages | Represents the packages you want to inbound.
apiInstance.checkInboundEligibility(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InboundPackages**](InboundPackages.md)| Represents the packages you want to inbound. | 

### Return type

[**InboundEligibility**](InboundEligibility.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## confirmInbound

> confirmInbound(orderId)



Confirms an AWD inbound order in &#x60;DRAFT&#x60; status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let orderId = "orderId_example"; // String | The ID of the inbound order that you want to confirm.
apiInstance.confirmInbound(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The ID of the inbound order that you want to confirm. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createInbound

> InboundOrderReference createInbound(body)



Creates a draft AWD inbound order with a list of packages for inbound shipment. The operation creates one shipment per order.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let body = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundOrderCreationData(); // InboundOrderCreationData | Payload for creating an inbound order.
apiInstance.createInbound(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InboundOrderCreationData**](InboundOrderCreationData.md)| Payload for creating an inbound order. | 

### Return type

[**InboundOrderReference**](InboundOrderReference.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getInbound

> InboundOrder getInbound(orderId)



Retrieves an AWD inbound order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let orderId = "orderId_example"; // String | The ID of the inbound order that you want to retrieve.
apiInstance.getInbound(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The ID of the inbound order that you want to retrieve. | 

### Return type

[**InboundOrder**](InboundOrder.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInboundShipment

> InboundShipment getInboundShipment(shipmentId, opts)



Retrieves an AWD inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let shipmentId = "shipmentId_example"; // String | ID for the shipment. A shipment contains the cases being inbounded.
let opts = {
  'skuQuantities': "SHOW" // String | If equal to `SHOW`, the response includes the shipment SKU quantity details.  Defaults to `HIDE`, in which case the response does not contain SKU quantities
};
apiInstance.getInboundShipment(shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| ID for the shipment. A shipment contains the cases being inbounded. | 
 **skuQuantities** | **String**| If equal to &#x60;SHOW&#x60;, the response includes the shipment SKU quantity details.  Defaults to &#x60;HIDE&#x60;, in which case the response does not contain SKU quantities | [optional] 

### Return type

[**InboundShipment**](InboundShipment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInboundShipmentLabels

> ShipmentLabels getInboundShipmentLabels(shipmentId, opts)



Retrieves the box labels for a shipment ID that you specify. This is an asynchronous operation. If the label status is &#x60;GENERATED&#x60;, then the label URL is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let shipmentId = "shipmentId_example"; // String | ID for the shipment.
let opts = {
  'pageType': "PLAIN_PAPER", // String | Page type for the generated labels. The default is `PLAIN_PAPER`.
  'formatType': "PDF" // String | The format type of the output file that contains your labels. The default format type is `PDF`.
};
apiInstance.getInboundShipmentLabels(shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| ID for the shipment. | 
 **pageType** | **String**| Page type for the generated labels. The default is &#x60;PLAIN_PAPER&#x60;. | [optional] 
 **formatType** | **String**| The format type of the output file that contains your labels. The default format type is &#x60;PDF&#x60;. | [optional] 

### Return type

[**ShipmentLabels**](ShipmentLabels.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listInboundShipments

> ShipmentListing listInboundShipments(opts)



Retrieves a summary of all the inbound AWD shipments associated with a merchant, with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let opts = {
  'sortBy': "sortBy_example", // String | Field to sort results by. By default, the response will be sorted by UPDATED_AT.
  'sortOrder': "ASCENDING", // String | Sort the response in ASCENDING or DESCENDING order. By default, the response will be sorted in DESCENDING order.
  'shipmentStatus': "CREATED", // String | Filter by inbound shipment status.
  'updatedAfter': new Date("2023-01-12T10:00:00.000Z"), // Date | List the inbound shipments that were updated after a certain time (inclusive). The date must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'updatedBefore': new Date("2023-01-12T10:00:00.000Z"), // Date | List the inbound shipments that were updated before a certain time (inclusive). The date must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'maxResults': 10, // Number | Maximum number of results to return.
  'nextToken': "SampleToken" // String | A token that is used to retrieve the next page of results. The response includes `nextToken` when the number of results exceeds the specified `maxResults` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
};
apiInstance.listInboundShipments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **String**| Field to sort results by. By default, the response will be sorted by UPDATED_AT. | [optional] 
 **sortOrder** | **String**| Sort the response in ASCENDING or DESCENDING order. By default, the response will be sorted in DESCENDING order. | [optional] 
 **shipmentStatus** | **String**| Filter by inbound shipment status. | [optional] 
 **updatedAfter** | **Date**| List the inbound shipments that were updated after a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional] 
 **updatedBefore** | **Date**| List the inbound shipments that were updated before a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional] 
 **maxResults** | **Number**| Maximum number of results to return. | [optional] [default to 25]
 **nextToken** | **String**| A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. | [optional] 

### Return type

[**ShipmentListing**](ShipmentListing.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listInventory

> InventoryListing listInventory(opts)



Lists AWD inventory associated with a merchant with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let opts = {
  'sku': "TestSKU", // String | Filter by seller or merchant SKU for the item.
  'sortOrder': "sortOrder_example", // String | Sort the response in `ASCENDING` or `DESCENDING` order.
  'details': "SHOW", // String | Set to `SHOW` to return summaries with additional inventory details. Defaults to `HIDE,` which returns only inventory summary totals.
  'nextToken': "SampleToken", // String | A token that is used to retrieve the next page of results. The response includes `nextToken` when the number of results exceeds the specified `maxResults` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
  'maxResults': 10 // Number | Maximum number of results to return.
};
apiInstance.listInventory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**| Filter by seller or merchant SKU for the item. | [optional] 
 **sortOrder** | **String**| Sort the response in &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60; order. | [optional] 
 **details** | **String**| Set to &#x60;SHOW&#x60; to return summaries with additional inventory details. Defaults to &#x60;HIDE,&#x60; which returns only inventory summary totals. | [optional] 
 **nextToken** | **String**| A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. | [optional] 
 **maxResults** | **Number**| Maximum number of results to return. | [optional] [default to 25]

### Return type

[**InventoryListing**](InventoryListing.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateInbound

> updateInbound(orderId, body)



Updates an AWD inbound order that is in &#x60;DRAFT&#x60; status and not yet confirmed. Use this operation to update the &#x60;packagesToInbound&#x60;, &#x60;originAddress&#x60; and &#x60;preferences&#x60; attributes.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let orderId = "orderId_example"; // String | The ID of the inbound order that you want to update.
let body = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundOrder(); // InboundOrder | Represents an AWD inbound order.
apiInstance.updateInbound(orderId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The ID of the inbound order that you want to update. | 
 **body** | [**InboundOrder**](InboundOrder.md)| Represents an AWD inbound order. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateInboundShipmentTransportDetails

> updateInboundShipmentTransportDetails(shipmentId, body)



Updates transport details for an AWD shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForAmazonWarehousingAndDistribution from 'the_selling_partner_api_for_amazon_warehousing_and_distribution';

let apiInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
let shipmentId = "shipmentId_example"; // String | The shipment ID.
let body = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.TransportationDetails(); // TransportationDetails | Transportation details for the shipment.
apiInstance.updateInboundShipmentTransportDetails(shipmentId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| The shipment ID. | 
 **body** | [**TransportationDetails**](TransportationDetails.md)| Transportation details for the shipment. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

